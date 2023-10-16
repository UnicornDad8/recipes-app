import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import Input from "../../components/Input";
import styles from "./Home.modules.css";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Welcome</Text>
        <Text onPress={() => navigation.navigate("Search")}>Go to search</Text>
        <Input />
      </View>
    </SafeAreaView>
  );
};

export default Home;
