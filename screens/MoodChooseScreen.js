import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Pressable,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import React, { useState } from "react";
import createIconSetFromIcoMoon from "@expo/vector-icons/createIconSetFromIcoMoon";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";

const Icon = createIconSetFromIcoMoon(
  require("@/assets/icomoon/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

const MoodChooseScreen = () => {
  const navigation = useNavigation();
  const [text, onChangeText] = useState("");

  const [fontsLoaded] = useFonts({
    IcoMoon: require("@/assets/icomoon/icomoon.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/MoodRecord-Angry-Result.png")}
        style={{ height: 370, width: 390 }}
      />

      <View
        style={{
          height: 800,
          width: 390,
          borderColor: "#FF4747",
          backgroundColor: "#F87474",
          borderWidth: 1,
          borderRadius: 40,
          alignItems: "center",
          marginTop: -40,
        }}
      >
        <Pressable
          onPress={() => {
            navigation.navigate("Main", { screen: "MoodAngry" });
          }}
        >
          <View>
            <Image
              source={require("@/assets/images/BackRed.png")}
              style={{
                height: 40,
                width: 40,
                marginLeft: -168,
                marginTop: -276,
                position: "absolute",
              }}
            />
          </View>
        </Pressable>
        <View
          style={{
            height: 7,
            width: 73,
            backgroundColor: "#ECECEC",
            borderRadius: 100,
            marginTop: 20,
          }}
        ></View>

        {/* ------Recommended Restaurant------ */}
        <View>
          <Text
            style={{
              fontFamily: "MontserratAlternates-Bold",
              fontSize: 24,
              color: "#353535",
              marginLeft: -60,
              marginTop: 20,
            }}
          >
            Recommended Restaurant
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          <ScrollView>
            {/* Paradise Dynasty */}
            <View style={styles.restaurantContainer}>
              <Pressable
                style={{ flexDirection: "row" }}
                onPress={() => {
                  navigation.navigate("Main", { screen: "Restaurant" });
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={require("@/assets/images/MoodScreen/ProfileNanyang.png")}
                    style={{ height: 117, width: 130, marginRight: 112 }}
                  />
                  <View
                    style={{
                      height: 118,
                      width: 127,
                      marginLeft: -100,
                      marginTop: 2,
                    }}
                  >
                    <Text style={styles.restaurantText}>Nanyang Cafe</Text>

                    <View style={{ flexDirection: "row", marginTop: 8 }}>
                      <Text style={styles.ratingText}>4.8</Text>

                      <Image
                        source={require("@/assets/images/4Stars.png")}
                        style={{ height: 20, width: 87, marginLeft: 4 }}
                      />
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 8,
                        marginLeft: -2,
                      }}
                    >
                      <Ionicons
                        name="location-outline"
                        size={18}
                        color="#F7F7F7"
                      />
                      <Text style={styles.locationText}>2.1 km</Text>
                    </View>

                    <View style={styles.goNowContainer}>
                      <Text style={styles.goNowText}>Go now</Text>
                    </View>
                  </View>

                  <View style={styles.collectContainer}>
                    <FontAwesome5 name="heart" size={18} color="#A5A5A5" />
                  </View>
                </View>
              </Pressable>
            </View>

            {/* Paradise Dynasty */}
            <View>
              <View style={styles.restaurantContainer}>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={require("@/assets/images/MoodScreen/ProfileParadiseDynasty.png")}
                    style={{ height: 117, width: 130, marginRight: 112 }}
                  />
                  <View
                    style={{
                      height: 118,
                      width: 127,
                      marginLeft: -100,
                      marginTop: 2,
                    }}
                  >
                    <Text style={styles.restaurantText}>Paradise Dynasty</Text>

                    <View style={{ flexDirection: "row", marginTop: 8 }}>
                      <Text style={styles.ratingText}>4.4</Text>

                      <Image
                        source={require("@/assets/images/4Stars.png")}
                        style={{ height: 20, width: 87, marginLeft: 4 }}
                      />
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 8,
                        marginLeft: -2,
                      }}
                    >
                      <Ionicons
                        name="location-outline"
                        size={18}
                        color="#F7F7F7"
                      />
                      <Text style={styles.locationText}>2.9 km</Text>
                    </View>

                    <View style={styles.goNowContainer}>
                      <Text style={styles.goNowText}>Go now</Text>
                    </View>
                  </View>

                  <View style={styles.collectContainer}>
                    <FontAwesome5 name="heart" size={18} color="#A5A5A5" />
                  </View>
                </View>
              </View>

              {/* Q House Taipan */}
              <View style={styles.restaurantContainer}>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={require("@/assets/images/MoodScreen/ProfileQHouse.png")}
                    style={{ height: 117, width: 130, marginRight: 112 }}
                  />
                  <View
                    style={{
                      height: 118,
                      width: 127,
                      marginLeft: -100,
                      marginTop: 2,
                    }}
                  >
                    <Text style={styles.restaurantText}>Q House Taipan</Text>

                    <View style={{ flexDirection: "row", marginTop: 8 }}>
                      <Text style={styles.ratingText}>4.2</Text>

                      <Image
                        source={require("@/assets/images/4Stars.png")}
                        style={{ height: 20, width: 87, marginLeft: 4 }}
                      />
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 8,
                        marginLeft: -2,
                      }}
                    >
                      <Ionicons
                        name="location-outline"
                        size={18}
                        color="#F7F7F7"
                      />
                      <Text style={styles.locationText}>3.4 km</Text>
                    </View>

                    <View style={styles.goNowContainer}>
                      <Text style={styles.goNowText}>Go now</Text>
                    </View>
                  </View>

                  <View style={styles.collectContainer}>
                    <FontAwesome5 name="heart" size={18} color="#A5A5A5" />
                  </View>
                </View>
              </View>

              {/* Kim Gary */}
              <View style={styles.restaurantLastContainer}>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={require("@/assets/images/MoodScreen/ProfileKimGary.png")}
                    style={{ height: 117, width: 130, marginRight: 112 }}
                  />
                  <View
                    style={{
                      height: 118,
                      width: 127,
                      marginLeft: -100,
                      marginTop: 2,
                    }}
                  >
                    <Text style={styles.restaurantText}>Kim Gary</Text>

                    <View style={{ flexDirection: "row", marginTop: 8 }}>
                      <Text style={styles.ratingText}>3.8</Text>

                      <Image
                        source={require("@/assets/images/4Stars.png")}
                        style={{ height: 20, width: 87, marginLeft: 4 }}
                      />
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 8,
                        marginLeft: -2,
                      }}
                    >
                      <Ionicons
                        name="location-outline"
                        size={18}
                        color="#F7F7F7"
                      />
                      <Text style={styles.locationText}>1.2 km</Text>
                    </View>

                    <View style={styles.goNowContainer}>
                      <Text style={styles.goNowText}>Go now</Text>
                    </View>
                  </View>

                  <View style={styles.collectContainer}>
                    <FontAwesome5 name="heart" size={18} color="#A5A5A5" />
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#F87474",
  },

  restaurantContainer: {
    height: 144,
    width: 360,
    borderWidth: 2,
    borderColor: "#DB0000",
    backgroundColor: "#E74A4A",
    borderRadius: 24,
    padding: 12,
    margin: 16,
    marginBottom: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    shadowColor: "#930000",
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    overflow: "visible",
  },

  restaurantLastContainer: {
    height: 140,
    width: 360,
    borderWidth: 2,
    borderColor: "#DB0000",
    backgroundColor: "#E74A4A",
    borderRadius: 24,
    padding: 12,
    margin: 16,
    marginBottom: 72,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    shadowColor: "#930000",
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    overflow: "visible",
  },

  restaurantText: {
    fontFamily: "MontserratAlternates-Bold",
    fontSize: 16,
    color: "#F7F7F7",
  },

  ratingText: {
    fontFamily: "MontserratAlternates-Regular",
    fontSize: 16,
    color: "#F7F7F7",
    marginTop: 2,
  },

  locationText: {
    fontFamily: "MontserratAlternates-Regular",
    fontSize: 16,
    color: "#F7F7F7",
    marginTop: 2,
    marginLeft: 2,
  },

  goNowContainer: {
    height: 24,
    width: 80,
    borderWidth: 2,
    borderColor: "#3E86EE",
    backgroundColor: "#6A9CFD",
    borderRadius: 24,
    marginTop: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#0060EB",
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    overflow: "visible",
  },

  goNowText: {
    fontFamily: "MontserratAlternates-Bold",
    fontSize: 16,
    color: "#F7F7F7",
  },

  collectContainer: {
    height: 32,
    width: 32,
    borderWidth: 1,
    borderColor: "#353535",
    backgroundColor: "#ECECEC",
    marginLeft: 36,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#2A2A2A",
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    overflow: "visible",
  },

  savedContainer: {
    height: 40,
    width: 40,
    borderWidth: 2,
    borderColor: "#353535",
    backgroundColor: "#ECECEC",
    marginLeft: -8,
    borderRadius: 24,
    padding: 10,
    margin: 16,
    shadowColor: "#2A2A2A",
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    overflow: "visible",
  },
});

export default MoodChooseScreen;
