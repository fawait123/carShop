import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { customColor } from "../constants";

export default function ButtonSubmit(props) {
  return (
    <TouchableOpacity style={style.container} onPress={props.clickButton}>
      <Text style={style.textButton}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: customColor.black,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textButton: {
    fontSize: 16,
    color: customColor.white,
    fontFamily: "Roboto-Bold",
    letterSpacing: 1,
  },
});
