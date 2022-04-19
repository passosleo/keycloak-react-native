import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useKeycloak } from "@react-keycloak/native";
import logo from "../../assets/images/react-keycloak-logo.png";

const Welcome = () => {
  const [keycloak, initialized] = useKeycloak();
  return (
    <View style={styles.container}>
      <Image source={logo} />
      <Text style={styles.title}>Keycloak React Native Demo App</Text>
      <TouchableOpacity onPress={() => keycloak.login()} style={styles.button}>
        <Text style={styles.text}>Entrar</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 22,
    color: "#000",
    marginVertical: 64,
  },
  button: {
    backgroundColor: "#00a5e5",
    paddingHorizontal: 64,
    paddingVertical: 12,
    borderRadius: 12,
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
});

export default Welcome;
