import * as React from "react";
import {
  Button,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Category, Transaction, TransactionsByMonth } from "../../types";
import TransactionList from "../../components/vehicle/VehicleList";
import Card from "../../components/vehicle/VehicleDataCard";
// import AddTransaction from "../components/AddTransaction";
// import { BlurView } from "expo-blur";
// import { SymbolView } from "expo-symbols";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import TransactionListItem from "@/components/vehicle/VehicleListItem";
// import SummaryChart from "../components/SummaryChart";

type StackParamList = {
  Payment: undefined;
};

export default function DataScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamList, "Payment">>();
  // const [categories, setCategories] = React.useState<Category>();
  // const [transactions, setTransactions] = React.useState<Transaction>({id:12,category_id:3,amount:3000,date:3,description:"bla",type:"Income"});
  const [categories, setCategories] = React.useState<Category[]>([
    {id:3,name:"Electronics",type:"Income"},
    {id:2,name:"Bonus",type:"Expense"},
  ]);
  const [transactions, setTransactions] = React.useState<Transaction[]>([ 
    {id:12,category_id:3,amount:3213,date:3,description:"bla",type:"Income"},
    {id:11,category_id:4,amount:3232,date:3,description:"bla2",type:"Expense"},
    {id:13,category_id:3,amount:3232,date:3,description:"bla2",type:"Expense"},
    {id:14,category_id:2,amount:3232,date:3,description:"bla2",type:"Expense"},
    {id:15,category_id:2,amount:3232,date:3,description:"bla2",type:"Expense"},
    {id:16,category_id:2,amount:3232,date:3,description:"bla2",type:"Expense"},
    {id:17,category_id:2,amount:3232,date:3,description:"bla2",type:"Expense"},
    {id:18,category_id:2,amount:3232,date:3,description:"bla2",type:"Expense"},
    {id:19,category_id:2,amount:3232,date:3,description:"bla2",type:"Expense"},
    {id:20,category_id:2,amount:3232,date:3,description:"bla2",type:"Expense"},
    {id:21,category_id:2,amount:3232,date:3,description:"bla2",type:"Expense"},
    {id:31,category_id:2,amount:3232,date:3,description:"bla2",type:"Expense"},
]);

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          padding: 15,
          paddingVertical: Platform.OS === "ios" ? 100 : 70,
        }}
      >
        {/* <AddTransaction insertTransaction={insertTransaction} /> */}
        {/*
        <TransactionListItem
          categoryInfo={categories}
          transaction={transactions}
          // deleteTransaction={deleteTransaction}
        />
        */}
    
        <TransactionList
          categories={categories}
          transactions={transactions}
          // deleteTransaction={deleteTransaction}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    paddingBottom: 7,
  },
  blur: {
    width: "100%",
    height: 110,
    position: "absolute",
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: "#00000010",
    padding: 16,
  },
  periodTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  summaryText: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
  },
  // Removed moneyText style since we're now generating it dynamically
});