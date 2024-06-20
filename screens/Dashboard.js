import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/FontAwesome";

const Stack = createNativeStackNavigator();

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.tittle}>
        <Text style={styles.text}>Riksha.</Text>
      </View>
      <View style={styles.searchcon}>
        <View style={styles.search}>
          <TextInput
            placeholder="Where to?"
            placeholderTextColor={"#000"}
            style={styles.input}
          ></TextInput>
        </View>

        <View style={styles.buttonP}>
          <TouchableOpacity>
            <Icon
              name="search"
              style={{ marginLeft: 10, marginTop: 10 }}
              size={30}
              color="#000"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.servis}>
        <Text style={styles.text}>Services</Text>
      </View>
      <View style={styles.shapecon}>
        <View style={styles.shape}>
          <Image
            style={{ width: 56, height: 61 }}
            source={require("../images/trip.png")}
          />
          <Text style={styles.textser}>Trip</Text>
        </View>
        <View style={styles.shape}>
          <Image
            style={{ width: 56, height: 61 }}
            source={require("../images/trip.png")}
          />
          <Text style={styles.textser}>Private</Text>
        </View>
      </View>
      <View style={styles.copencon}>
        <View style={styles.copenshape}>
          <View style={styles.coshape}>
            <Text style={styles.textuse}>Use</Text>
            <Text style={styles.textuse}>Promo Code</Text>
            <View style={{ flexDirection: "row", alignItems: "horizontal" }}>
              <Text
                style={{
                  fontSize: 13,
                  color: "#66A7F4",
                  marginLeft: 15,
                  marginTop: -2,
                }}
              >
                Terms Apply
              </Text>
              <Image
                style={{ width: 15, height: 15, marginLeft: 5 }}
                source={require("../images/go.png")}
              />
            </View>
          </View>
          <View style={styles.coshape2}>
            <Image
              style={{ resizeMode: "contain" }}
              source={require("../images/co.png")}
            />
          </View>
        </View>
      </View>
      <View style={{ borderWidth: 0.2, marginTop: 115 }}></View>
      <View style={{ alignItems: "horizontal", flexDirection: "row", height: 65,width:370,marginLeft:10,justifyContent:"space-evenly", }}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
        <View style={styles.box}>
          <Image style={{resizeMode:"contain"}} source={require("../images/home.png")}/>
          </View>
        </TouchableOpacity >
        <TouchableOpacity onPress={() => navigation.navigate('History')}>
        <View style={styles.box}>
          <Image style={{resizeMode:"contain"}} source={require("../images/his.png")}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <View style={styles.box}>
          <Image style={{resizeMode:"contain"}} source={require("../images/profile.png")}/>
          </View>
          </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: 'center',
    // marginLeft: 20,
  },
  tittle: {
    marginLeft: 20,
    marginTop: 50,
    height: 50,
    width: 107,
    fontWeight: "bold",
    // borderColor: "#000",
    // borderWidth: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlignVertical: "center",
  },
  searchcon: {
    marginLeft: 20,
    marginTop: 20,
    height: 70,
    flexDirection: "row",
    // backgroundColor: "",
    width: 350,
    // borderColor: "#000",
    // borderWidth: 1,
  },
  search: {
    elevation: 10,
    backgroundColor: "#E9E9E9",
    height: 60,
    width: 275,
    // borderRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    // borderWidth: 2,
    // borderColor: "#C0C0C0",
  },
  input: {
    fontSize: 25,
    marginLeft: 10,
    marginTop: 12,
  },
  buttonP: {
    backgroundColor: "#E9E9E9",
    // borderColor: "#C0C0C0",
    // borderWidth: 1,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    height: 60,
    width: 60,
    elevation: 10,
  },
  servis: {
    // alignContent: "center",
    marginLeft: 20,
    marginTop: 20,
    // borderWidth: 1,
    // borderColor: "#000",
    height: 60,
    width: 150,
  },
  shapecon: {
    marginLeft: 20,
    marginTop: 20,
    // borderWidth: 1,
    // borderColor: "#000",
    height: 117,
    width: 350,
    alignItems: "horizontal",
    flexDirection: "row",
  },
  shape: {
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    marginLeft: 15,
    marginRight: 5,
    backgroundColor: "#E9E9E9",
    height: 111,
    width: 113,
    borderRadius: 33,
  },
  textser: {
    marginTop: 7,
    marginLeft: 0,
    fontWeight: "semi-bold",
    fontSize: 20,
  },
  copencon: {
    alignItems: "horizontal",
    flexDirection: "row",
    height: 150,
    width: 360,
    marginLeft: 20,
    marginTop: 40,
    // borderWidth: 1,
    // borderColor: "#000",
  },
  copenshape: {
    alignItems: "horizontal",
    flexDirection: "row",
    borderRadius: 44,
    height: 137,
    width: 357,
    backgroundColor: "#E1E7D6",
  },
  textconshape: {
    width: 150,
    // borderColor: "#000",
    // borderWidth: 1,
    fontSize: 24,
    marginBottom: -25,
    marginTop: 25,
    marginLeft: 20,
  },
  copen: {
    // borderWidth: 1,
    // borderColor: "#000",
    width: 100,
  },
  coshape: {
    // borderWidth: 1,
    // borderColor: "#000",
    height: 100,
    width: 191,
    marginLeft: 15,
    // borderRadius: 45,
    // backgroundColor: "#E9E9E9",
    marginTop: 15,
  },
  coshape2: {
    // borderWidth: 1,
    // borderColor: "#000",
    height: 139,
    width: 141,
  },
  textuse: {
    fontSize: 24,
    fontWeight: "semi-bold",
    textAlignVertical: "center",
    marginLeft: 15,
    marginTop: 3,
  },
  box: {
    alignItems: "center",
    // alignContent: "center",
    justifyContent: "center",
    // elevation: 10,
    marginLeft: 0,
    // borderWidth: 1,
    // borderColor: "#000",
    height: 60,
    width:60,
  }
});

export default Dashboard;
