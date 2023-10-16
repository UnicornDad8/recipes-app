import { Pressable, Image } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./src/screens/Splash";
import Home from "./src/screens/Home";
import Search from "./src/screens/Search/Search";

const Stack = createStackNavigator();

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
  return (
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
  );
}
