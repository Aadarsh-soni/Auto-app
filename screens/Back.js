import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Back = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image source={require("../images/smile.png")} />
      </View>
      <Text style={styles.text}>Welcome back!</Text>
      <View style={styles.inputcontainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor={"#FFFFFF"}
          style={styles.input}
        />
      </View>
      <View style={styles.inputcontainer}>
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor={"#FFFFFF"}
          style={styles.input}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttontext}>Login</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.or}>
        ---------------------- or ----------------------
      </Text>
      <View style={styles.container1}>
        <View style={styles.box1}>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../images/facebook.png")}
          />
        </View>
        <View style={styles.box2}>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../images/google.png")}
          />
        </View>
        <View style={styles.box3}>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../images/apple_w.png")}
          />
        </View>
      </View>
      <Text style={styles.dont}>
        Don't have an account?{" "}
        <Text style={{ fontWeight: "bold", textDecorationLine: "underline" }}>
          Sign up
        </Text>
      </Text>
    </View>
  );
}
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    // justifyContent: 'center',
  },
  imagecontainer: {
    alignItems: "center",
    marginTop: 40,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 32.09,
    marginTop: 27,
    marginBottom: 30,
    textAlign: "center",
  },
  inputcontainer: {
    borderRadius: 10,
    marginTop: 18,
    marginBottom: 10,
    letterSpacing: 3,
    borderWidth: 1,
    borderColor: "white",
    height: 64.19,
    width: 355,
  },
  input: {
    flex: 1,
    textAlign: "left",
    color: "#FFFFFF",
    fontSize: 28,
  },

  button: {
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#0098FF",
  },
  buttontext: {
    fontSize: 26,
    marginLeft: 60,
    marginRight: 60,
    textAlign: "center",
    color: "white",
    justifyContent: "center",
    lineHeight: 24,
    fontWeight: "bold",
    letterSpacing: 0,
    color: "white",
  },
  or: {
    color: "#B3C8CF",
    fontSize: 20,
    marginTop: 30,
    marginBottom: 30,
    textAlign: "center",
  },
  container1: {
    // flex: 1,
    marginTop: 6,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  box1: {
    width: 55,
    height: 55,
    marginRight: 30,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
  },
  box2: {
    width: 55,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 30,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
  },
  box3: {
    width: 55,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
  },
  dont: {
    color: "#FFFFFF",
    fontSize: 20,
    marginTop: 30,
    marginBottom: 30,
    textAlign: "center",
  },
});

export default Back;
