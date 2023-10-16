import React, { memo } from "react";
import { View, TextInput, Image, Pressable } from "react-native";
import colors from "../../constants/Colors.js";
import styles from "./Input.modules.css";

const Input = ({ placeholder, showSearchIcon, style, pressable, onPress }) => {
  const renderInput = () => (
    <View style={[styles.container, style, { borderColor: colors.lightGray }]}>
      {showSearchIcon ? (
        <Image
          style={styles.icon}
          source={require("../../../assets/search.png")}
        />
      ) : null}
      <TextInput
        editable={!pressable}
        placeholderTextColor={colors.lightGray}
        placeholder={placeholder}
        style={[styles.input, { color: colors.black }]}
      />
    </View>
  );

  if (pressable) {
    return (
      <Pressable onPress={onPress}>
        <View pointerEvents="none">{renderInput()}</View>
      </Pressable>
    );
  }

  return <View pointerEvents="none">{renderInput()}</View>;
};

Input.defaultProps = {
  placeholder: "Search recipe",
  showSearchIcon: true,
};

export default memo(Input);
