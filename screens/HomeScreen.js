import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TopNavigation from "../components/TopNavigation";
import { customColor } from "../constants";
import TopHeader from "../components/TopHeader";
import Category from "../components/Category";
import { categories } from "../database";
import FetchData from "../utils/FetchData";
export default function HomeScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    await FetchData({
      url: "machine",
      method: "get",
    })
      .then((res) => {
        setLoading(false);
        setData([...res.data.data]);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  if (loading) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator size={28} />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={style.container}>
      <View>
        <TopNavigation iconLeft="arrow-left" iconRight="settings" />
      </View>
      <View style={style.containerHeader}>
        <TopHeader title="Categories" image="https://picsum.photos/200/300" />
      </View>
      <View style={style.containerCategory}>
        <FlatList
          horizontal={false}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Category item={item} />}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: customColor.white,
  },
  containerHeader: {
    marginTop: 30,
  },
  containerCategory: {
    flex: 1,
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
