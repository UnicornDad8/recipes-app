import React from "react";
import { SafeAreaView, Text } from "react-native";
import styles from "./Home.modules.css";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome</Text>
      <Text onPress={() => navigation.navigate("Search")}>Go to search</Text>
    </SafeAreaView>
  );
};

export default Home;
