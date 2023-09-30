import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "./App.modules.css";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        OPEN UP! App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
