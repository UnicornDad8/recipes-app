import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import Rating from "../Rating";
import colors from "../../constants/Colors";
import styles from "./RecipeCard.modules.css";

const { width } = Dimensions.get("window");

const RecipeCard = ({ title, image, author, rating, time, style }) => {
  return (
    <View
      style={[
        {
          borderRadius: 10,
          padding: 10,
          width: width * 0.7,
          marginBottom: 32,
          marginTop: 46,
          marginRight: 16,
          // ios
          backgroundColor: colors.white,
          shadowColor: colors.black,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          // Android
          elevation: 3,
        },
        style,
      ]}
    >
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text
            numberOfLines={1}
            style={[styles.title, { color: colors.gray }]}
          >
            {title}
          </Text>
          <Rating rating={rating} />
        </View>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
      </View>

      <View style={styles.cardBody}>
        {author ? (
          <View style={styles.row}>
            <Image
              style={[
                styles.authorImage,
                { backgroundColor: colors.lightGray },
              ]}
              source={{ uri: author?.image }}
            />
            <Text
              style={[styles.cardFooter, { color: colors.lightMediumGray }]}
            >
              By {author?.name}
            </Text>
          </View>
        ) : (
          <View />
        )}

        {time ? (
          <View style={styles.row}>
            <Image
              style={styles.timerIcon}
              source={require("../../../assets/timer.png")}
            />
            <Text
              style={[styles.cardFooter, { color: colors.lightMediumGray }]}
            >
              {time}
            </Text>
          </View>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
};

export default RecipeCard;
