import { View, Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput secureTextEntry name="password" placeholder="Password" />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text
          fontWeight="bold"
          fontSize="subheading"
          style={styles.button.buttonText}
        >
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    flexDirection: "row",
    justifyContent: "center",
    padding: 15,
    borderRadius: 3,
    buttonText: {
      color: "white",
    },
  },
});

export default SignInForm;
