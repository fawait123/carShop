import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Car from "./../assets/svg/Car.svg";
import { customColor } from "../constants";

export default function SplashScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.brand}>Car Shop</Text>
      <Car width={250} height={250} style={{ marginVertical: 40 }} />
      <TouchableOpacity
        style={style.btnWrapper}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={style.textBtnWrapper}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: customColor.white,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 1.5,
    fontFamily: "Roboto-Bold",
  },
  btnWrapper: {
    backgroundColor: customColor.black,
    width: "100%",
    paddingVertical: 12,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  textBtnWrapper: {
    color: customColor.white,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Roboto-Bold",
    letterSpacing: 1.2,
  },
  brand: {
    fontFamily: "Roboto-Bold",
    fontSize: 28,
    letterSpacing: 2,
    marginTop: 10,
  },
});
