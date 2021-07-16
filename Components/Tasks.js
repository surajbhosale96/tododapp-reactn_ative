import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Tasks = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.tasks}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemText: { fontSize: 20, fontSize: 20, fontWeight: "600", maxWidth: "80%" },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#558CF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemLeft: { flexDirection: "row", alignItems: "center", flexWrap: "wrap" },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#558cf6",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Tasks;
