import React, { useEffect, useState, useContext } from "react";
import { SafeAreaView, ScrollView, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HealthyRecipesContext, RecipesContext } from "../../../App";
import Input from "../../components/Input";
import Title from "../../components/Title";
import RecipeCard from "../../components/RecipeCard";
import Card from "../../components/Card";
import Categories from "../../components/Categories";
import styles from "./Home.modules.css";

const Home = ({ navigation }) => {
  const { recipes } = useContext(RecipesContext);
  const { healthyRecipes } = useContext(HealthyRecipesContext);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    const tagsList = [];

    recipes?.forEach((recipe) => {
      recipe?.tags?.forEach((tag) => {
        if (!tagsList?.includes(tag?.name)) {
          tagsList?.push(tag?.name);
        }
      });
    });

    setTags(tagsList);
    if (tagsList) setSelectedTag(tagsList[0]);
  }, [recipes]);

  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Input
            pressable={true}
            onPress={() => navigation.navigate("Search")}
          />
          <Title text="Healthy Recipes" />

          <FlatList
            horizontal
            data={healthyRecipes}
            style={{ marginHorizontal: -24 }}
            keyExtractor={(item) => String(item?.id)}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <RecipeCard
                style={index === 0 ? { marginLeft: 24 } : {}}
                key={index}
                title={item?.name}
                time={item?.cook_time_minutes}
                image={item?.thumbnail_url}
                rating={item?.user_ratings?.score}
                author={
                  item?.credits?.length
                    ? {
                        name: item?.credits[0]?.name,
                        image: item?.credits[0]?.image_url,
                      }
                    : null
                }
              />
            )}
          />

          <Categories
            categories={tags}
            selectedCategory={selectedTag}
            onCategoryPress={setSelectedTag}
          />

          <FlatList
            horizontal
            data={recipes}
            style={{ marginHorizontal: -24 }}
            keyExtractor={(item) => String(item?.id)}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <Card
                style={index === 0 ? { marginLeft: 24 } : {}}
                key={index}
                title={item?.name}
                servings={item?.num_servings}
                image={item?.thumbnail_url}
                rating={item?.user_ratings?.score}
                author={
                  item?.credits?.length
                    ? {
                        name: item?.credits[0]?.name,
                        image: item?.credits[0]?.image_url,
                      }
                    : null
                }
              />
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
