import { memo } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import colors from "../../constants/Colors";
import styles from "./Categories.modules.css";

const Categories = ({ categories, selectedCategory, onCategoryPress }) => {
  return (
    <View>
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => String(item)}
        showsHorizontalScrollIndicator={false}
        style={{ marginHorizontal: -24, marginTop: 24 }}
        renderItem={({ item, index }) => {
          const selected = selectedCategory === item;

          return (
            <TouchableOpacity
              onPress={() => onCategoryPress(item)}
              style={[
                styles.itemContainer,
                selected
                  ? [
                      styles.selectedItemContainer,
                      { backgroundColor: colors.green },
                    ]
                  : {},
                index === 0 ? { marginLeft: 24 } : {},
              ]}
            >
              <Text
                style={[
                  styles.item,
                  { color: colors.green },
                  selected
                    ? [styles.selectedItem, { color: colors.white }]
                    : {},
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default memo(Categories);
