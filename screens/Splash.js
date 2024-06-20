import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login')
    },2000)
  },[])
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image
          style={styles.image}
          source={require("../images/Auto_app.gif")}
        />
      </View>
      <Image style={styles.image2} source={require("../images/Riksha.png")} />
      <View style={styles.imagecontainer2}>
        <Image style={styles.image3} source={require("../images/rapid.png")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 1000,
    backgroundColor: "#000000",
    alignItems: "center",
    // marginTop: 200,

    // justifyContent: 'center',
  },
  imagecontainer: {
    alignItems: "center",
    justifyContent: "center",
    // borderColor: "white",
    // marginBottom: 200,
    // borderWidth: 1,
    paddingTop: 100,

    width: 200,
    marginTop: 40,
  },
  image: {
    width: 300,
    height: 300,
  },
  text: {
    marginTop: 40,
    color: "white",
    fontWeight: "bold",
    fontSize: 50,
  },
  image2: {
    width: 350,
    height: 100,
    marginTop: 50,
  },
  imagecontainer2: {
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
    // borderColor: "white",
    // marginBottom: 200,
    // borderWidth: 1,
    // paddingTop: 50,
    height: 100,
    width: 100,
  },
  image3: {
    resizeMode: "contain",
    width: "300%",
    height: "50%",
  },
});

export default SplashScreen;
