import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const History = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.history}>
        <Text style={styles.texthis}>History</Text>
      </View>
      <View style={styles.ride}>
        <Text style={styles.textride}>Rides</Text>
      </View>
      <View
        style={{ borderWidth: 1.2, marginTop: 0.3, borderColor: "#E9E9E9" }}
      ></View>
      <View style={styles.rideslip}>
        <View>
          <Text
            style={{
              marginLeft: 5,
              marginTop: 2,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Today 06:18 PM
          </Text>
          <Text
            style={{
              marginLeft: 5,
              marginTop: 1.5,
              fontSize: 20,
              fontWeight: "semi-bold",
            }}
          >
            Mini to
          </Text>
          <View style={styles.address}>
            <Text style={{ fontSize: 15, color: "grey" }}>
              New Delhi Railway Station Paharganj side,Bhvabhuti Marg Paharganj
              Ne..
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#D4D4D4",
            //   borderWidth: 1,
              marginTop: 20,
              marginLeft: 7,
            //   borderColor: "#000",
              height: 30,
              width: 140,
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                textAlignVertical: "center",
                textAlign: "center",
                color: "#4C4C4C",
              }}
            >
              CANCELLED
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{ borderWidth: 1.2, marginTop: 0.3, borderColor: "#E9E9E9" }}
      ></View>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    // alignItems: 'center',
    // justifyContent: 'center',
  },
  history: {
    marginLeft: 20,
    marginTop: 60,
    // borderWidth: 1,
    // borderColor: "#000",
    height: 50,
    width: 107,
  },
  texthis: {
    fontSize: 30,
    fontWeight: "bold",
    textAlignVertical: "center",
  },
  ride: {
    width: 70,
    borderBottomWidth: 1,
    borderColor: "#000",
    marginTop: 50,
    marginLeft: 30,
  },
  textride: {
    fontSize: 25,
    fontWeight: "bold",
    textAlignVertical: "center",
  },
  rideslip: {
    marginTop: 15,
    marginLeft: 20,
    // borderWidth: 1,
    // borderColor: "#000",
    height: 175,
    width: 350,
  },
  address: {
    marginTop: 6,
    marginLeft: 5,
    height: 45,
    width: 260,
    // borderWidth: 1,
    // borderColor: "#000",
    // alignItems: "horizontal",
  },
});
