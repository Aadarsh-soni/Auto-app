import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Pressable,
  onPress,
  TouchableOpacity,
} from "react-native";
// import { Image } from "react-native";
//
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textcontainer}>
        <Text style={styles.text1}>Welcome to Riksha.</Text>
      </View>
      <View style={styles.shape}>
        <Image
          style={styles.googleim}
          source={require("../images/google.png")}
        />
        <Text style={styles.google}>Login with Google</Text>
      </View>
      <View style={styles.shape}>
        <Image
          style={styles.googleim}
          source={require("../images/apple.png")}
        />
        <Text style={styles.google}>Login with Apple</Text>
      </View>
      <View style={styles.shape}>
        <Image
          style={styles.googleim}
          source={require("../images/facebook.png")}
        />
        <Text style={styles.google}>Login with Facebook</Text>
      </View>
      <View style={styles.or}>
        <Text style={styles.or1}>or by email</Text>
      </View>
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
        <Text style={styles.forgot}>Forgot Password?</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
        <Text style={styles.text}>Sign in</Text>
        <Image
          style={styles.googleim}
          source={require("../images/Arrow.png")}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.create}>
          Don't have an account?{" "}
          <Text
            style={{
              color: "#0098ff",
              textDecorationLine: "underline",
              fontWeight: "bold",
            }}
          >
            Create an account
          </Text>{" "}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    // paddingTop: 80,
  },
  textcontainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 25,
  },
  text1: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  shape: {
    width: 350,
    height: 60,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    flexDirection: "row",
  },
  googleim: {
    marginRight: 45,
  },
  google: {
    fontSize: 22,
    fontWeight: "bold",
  },
  or: {
    marginTop: 25,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  or1: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  inputcontainer: {
    borderRadius: 10,
    marginTop: 18,
    marginBottom: 10,
    letterSpacing: 3,
    borderWidth: 1,
    borderColor: "white",
    height: 45,
    width: 325,
  },
  input: {
    flex: 1,
    textAlign: "left",
    color: "#FFFFFF",
    fontSize: 28,
  },
  forgot: {
    color: "#BEBEBE",
    marginTop: 11,
    fontSize: 16,
    textAlign: "right",
    width: 325,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#0098FF",
  },
  text: {
    fontSize: 20,
    marginLeft: 60,
    marginRight: 20,
    textAlign: "center",
    color: "white",
    justifyContent: "center",
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0,
    color: "white",
  },
  create: {
    color: "#BEBEBE",
    marginTop: 15,
    fontSize: 16,
    textAlign: "center",
    width: 325,
    fontWeight: "bold",
  },
});

export default Login;
