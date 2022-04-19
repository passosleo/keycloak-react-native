import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { ReactNativeKeycloakProvider } from "@react-keycloak/native";
import Welcome from "./src/screens/welcome";
import keycloak from "./src/constants/keycloak";

export default function App() {
  return (
    <ReactNativeKeycloakProvider
      authClient={keycloak}
      initOptions={{
        redirectUri: "keycloakdemo://profile",
        // if you need to customize "react-native-inappbrowser-reborn" View you can use the following attribute
        inAppBrowserOptions: {
          // For iOS check: https://github.com/proyecto26/react-native-inappbrowser#ios-options
          // For Android check: https://github.com/proyecto26/react-native-inappbrowser#android-options
        },
      }}
    >
      <Welcome />
      <Text>HelloWorld!</Text>
    </ReactNativeKeycloakProvider>
  );
};