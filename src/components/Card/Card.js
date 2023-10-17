import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import colors from "../../constants/Colors";
import styles from "./Card.modules.css";

const { width } = Dimensions.get("window");

const Card = ({ title, image, time, style }) => {
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
          uri: "https://github.com/Ceci007/image-repository/blob/master/img/course-7.jpg?raw=true",
        }}
      />
      <Text numberOfLines={2} style={[styles.title, { color: colors.gray }]}>
        {title}
      </Text>
      <Text style={[styles.label, { color: colors.lightMediumGray }]}>
        Time
      </Text>
      <Text style={[styles.value, { color: colors.gray }]}>{time}</Text>
    </View>
  );
};

export default Card;
