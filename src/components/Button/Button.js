import React, { memo } from "react";
import { TouchableOpacity, Text } from "react-native";
import colors from "../../constants/Colors.js";
import styles from "./Button.modules.css";

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: colors.green }]}
    >
      {children}
    </TouchableOpacity>
  );
};

export default memo(Button);
