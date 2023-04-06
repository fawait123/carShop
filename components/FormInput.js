import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { customColor } from "../constants";

export default function FormInput(props) {
  return (
    <View style={style.container}>
      <Text style={style.label}>{props.placeholder}</Text>
      <TextInput
        secureTextEntry={props.secureText}
        placeholder={props.placeholder}
        style={style.input}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    borderColor: customColor.gray,
    borderBottomWidth: 1,
    paddingBottom: 3,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontFamily: "Roboto-Bold",
    letterSpacing: 1,
    marginBottom: 6,
  },
  input: {
    fontSize: 16,
    fontFamily: "Roboto-Bold",
    letterSpacing: 1,
  },
});
