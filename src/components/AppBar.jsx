import { View, StyleSheet, Pressable } from "react-native";
import Text from "./Text";
import Constants from "expo-constants";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
  },
  text: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    color: "white",
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text fontWeight="bold" fontSize="subheading" style={styles.text}>
          Repositories
        </Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
