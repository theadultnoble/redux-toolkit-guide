import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import DoneScreen from "./src/screens/DoneScreen/DoneScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Done" component={DoneScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return <App />;
};
