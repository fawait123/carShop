import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function TopHeader(props) {
  return (
    <View style={style.container}>
      <Text style={style.textTitle}>{props.title}</Text>
      <TouchableOpacity>
        <Image style={style.image} source={{ uri: props.image }} />
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textTitle: {
    fontSize: 22,
    fontFamily: "Roboto-Italic",
    letterSpacing: 1,
  },
  image: {
    width: 39,
    height: 39,
    borderRadius: 50,
  },
});
