import { View, Image, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

import Count from "./Count";

const RepositoryItem = ({ repository }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <Image
          source={{ uri: repository.ownerAvatarUrl }}
          style={styles.topWrapper.image}
        />
        <View style={{ marginLeft: 15, alignItems: "flex-start" }}>
          <Text fontSize="subheading" fontWeight="bold">
            {repository.fullName}
          </Text>
          <Text color="textSecondary" style={styles.topWrapper.description}>
            {repository.description}
          </Text>
          <Text style={styles.topWrapper.language}>{repository.language}</Text>
        </View>
      </View>
      <View style={styles.subWrapper}>
        <Count count={repository.stargazersCount} label="Stars" />
        <Count count={repository.forksCount} label="Forks" />
        <Count count={repository.reviewCount} label="Reviews" />
        <Count count={repository.ratingAverage} label="Rating" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10, backgroundColor: "white" },
  topWrapper: {
    flexDirection: "row",
    image: {
      width: 44,
      height: 44,
      borderRadius: 3,
    },
    description: {
      marginTop: 5,
    },
    language: {
      backgroundColor: theme.colors.primary,
      padding: 5,
      color: "white",
      borderRadius: 3,
      overflow: "hidden",
      marginTop: 10,
    },
  },
  subWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
});

export default RepositoryItem;
