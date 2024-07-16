import { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  Button,
  Alert,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db, storage } from "../../FirebaseConfig";

export default function Explore() {

  const [image, setImage] = useState("");
  const [files, setFiles] = useState([]);
  const [cameraPermission, requestCameraPermission] = ImagePicker.useCameraPermissions();
  const [mediaLibraryPermission, requestMediaLibraryPermission] = ImagePicker.useMediaLibraryPermissions();

  
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "files"), (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          console.log("New file", change.doc.data());
          setFiles((prevFiles) => [...prevFiles, change.doc.data()]);
        }
      });
    });
    return () => unsubscribe();
  }, []);

  async function takePhoto() {
    // permission check
    // TODO: Move this check to onboarding, keep here for sanity check
    if (cameraPermission?.status !== ImagePicker.PermissionStatus.GRANTED) {
      requestCameraPermission();
    }

    try {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [3, 1],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
        // upload the image
        console.log(image)
        await uploadImage(result.assets[0].uri, "image");
      }
    } catch (e) {
      Alert.alert("Error Uploading Image " + e.message);
    }
    
  };
  

  async function pickImage() {
    
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [3, 1],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
        // upload the image
        console.log(image)
        await uploadImage(result.assets[0].uri, "image");
      }
    } catch (e) {
      Alert.alert("Error Picking & Uploading Image " + e.message);
    }
  }

  
  async function uploadImage(uri, fileType) {
    const response = await fetch(uri);
    const blob = await response.blob();

    const storageRef = ref(storage, "Stuff/" + new Date().getTime());
    const uploadTask = uploadBytesResumable(storageRef, blob);

    // listen for events
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        // handle error
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log("File available at", downloadURL);
          // save record
          await saveRecord(fileType, downloadURL, new Date().toISOString());
          setImage("");
        });
      }
    );
  }

  async function saveRecord(fileType, url, createdAt) {
    try {
      const docRef = await addDoc(collection(db, "files"), {
        fileType,
        url,
        createdAt,
      });
      console.log("document saved correctly", docRef.id);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={files}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => {
          return (
            <Image
              source={{ uri: item.url }}
              style={{ width: "34%", height: 100 }}
            />
          );
        }}
        numColumns={3}
        contentContainerStyle={{ gap: 2 }}
        columnWrapperStyle={{ gap: 2 }}
      />
      <TouchableOpacity
        onPress={pickImage}
        style={{
          position: "absolute",
          bottom: 90,
          right: 30,
          width: 44,
          height: 44,
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 25,
        }}
      >
        <Ionicons name="image" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={takePhoto}
        style={{
          position: "absolute",
          bottom: 150,
          right: 30,
          width: 44,
          height: 44,
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 25,
        }}
      >
        <Ionicons name="camera" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}