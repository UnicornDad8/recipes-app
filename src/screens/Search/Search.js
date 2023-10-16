import React from "react";
import { SafeAreaView, View } from "react-native";
import Input from "../../components/Input";
import styles from "./Search.modules.css";

const Search = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Input pressable={false} />
      </View>
    </SafeAreaView>
  );
};

export default Search;
