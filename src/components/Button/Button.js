import React, { memo } from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import colors from "../../constants/Colors.js";
import styles from "./Button.modules.css";

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: colors.green }]}
    >
      <Text style={[styles.text, { color: colors.white }]}>{children}</Text>
      <Image
        style={styles.icon}
        source={require("../../../assets/arrowRight.png")}
      />
    </TouchableOpacity>
  );
};

export default memo(Button);
