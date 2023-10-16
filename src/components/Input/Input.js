import React, { memo } from "react";
import { View, TextInput, Image } from "react-native";
import colors from "../../constants/Colors.js";
import styles from "./Input.modules.css";

const Input = ({ placeholder, showSearchIcon, style }) => {
  return (
    <View style={[styles.container, style, { borderColor: colors.lightGray }]}>
      {showSearchIcon ? (
        <Image
          style={styles.icon}
          source={require("../../../assets/search.png")}
        />
      ) : null}
      <TextInput
        placeholderTextColor={colors.lightGray}
        placeholder={placeholder}
        style={[styles.input, { color: colors.black }]}
      />
    </View>
  );
};

Input.defaultProps = {
  placeholder: "Search recipe",
  showSearchIcon: true,
};

export default memo(Input);
