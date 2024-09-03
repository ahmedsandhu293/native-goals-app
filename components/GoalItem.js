import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"; // Import the icon library

const GoalItem = (props) => {
  return (
    <View style={styles.eachGoalContainer}>
      <Text style={styles.eachGoalText}>{props.text}</Text>
      <Pressable
        android_ripple={"#dddddd"}
        style={({ pressed }) => pressed && styles.pressedIcon}
        onPress={() => props.onDeleteItem(props.id)}
      >
        <Ionicons
          name="trash-outline"
          size={24}
          color="white"
          style={styles.deleteIcon}
        />
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  eachGoalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#007AFF",
    borderRadius: 6,
    padding: 8,
    margin: 8,
  },
  pressedIcon: {
    opacity: 0.5,
  },
  eachGoalText: {
    color: "white",
    fontSize: 18,
  },
  deleteIcon: {
    marginLeft: 8,
  },
});
