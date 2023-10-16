import React, { memo } from "react";
import { Text } from "react-native";
import colors from "../../constants/Colors";
import styles from "./Title.modules.css";

const Title = ({ text, style }) => {
  return (
    <Text style={[styles.title, style, { color: colors.black }]}>{text}</Text>
  );
};

Title.defaultProps = {
  text: "Title",
};

export default memo(Title);
