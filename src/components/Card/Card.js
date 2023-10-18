import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import colors from "../../constants/Colors";
import styles from "./Card.modules.css";

const { width } = Dimensions.get("window");

const Card = ({ title, image, servings, style }) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: "rgba(217, 217, 217, 0.5)", width: width * 0.4 },
        style,
      ]}
    >
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <Text numberOfLines={2} style={[styles.title, { color: colors.gray }]}>
        {title}
      </Text>
      {servings ? (
        <>
          <Text style={[styles.label, { color: colors.lightMediumGray }]}>
            Servings
          </Text>
          <Text style={[styles.value, { color: colors.gray }]}>
            {servings} plates
          </Text>
        </>
      ) : null}
    </View>
  );
};

export default Card;
