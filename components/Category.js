import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { customColor } from "../constants";

export default function Category(props) {
  return (
    <TouchableOpacity style={style.container}>
      <Image
        style={style.image}
        source={{
          uri: "https://df0d-140-213-170-107.ap.ngrok.io/" + props.item.picture,
        }}
      />
      <Text style={style.textTitle}>{props.item.name || "loading"}</Text>
      <Text style={style.subTitle}>
        {props.item.assets.length || 0} Product
      </Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: customColor.white,
    width: "45%",
    margin: 5,
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: customColor.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  textTitle: {
    fontSize: 20,
    fontFamily: "Roboto-Bold",
    letterSpacing: 1,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: "Roboto-Italic",
    marginTop: 15,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
});
