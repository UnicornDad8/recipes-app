import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import Input from "../../components/Input";
import Title from "../../components/Title";
import RecipeCard from "../../components/RecipeCard";
import Categories from "../../components/Categories";
import styles from "./Home.modules.css";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Input pressable={true} onPress={() => navigation.navigate("Search")} />
        <Title text="Featured Recipes" />
        <RecipeCard
          title="Steak with tomato sauce and bulgur rice"
          time="20 mins"
          author={{
            name: "James Milner",
            image:
              "https://github.com/Ceci007/image-repository/blob/master/img/team-5.jpg?raw=true",
          }}
        />
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
