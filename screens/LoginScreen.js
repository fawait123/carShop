import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { customColor } from "../constants";
import FormInput from "../components/FormInput";
import ButtonSubmit from "../components/ButtonSubmit";
import Car from "./../assets/svg/Car.svg";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
  const loginAction = () => {
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView style={style.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={style.textTitle}>LOGIN</Text>
        <View style={style.containerImage}>
          <Car width={150} height={150} />
        </View>
        <View style={style.containerInput}>
          <FormInput placeholder="Username" />
          <FormInput placeholder="Password" secureText={true} />
        </View>
        <View style={style.containerButton}>
          <ButtonSubmit title="LOGIN" clickButton={loginAction} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: customColor.white,
    padding: 20,
  },
  textTitle: {
    fontSize: 28,
    fontFamily: "Roboto-Bold",
    letterSpacing: 1.5,
    marginTop: 40,
  },
  containerInput: {
    marginTop: 20,
  },
  containerButton: {
    marginTop: 40,
  },
  containerImage: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
