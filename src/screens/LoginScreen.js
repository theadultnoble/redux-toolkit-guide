import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text style={styles.Text}>LoginScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  Text: {
    alignSelf: "center",
    fontSize: 30,
  },
});
