import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const Setting = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.appseting}>
        <Text style={styles.textapp}>App Settings</Text>
      </View>
      <ScrollView>
        <View style={styles.addhome}>
          <Image
            style={{ resizeMode: "contain", marginLeft: 10, marginTop: 7 }}
            source={require("../images/home-smile.png")}
          />
          <Text
            style={{
              marginLeft: 20,
              marginTop: 5,
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Add Home
          </Text>
          <Image
            style={{ resizeMode: "contain", marginLeft: 150, marginTop: 9 }}
            source={require("../images/go.png")}
          />
        </View>
        <View style={styles.addhome}>
          <Image
            style={{ resizeMode: "contain", marginLeft: 10, marginTop: 7 }}
            source={require("../images/home-smile.png")}
          />
          <Text
            style={{
              marginLeft: 20,
              marginTop: 5,
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Add Work
          </Text>
          <Image
            style={{ resizeMode: "contain", marginLeft: 150, marginTop: 9 }}
            source={require("../images/go.png")}
          />
        </View>
        <View
          style={{
            borderWidth: 1.2,
            marginTop: 20,
            borderColor: "#E9E9E9",
            width: 320,
            marginLeft: 75,
          }}
        ></View>
        <View style={styles.addhome}>
          <Image
            style={{ resizeMode: "contain", marginLeft: 10, marginTop: 7 }}
            source={require("../images/home-smile.png")}
          />
          <Text
            style={{
              marginLeft: 20,
              marginTop: 5,
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Shortcuts
          </Text>
          <Image
            style={{ resizeMode: "contain", marginLeft: 150, marginTop: 9 }}
            source={require("../images/go.png")}
          />
        </View>

        <View
          style={{
            borderWidth: 1.2,
            marginTop: 20,
            borderColor: "#E9E9E9",
            width: 320,
            marginLeft: 75,
          }}
        ></View>
        <View style={styles.privacy}>
          <Image
            style={{ resizeMode: "contain", marginLeft: 10, marginTop: 7 }}
            source={require("../images/home-smile.png")}
          />
          <View>
            <Text
              style={{
                marginLeft: 20,
                marginTop: 5,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Privacy
            </Text>
            <Text
              style={{
                marginLeft: 20,
                marginTop: 1,
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              Manage the data you share
            </Text>
            <Text
              style={{
                marginLeft: 20,
                marginTop: 1,
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              with us
            </Text>
          </View>
          <Image
            style={{ resizeMode: "contain", marginLeft: 60, marginTop: 9 }}
            source={require("../images/go.png")}
          />
        </View>

        <View
          style={{
            borderWidth: 1.2,
            marginTop: 20,
            borderColor: "#E9E9E9",
            width: 320,
            marginLeft: 75,
          }}
        ></View>
        <View style={styles.privacy}>
          <Image
            style={{ resizeMode: "contain", marginLeft: 10, marginTop: 7 }}
            source={require("../images/home-smile.png")}
          />
          <View>
            <Text
              style={{
                marginLeft: 20,
                marginTop: 5,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Appearance
            </Text>
            <Text
              style={{
                marginLeft: 20,
                marginTop: 1,
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              Light Mode
            </Text>
            {/* <Text style={{marginLeft:20,marginTop:1,fontWeight:"bold",fontSize:15}}></Text> */}
          </View>
          <Image
            style={{ resizeMode: "contain", marginLeft: 135, marginTop: 9 }}
            source={require("../images/go.png")}
          />
        </View>

        <View
          style={{
            borderWidth: 1.2,
            marginTop: 10,
            borderColor: "#E9E9E9",
            width: 320,
            marginLeft: 75,
          }}
        ></View>
        <View style={styles.privacy}>
          <Image
            style={{ resizeMode: "contain", marginLeft: 10, marginTop: 7 }}
            source={require("../images/home-smile.png")}
          />
          <View>
            <Text
              style={{
                marginLeft: 20,
                marginTop: 5,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Invoice information
            </Text>
            <Text
              style={{
                marginLeft: 20,
                marginTop: 1,
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              Manage your tax invoices
            </Text>
            <Text
              style={{
                marginLeft: 20,
                marginTop: 1,
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              information
            </Text>
          </View>
          <Image
            style={{ resizeMode: "contain", marginLeft: 60, marginTop: 9 }}
            source={require("../images/go.png")}
          />
        </View>

        <View
          style={{
            borderWidth: 1.2,
            marginTop: 20,
            borderColor: "#E9E9E9",
            width: 320,
            marginLeft: 75,
          }}
        ></View>
        <View style={styles.communication}>
          <Image
            style={{ resizeMode: "contain", marginLeft: 10, marginTop: 7 }}
            source={require("../images/home-smile.png")}
          />
          <View>
            <Text
              style={{
                marginLeft: 20,
                marginTop: 5,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Communication
            </Text>
            <Text
              style={{
                marginLeft: 20,
                marginTop: 1,
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              Choose your preferred
            </Text>
            <Text
              style={{
                marginLeft: 20,
                marginTop: 1,
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              contact ,methods and
            </Text>
            <Text
              style={{
                marginLeft: 20,
                marginTop: 1,
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              manage your notification
            </Text>
            <Text
              style={{
                marginLeft: 20,
                marginTop: 1,
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              settings
            </Text>
          </View>
          <Image
            style={{ resizeMode: "contain", marginLeft: 60, marginTop: 9 }}
            source={require("../images/go.png")}
          />
        </View>

        {/* <View
        style={{ borderWidth: 1.2, marginTop: 20, borderColor: "#E9E9E9",width:320,marginLeft:75 }}
        ></View> */}
        <View style={styles.safty}>
          <Text
            style={{
              marginLeft: 20,
              marginTop: 1,
              fontWeight: "bold",
              fontSize: 25,
            }}
          >
            Safety
          </Text>
        </View>
        <View style={styles.privacy}>
          <Image
            style={{ resizeMode: "contain", marginLeft: 10, marginTop: 7 }}
            source={require("../images/home-smile.png")}
          />
          <View>
            <Text
              style={{
                marginLeft: 20,
                marginTop: 5,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              RideCheck
            </Text>
            <Text
              style={{
                marginLeft: 20,
                marginTop: 1,
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              Manage your tax invoices
            </Text>
            <Text
              style={{
                marginLeft: 20,
                marginTop: 1,
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              information
            </Text>
          </View>
          <Image
            style={{ resizeMode: "contain", marginLeft: 60, marginTop: 9 }}
            source={require("../images/go.png")}
          />
        </View>

        <View
          style={{
            borderWidth: 5,
            marginTop: 20,
            borderColor: "#E9E9E9",
            width: 399,
            marginLeft: 0,
            marginBottom: 20,
          }}
        ></View>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              marginLeft: 20,
              marginTop: 1,
              fontWeight: "900",
              fontSize: 18,
              color: "#FF6863",
              marginBottom: 30,
            }}
          >
            Sign out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  appseting: {
    marginTop: 20,
    // position: "absolute",
    marginTop: 55,
    marginLeft: 20,
    width: 180,
    // borderWidth: 1,
    // borderColor: "#000",
  },
  textapp: {
    fontSize: 30,
    fontWeight: "bold",
  },
  addhome: {
    alignItems: "center",
    alignItems: "horizontal",
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 30,
    width: 350,
    // borderWidth: 1,
    // borderColor: "#000",
    height: 40,
  },
  privacy: {
    alignItems: "center",
    alignItems: "horizontal",
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 20,
    width: 350,
    // borderWidth: 1,
    // borderColor: "#000",
    height: 80,
  },
  communication: {
    alignItems: "center",
    alignItems: "horizontal",
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 20,
    width: 350,
    // borderWidth: 1,
    // borderColor: "#000",
    height: 120,
  },
  safty: {
    // borderWidth: 1,
    // borderColor: "#000",
    marginTop: 20,
    marginBottom: 10,
    width: 120,
  },
});
