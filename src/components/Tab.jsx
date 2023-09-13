import { StyleSheet } from "react-native";
import Text from "./Text";
import { Link } from "react-router-native";

const Tab = ({ label, path }) => {
  return (
    <Link to={path}>
      <Text fontWeight="bold" fontSize="subheading" style={styles.text}>
        {label}
      </Text>
    </Link>
  );
};

const styles = StyleSheet.create({
  text: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    color: "white",
  },
});

export default Tab;
