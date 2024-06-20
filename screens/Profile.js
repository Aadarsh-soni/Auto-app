import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.pcontainer}>
        <Image
          style={{ width: 40, height: 40, marginLeft: 10, marginRight: 20 }}
          source={require("../images/back.png")}
        />
        <Text style={styles.textP}>Profile</Text>
        <Image
          style={{ width: 40, height: 40, marginRight: 10 }}
          source={require("../images/logout.png")}
        />
      </View>
      <View style={styles.pimage}>
        <View style={styles.shape}></View>
        <View style={styles.pimagetext}>
          <Text style={styles.text1}>Aadarsh</Text>
          <Text style={{ fontSize: 28, fontWeight: "bold" }}>Soni</Text>
          <Text
            style={{
              marginTop: 5,
              fontSize: 16,
              color: "#66A7F4",
              fontWeight: "semi-bold",
            }}
          >
            Edit Profile
          </Text>
        </View>
      </View>
      <View style={styles.shapecont}>
        <View style={styles.shape1}>
          <Image style={styles.speed} source={require("../images/speed.png")} />
          <Text style={styles.speednu}>607</Text>
          <Text style={{ fontWeight: "bold", fontSize: 13, marginLeft: 25 }}>
            Total Km
          </Text>
        </View>
        <View style={styles.shape1}>
          <Image style={styles.speed} source={require("../images/loc.png")} />
          <Text style={styles.speednu}>607</Text>
          <Text style={{ fontWeight: "bold", fontSize: 13, marginLeft: 25 }}>
            Total rides
          </Text>
        </View>
      </View>
      <View style={styles.info}>
        <TouchableOpacity onPress={() => navigation.navigate('History')}>
        <View style={styles.infotext}>
          <Image
            style={{ width: 26, height: 26, marginLeft: 20 }}
            source={require("../images/loc.png")}
          />
          <Text style={styles.infotext1}>Rides History</Text>
          <Image
            style={{ width: 24, height: 23, marginTop: 4, marginLeft: 120 }}
            source={require("../images/go.png")}
          />
          </View>
          </TouchableOpacity>
        <View style={styles.infotext}>
          <Image
            style={{ width: 26, height: 26, marginLeft: 20 }}
            source={require("../images/pay.png")}
          />
          <Text style={styles.infotext1}>Payment Method</Text>
          <Image
            style={{ width: 24, height: 23, marginTop: 4, marginLeft: 85 }}
            source={require("../images/go.png")}
          />
        </View>
        <View style={styles.infotext}>
          <Image
            style={{ width: 26, height: 26, marginLeft: 20 }}
            source={require("../images/term.png")}
          />
          <Text style={styles.infotext1}>Terms & Conditions</Text>
          <Image
            style={{ width: 24, height: 23, marginTop: 4, marginLeft: 60 }}
            source={require("../images/go.png")}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
        <View style={styles.infotext}>
          <Image
            style={{ width: 26, height: 26, marginLeft: 20 }}
            source={require("../images/set.png")}
          />
          <Text style={styles.infotext1}>Settings</Text>
          <Image
            style={{ width: 24, height: 23, marginTop: 4, marginLeft: 167 }}
            source={require("../images/go.png")}
          />
          </View>
          </TouchableOpacity>
        <View style={styles.infotext}>
          <Image
            style={{ width: 26, height: 26, marginLeft: 20 }}
            source={require("../images/support.png")}
          />
          <Text style={styles.infotext1}>Support Center</Text>
          <Image
            style={{ width: 24, height: 23, marginTop: 4, marginLeft: 100 }}
            source={require("../images/go.png")}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  pcontainer: {
    marginTop: 55,
    // borderWidth: 1,
    // borderColor: "#000",
    backgroundColor: "#fff",
    alignItems: "horizontal",
    flexDirection: "row",
  },
  textP: {
    width: 200,
    marginLeft: 80,
    marginRight: 1,
    fontWeight: "bold",
    fontSize: 30,
  },
  pimage: {
    height: 200,
    width: 350,
    alignItems: "left",
    // borderColor: "#000",
    // borderWidth: 1,
    alignItems: "horizontal",
    flexDirection: "row",
  },
  pimagetext: {
    width: 170,

    alignItems: "left",

    marginLeft: 20,
    // borderColor: "#000",
    // borderWidth: 1,
  },
  text1: {
    marginTop: 50,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 28,
  },
  shape: {
    marginTop: 35,
    width: 140,
    height: 140,
    elevation: 8,
    backgroundColor: "#D9D9D9",
    borderRadius: 22,
  },
  shapecont: {
    marginTop: 25,
    width: 350,
    height: 140,
    // borderWidth: 1,
    // borderColor: "#000",
    alignItems: "horizontal",
    flexDirection: "row",
  },
  shape1: {
    marginTop: 20,
    marginLeft: 20,
    width: 139,
    height: 100,
    elevation: 8,
    backgroundColor: "#F4F4F4",
    borderRadius: 22,
  },
  speed: {
    marginTop: 5,
    marginLeft: 20,
  },
  speednu: {
    marginLeft: 21,
    fontWeight: "bold",
    fontSize: 32,
  },
  info: {
    marginTop: 20,
    // borderColor: "#000",
    // borderWidth: 1,
    width: 350,
    height: 250,
  },
  infotext: {
    marginTop: 15,
    marginBottom: 1,
    // borderColor: "#000",
    // borderWidth: 1,
    alignItems: "horizontal",
    flexDirection: "row",
  },
  infotext1: {
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 21,
  },
});

export default Profile;
