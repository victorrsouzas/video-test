import React from "react";

import HomeScreen from "./screens/home/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import VideoDetailScreen from "./screens/videoDetail/VideoDetailScreen";
import LoginScreen from "./screens/login/LoginScreen";


const App: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Login"}
        screenOptions={() => ({
          header: () => <></>,
        })}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="VideoDetail" component={VideoDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
