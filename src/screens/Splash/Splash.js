import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import Button from "../../components/Button";
import colors from "../../constants/Colors";
import styles from "./Splash.modules.css";

const Splash = ({ navigation }) => {
  return (
    <View>
      <StatusBar style="light" />
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={require("../../../assets/splash.png")}
      >
        <View style={styles.container}>
          <View>
            <Image
              style={styles.logo}
              source={require("../../../assets/logo.png")}
            />
            <Text style={[styles.title, { color: colors.white }]}>
              100K+ Premium Recipe
            </Text>
          </View>
          <View>
            <Text style={[styles.bigTitle, { color: colors.white }]}>
              Get Cooking
            </Text>
            <Text style={[styles.subtitle, { color: colors.white }]}>
              Simple way to find Tasty Recipe
            </Text>
            <Button onPress={() => navigation.navigate("Home")}>
              <Text style={[styles.text, { color: colors.white }]}>
                Start Cooking
              </Text>
              <Image
                style={styles.icon}
                source={require("../../../assets/arrowRight.png")}
              />
            </Button>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Splash;
