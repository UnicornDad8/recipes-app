import React, { useContext } from "react";
import { SafeAreaView, ScrollView, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { RecipesContext } from "../../../App";
import Input from "../../components/Input";
import Title from "../../components/Title";
import RecipeCard from "../../components/RecipeCard";
import Card from "../../components/Card";
import Categories from "../../components/Categories";
import styles from "./Home.modules.css";

const Home = ({ navigation }) => {
  const { recipes } = useContext(RecipesContext);
  console.log(recipes);

  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Input
            pressable={true}
            onPress={() => navigation.navigate("Search")}
          />
          <Title text="Featured Recipes" />

          <FlatList
            horizontal
            data={[1, 2, 3]}
            style={{ marginHorizontal: -24 }}
            keyExtractor={(item) => String(item)}
            showsHorizontalScrollIndicator={false}
            renderItem={({ index }) => (
              <RecipeCard
                style={index === 0 ? { marginLeft: 24 } : {}}
                title="Steak with tomato sauce and bulgur rice."
                time="20 mins"
                author={{
                  name: "James Milner",
                  image:
                    "https://github.com/Ceci007/image-repository/blob/master/img/team-5.jpg?raw=true",
                }}
              />
            )}
          />

          <Categories
            categories={["Trending", "Seasonal"]}
            selectedCategory="Trending"
            onCategoryPress={() => {}}
          />

          <FlatList
            horizontal
            data={[1, 2, 3]}
            style={{ marginHorizontal: -24 }}
            keyExtractor={(item) => String(item)}
            showsHorizontalScrollIndicator={false}
            renderItem={({ index }) => (
              <Card
                style={index === 0 ? { marginLeft: 24 } : {}}
                title="Steak with tomato sauce and bulgur rice."
                time="20 mins"
                author={{
                  name: "James Milner",
                  image:
                    "https://github.com/Ceci007/image-repository/blob/master/img/team-5.jpg?raw=true",
                }}
              />
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
