import { View } from "react-native";
import Text from "./Text";

const Count = ({ count, label }) => {
  return (
    <View>
      <Text fontWeight="bold">
        {count > 1000 ? (count / 1000).toFixed(1) + "k" : count}
      </Text>
      <Text color="textSecondary">{label}</Text>
    </View>
  );
};
export default Count;
