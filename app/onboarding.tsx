import { Image, StyleSheet, Platform, Button, Alert } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Onboarding() {

    // Permissions Declerations   
    const [cameraPermission, requestCameraPermission] = ImagePicker.useCameraPermissions();

    // Main
    const handleContinue = async () => {
        await requestAllPermissions();
        // navigate to tabs
        router.replace("/(tabs)");
    };

    async function requestAllPermissions() {

        const cameraStatus = await requestCameraPermission();
        if (!cameraStatus.granted) {
            Alert.alert("Warning", "Without camera permission, only media library images can be selected. In case you want to use the camera features, please allow camera permissions in the settings.");
        }

        // only set to true once user provides permissions
        // this prevents taking user to home screen without permissions
        await AsyncStorage.setItem("hasOpened", "true");
    }

    return (
        <ParallaxScrollView
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        headerImage={ 
            <Image
                source={require("@/assets/images/splash.png")}
                style={styles.reactLogo}
            />
        }
        >
        <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Otobotox App!</ThemedText>
            <HelloWave />
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
            <ThemedText>
            Hello colleagues! This app requires the following permissions:
            </ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">Camera Permissions</ThemedText>
            <ThemedText>🎥 For taking pictures of the Car Plate or Chasis Number as well as the order request forms. However you can also use the app without this permission and only use your media library to select images to be processed and uploaded.
            </ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">Note</ThemedText>
            <ThemedText>📸 We do not require media library permissions. Only the images selected for upload will be available for the app.</ThemedText>
        </ThemedView>
        <Button title="Continue" onPress={handleContinue} />
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});