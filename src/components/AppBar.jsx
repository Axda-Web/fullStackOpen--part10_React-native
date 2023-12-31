import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import Tab from "./Tab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    flexDirection: "row",
  },
});

const views = [
  {
    path: "/",
    label: "Repositories",
  },
  {
    path: "/signin",
    label: "Sign In",
  },
];

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {views.map(({ path, label }) => (
          <Tab key={path} path={path} label={label} />
        ))}
      </ScrollView>
    </View>
  );
};

export default AppBar;
