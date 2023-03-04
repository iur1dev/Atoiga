import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

import * as Animatable from "react-native-animatable";

import { useNavigation } from "@react-navigation/native";

const data = [
  { id: 1, name: "Item 1", value1: "Value 1", value2: "Value 2" },
  { id: 2, name: "Item 2", value1: "Value 1", value2: "Value 2" },
  { id: 3, name: "Item 3", value1: "Value 1", value2: "Value 2" },
  // ...mais itens
];

const renderItem = ({ item }) => (
  <View style={styles.row}>
    <Text style={styles.cell}>{item.name}</Text>
    <Text style={styles.cell}>{item.value1}</Text>
    <Text style={styles.cell}>{item.value2}</Text>
  </View>
);

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Name</Text>
        <Text style={styles.headerText}>Value 1</Text>
        <Text style={styles.headerText}>Value 2</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#38A69D",
  },
  header: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 10,
  },
  headerText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 10,
  },
  cell: {
    textAlign: "center",
    fontSize: 16,
    paddingLeft: 4,
    paddingRight: 4,
  },
});
