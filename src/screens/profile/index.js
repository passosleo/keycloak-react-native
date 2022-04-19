import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d3dedc",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Profile;
