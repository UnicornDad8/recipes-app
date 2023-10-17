import React, { memo } from "react";
import { View, Image } from "react-native";
import styles from "./Rating.modules.css";

const Rating = ({ rating }) => {
  const arr = [1, 2, 3, 4, 5];

  const renderStars = () => {
    return arr?.map((star, index) => {
      if (Math.round(rating) >= star) {
        return (
          <Image
            key={index}
            style={styles.star}
            source={require("../../../assets/star.png")}
          />
        );
      }

      return (
        <Image
          key={index}
          style={styles.star}
          source={require("../../../assets/starEmpty.png")}
        />
      );
    });
  };

  return <View style={styles.row}>{renderStars()}</View>;
};

export default memo(Rating);
