import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import Input from "../../components/Input";
import Title from "../../components/Title";
import Categories from "../../components/Categories";
import styles from "./Home.modules.css";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Input pressable={true} onPress={() => navigation.navigate("Search")} />
        <Title text="Featured Recipes" />
        <Categories
          categories={["Trending", "Seasonal"]}
          selectedCategory="Trending"
          onCategoryPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
