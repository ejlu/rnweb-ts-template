import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "navigation";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default App;
