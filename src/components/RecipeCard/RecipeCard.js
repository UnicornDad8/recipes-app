import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import Rating from "../Rating";
import colors from "../../constants/Colors";
import styles from "./RecipeCard.modules.css";

const { width } = Dimensions.get("window");

const RecipeCard = ({ title, image, author, rating, time }) => {
  return (
    <View
      style={{
        borderRadius: 10,
        padding: 10,
        width: width * 0.7,
        marginVertical: 16,
        marginTop: 46,
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
      }}
    >
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text
            numberOfLines={1}
            style={[styles.title, { color: colors.gray }]}
          >
            {title}
          </Text>
          <Rating rating={4.2} />
        </View>
        <Image
          style={styles.image}
          source={{
            uri: "https://github.com/Ceci007/image-repository/blob/master/img/course-7.jpg?raw=true",
          }}
        />
      </View>

      <View style={styles.cardBody}>
        <View style={styles.row}>
          <Image style={styles.authorImage} source={{ uri: author?.image }} />
          <Text style={[styles.cardFooter, { color: colors.lightMediumGray }]}>
            By {author?.name}
          </Text>
        </View>
        <View style={styles.row}>
          <Image
            style={styles.timerIcon}
            source={require("../../../assets/timer.png")}
          />
          <Text style={[styles.cardFooter, { color: colors.lightMediumGray }]}>
            {time}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RecipeCard;
