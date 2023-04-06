import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

export default function TopNavigation(props) {
  return (
    <View style={style.container}>
      <TouchableOpacity>
        <Feather name={props.iconLeft} style={style.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name={props.iconRight} style={style.icon} />
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    fontSize: 24,
  },
});
