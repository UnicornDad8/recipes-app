import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import Button from "../../components/Button/Button";
import colors from "../../constants/Colors";
import styles from "./Splash.modules.css";

const Splash = () => {
  return (
    <View>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={require("../../../assets/splash.png")}
      >
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require("../../../assets/logo.png")}
          />
          <Text style={[styles.title, { color: colors.white }]}>
            100K+ Premium Recipe
          </Text>
          <Button>Start Cooking</Button>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Splash;
