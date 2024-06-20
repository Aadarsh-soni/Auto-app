import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
// import Back from "./screens/Back";
import Splash from "./screens/Splash";
import Profile from "./screens/Profile";
import Dashboard from "./screens/Dashboard";
import History from "./screens/History";
import Setting from "./screens/Setting";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
        {/* <Stack.Screen name="back" component={Back} /> */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Setting" component={Setting} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });


// <NavigationContainer>
    //   <stack.Navigator screenOptions={{ headerShown: false }}>
    //     <stack.Screen name="back" component={Back} />
    //     <stack.Screen name="Login" component={Login} />
    //   </stack.Navigator>
    // </NavigationContainer>
