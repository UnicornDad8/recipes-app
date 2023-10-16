import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import Input from "../../components/Input";
import styles from "./Home.modules.css";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Input pressable={true} onPress={() => navigation.navigate("Search")} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
