import React, { createContext, useState, useEffect } from "react";
import { Pressable, Image } from "react-native";
import { getRecipesList } from "./src/http";
import "react-native-gesture-handler";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./src/screens/Splash";
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";

const Stack = createStackNavigator();
export const RecipesContext = createContext();
export const HealthyRecipesContext = createContext();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff",
  },
};

const BackButton = (props) => {
  return (
    <Pressable onPress={props.onPress}>
      <Image
        style={{ width: 24, height: 24, margin: 16 }}
        source={require("./assets/back.png")}
      />
    </Pressable>
  );
};

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [healthyRecipes, setHealthyRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      const recipesResponse = await handleRecipesFetch(null, "15");
      setRecipes(recipesResponse);
      const healthyRecipesResponse = await handleRecipesFetch("healthy", "5");
      setHealthyRecipes(healthyRecipesResponse);
    })();
  }, []);

  const handleRecipesFetch = async (tags, size) => {
    try {
      const recipes = await getRecipesList(tags, size);
      return recipes?.data?.results;
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <HealthyRecipesContext.Provider
      value={{ healthyRecipes, setHealthyRecipes }}
    >
      <RecipesContext.Provider value={{ recipes, setRecipes }}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator
            screenOptions={{
              headerTitleAlign: "center",
              headerShadowVisible: false,
            }}
          >
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerLeft: null, gestureEnabled: false }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{ headerLeft: (props) => <BackButton {...props} /> }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </RecipesContext.Provider>
    </HealthyRecipesContext.Provider>
  );
}
