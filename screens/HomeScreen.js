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

const Icon = createIconSetFromIcoMoon(
  require("@/assets/icomoon/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

const HomeScreen = () => {
  const navigation = useNavigation();
  const [text, onChangeText] = useState("");

  const [fontsLoaded] = useFonts({
    IcoMoon: require("@/assets/icomoon/icomoon.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ marginTop: 28 }}></View>
        <View
          style={{
            width: 292,
            height: 40,
            borderWidth: 2,
            borderColor: "#FE7132",
            backgroundColor: "#FF9363",
            borderRadius: 24,
            padding: 10,
            margin: 16,
            color: "#FFFFFF",
            shadowColor: "#FF4F00",
            shadowOpacity: 1,
            shadowRadius: 0,
            shadowOffset: {
              height: 2,
              width: 2,
            },
            overflow: "visible",
          }}
        >
          {/* <Icon name="Location" size={4} color="#E4E4E4" /> */}
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("@/assets/images/Location.png")}
              style={{
                height: 20,
                width: 20,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
                marginTop: -1,
              }}
            />
            <Text
              style={{
                fontFamily: "MontserratAlternates-Bold",
                color: "#ECECEC",
                fontSize: 16,
              }}
            >
              The One Academy
            </Text>
          </View>
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate("MainTabs", { screen: "Profile" });
          }}
        >
          <Image
            source={require("@/assets/images/Profile.png")}
            style={{ height: 50, width: 50, marginLeft: 320, marginTop: -58 }}
          />
        </Pressable>
      </View>

      <View style={{ backgroundColor: "#BED4FF" }}>
        <View>
          <Text
            style={{
              fontFamily: "MontserratAlternates-Bold",
              color: "#2B2B2B",
              marginLeft: 24,
              fontSize: 22,
            }}
          >
            Welcome Back, Ong!
          </Text>
        </View>

        <View>
          <Text
            style={{
              fontFamily: "MontserratAlternates-Regular",
              color: "#565656",
              marginLeft: 24,
              fontSize: 16,
            }}
          >
            Let's match your mood with a meal!
          </Text>
        </View>

        <View
          style={{
            width: 358,
            height: 40,
            borderWidth: 2,
            borderColor: "#3E86EE",
            backgroundColor: "#6A9CFD",
            borderRadius: 24,
            padding: 10,
            margin: 16,
            color: "#FFFFFF",
            flexDirection: "row",
            shadowColor: "#0060EB",
            shadowOpacity: 1,
            shadowRadius: 0,
            shadowOffset: {
              height: 2,
              width: 2,
            },
          }}
        >
          <Image
            source={require("@/assets/images/Search.png")}
            style={{
              height: 20,
              width: 20,
              marginLeft: 4,
              marginRight: 12,
              marginTop: -2,
            }}
          />

          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Search"
          />

          <Image
            source={require("@/assets/images/VoiceRecord.png")}
            style={{ height: 20, width: 20, marginLeft: 232, marginTop: -2 }}
          />
        </View>

        {/* ------Mood Section------ */}
        <View
          style={{
            width: 355,
            height: 264,
            borderWidth: 2,
            borderColor: "#353535",
            backgroundColor: "#ECECEC",
            borderRadius: 24,
            padding: 12,
            margin: 16,
            alignItems: "center",
            justifyContent: "center",
            shadowColor: "#6B6B6B",
            shadowOpacity: 1,
            shadowRadius: 0,
            shadowOffset: {
              height: 2,
              width: 2,
            },
            overflow: "visible",
          }}
        >
          <Image
            source={require("@/assets/images/Angry.png")}
            style={{ height: 180, width: 180 }}
          />

          <Text
            style={{
              fontFamily: "MontserratAlternates-Bold",
              color: "#555555",
              fontSize: 20,
            }}
          >
            Today
          </Text>

          <Pressable
            style={{ flexDirection: "row", padding: 12 }}
            onPress={() => {
              navigation.navigate("Main", { screen: "MoodAngry" });
            }}
          >
            <Image
              source={require("@/assets/images/Edit.png")}
              style={{ height: 18, width: 18, marginRight: 4 }}
            />
            <Text
              style={{
                fontFamily: "MontserratAlternates-Regular",
                color: "#555555",
                fontSize: 16,
              }}
            >
              Edit
            </Text>
          </Pressable>
        </View>

        {/* ------Gacha Section------ */}
        <View
          style={{
            width: 355,
            height: 280,
            borderWidth: 2,
            borderColor: "#3F5DFF",
            backgroundColor: "#8FA1FF",
            borderRadius: 24,
            padding: 36,
            margin: 16,
            alignItems: "flex-start",
            justifyContent: "flex-start",
            color: "#FFFFFF",
            shadowColor: "#0929CF",
            shadowOpacity: 1,
            shadowRadius: 0,
            shadowOffset: {
              height: 2,
              width: 2,
            },
            overflow: "visible",
          }}
        >
          <Text
            style={{
              fontFamily: "MontserratAlternates-Bold",
              color: "#ECECEC",
              fontSize: 20,
              marginTop: -12,
            }}
          >
            What would you like to eat today?
          </Text>

          <Text
            style={{
              fontFamily: "MontserratAlternates-Regular",
              color: "#ECECEC",
              fontSize: 14,
              marginBottom: 16,
              marginTop: 8,
            }}
          >
            Choose the type of food and pick the Gacha ball you want.
          </Text>

          <Image
            source={require("@/assets/images/FoodStyle.png")}
            style={{ height: 136, width: 312 }}
          />
        </View>

        {/* ------Discount Section------ */}
        <View style={{ marginTop: 12 }}>
          <Image
            source={require("@/assets/images/Discount.png")}
            style={{ height: 120, width: 168, marginLeft: 20 }}
          />
          <View
            style={{
              backgroundColor: "#E74A4A",
              height: 25,
              width: 164,
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
              marginLeft: 21,
              marginTop: -27,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.promotionText}>30% Discount</Text>
          </View>

          {/* ------NearMe Section------ */}
          <Image
            source={require("@/assets/images/NearMe.png")}
            style={{
              height: 120,
              width: 168,
              marginLeft: 206,
              marginTop: -118,
            }}
          />
          <View
            style={{
              backgroundColor: "#FF9363",
              height: 25,
              width: 164,
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
              marginLeft: 207,
              marginTop: -27,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.promotionText}>Near Me</Text>
          </View>

          {/* ------5Stars Section------ */}
          <Image
            source={require("@/assets/images/5Stars.png")}
            style={{
              height: 160,
              width: 356,
              marginLeft: 19,
              marginTop: 20,
            }}
          />
          <View
            style={{
              backgroundColor: "#6A9CFD",
              height: 25,
              width: 353,
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
              marginLeft: 19,
              marginTop: -26,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.promotionText}>5-Stars Restaurant</Text>
          </View>
        </View>

        {/* ------Recently Visited------ */}
        <View style={{ marginBottom: 20 }}>
          <View style={{ margin: 16, marginLeft: 20 }}>
            <Text
              style={{
                fontFamily: "MontserratAlternates-Bold",
                fontSize: 20,
                color: "#353535",
              }}
            >
              Recently Visited
            </Text>
          </View>

          <View style={{ height: 360 }}>
            <ScrollView horizontal={true}>
              {/* ------Fluffed Cafe------ */}
              <View style={{ flexDirection: "row", marginTop: 12 }}>
                <View style={styles.recentVisitBorder}>
                  <Image
                    source={require("@/assets/images/RecentlyVisited1.png")}
                    style={styles.recentVisitImage}
                  />
                  <View style={{ marginLeft: -44, marginTop: 8 }}>
                    <Text style={styles.restaurantName}>Fluffed Cafe</Text>

                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={styles.rating}>4.9</Text>
                      <Image
                        source={require("@/assets/images/4Stars.png")}
                        style={{ height: 20, width: 87 }}
                      />
                    </View>

                    <Text style={styles.date}>15 Aug 2024 visited</Text>
                  </View>
                </View>
                <View style={styles.collectContainer}>
                  <FontAwesome5 name="heart" size={18} color="#A5A5A5" />
                </View>
              </View>

              {/* ------DayOneDayOne------ */}
              <View style={{ flexDirection: "row", marginTop: 12 }}>
                <View style={styles.recentVisitBorder}>
                  <Image
                    source={require("@/assets/images/RecentlyVisited2.png")}
                    style={styles.recentVisitImage}
                  />
                  <View style={{ marginLeft: -36, marginTop: 8 }}>
                    <Text style={styles.restaurantName}>DayOneDayOne</Text>

                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={styles.rating}>4.0</Text>
                      <Image
                        source={require("@/assets/images/4Stars.png")}
                        style={{ height: 20, width: 87 }}
                      />
                    </View>

                    <Text style={styles.date}>10 Aug 2024 visited</Text>
                  </View>
                </View>
                <View style={styles.collectContainer}>
                  <FontAwesome5 name="heart" size={18} color="#A5A5A5" />
                </View>
              </View>

              {/* ------UncleDon's------ */}
              <View style={{ flexDirection: "row", marginTop: 12 }}>
                <View style={styles.recentVisitBorder}>
                  <Image
                    source={require("@/assets/images/RecentlyVisited3.png")}
                    style={styles.recentVisitImage}
                  />
                  <View style={{ marginLeft: -44, marginTop: 8 }}>
                    <Text style={styles.restaurantName}>Uncle Don's</Text>

                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={styles.rating}>4.2</Text>
                      <Image
                        source={require("@/assets/images/4Stars.png")}
                        style={{ height: 20, width: 87 }}
                      />
                    </View>
                    <Text style={styles.date}>2 Aug 2024 visited</Text>
                  </View>
                </View>
                <View style={styles.collectContainer}>
                  <FontAwesome5 name="heart" size={18} color="#A5A5A5" />
                </View>
              </View>

              {/* ------XLL MalaHotpot------ */}
              <View style={{ flexDirection: "row", marginTop: 12 }}>
                <View style={styles.recentVisitBorder}>
                  <Image
                    source={require("@/assets/images/RecentlyVisited4.png")}
                    style={styles.recentVisitImage}
                  />
                  <View style={{ marginLeft: -36, marginTop: 8 }}>
                    <Text style={styles.restaurantName}>XLL MalaHotpot</Text>

                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={styles.rating}>4.3</Text>
                      <Image
                        source={require("@/assets/images/4Stars.png")}
                        style={{ height: 20, width: 87 }}
                      />
                    </View>

                    <Text style={styles.rating}>20 Jul 2024 visited</Text>
                  </View>
                </View>
                <View style={styles.collectContainer}>
                  <FontAwesome5 name="heart" size={18} color="#A5A5A5" />
                </View>
              </View>

              {/* ------ZokNoodleHouse------ */}
              <View style={{ flexDirection: "row", marginTop: 12 }}>
                <View style={styles.recentVisitBorder}>
                  <Image
                    source={require("@/assets/images/RecentlyVisited5.png")}
                    style={styles.recentVisitImage}
                  />
                  <View style={{ marginLeft: -20, marginTop: 8 }}>
                    <Text style={styles.restaurantName}>Zok Noodle House</Text>

                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={styles.rating}>4.5</Text>
                      <Image
                        source={require("@/assets/images/4Stars.png")}
                        style={{ height: 20, width: 87 }}
                      />
                    </View>

                    <Text style={styles.rating}>12 Jul 2024 visited</Text>
                  </View>
                </View>
                <View style={styles.collectContainer}>
                  <FontAwesome5 name="heart" size={18} color="#A5A5A5" />
                </View>
              </View>

              {/* ------FooHingDimSum------ */}
              <View style={{ flexDirection: "row", marginTop: 12 }}>
                <View style={styles.recentVisitBorder}>
                  <Image
                    source={require("@/assets/images/RecentlyVisited6.png")}
                    style={styles.recentVisitImage}
                  />
                  <View style={{ marginLeft: -16, marginTop: 8 }}>
                    <Text style={styles.restaurantName}>Foo Hing Dim Sum</Text>

                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={styles.rating}>4.8</Text>
                      <Image
                        source={require("@/assets/images/4Stars.png")}
                        style={{ height: 20, width: 87 }}
                      />
                    </View>

                    <Text style={styles.date}>5 Jul 2024 visited</Text>
                  </View>
                </View>
                <View style={styles.collectContainer}>
                  <FontAwesome5 name="heart" size={18} color="#A5A5A5" />
                </View>
              </View>

              {/* ------Chizu------ */}
              <View
                style={{ flexDirection: "row", marginTop: 16, marginRight: 20 }}
              >
                <View
                  style={{
                    backgroundColor: "#8FA1FF",
                    height: 260,
                    width: 180,
                    borderWidth: 2,
                    borderRadius: 16,
                    borderColor: "#3F5DFF",
                    marginLeft: 20,
                    marginRight: 4,
                    shadowColor: "#0929CF",
                    shadowOpacity: 1,
                    shadowRadius: 0,
                    shadowOffset: {
                      height: 2,
                      width: 2,
                    },
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("@/assets/images/RecentlyVisited7.png")}
                    style={styles.recentVisitImage}
                  />
                  <View style={{ marginLeft: -40, marginTop: 8 }}>
                    <Text style={styles.restaurantName}>Chizu</Text>

                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={styles.rating}>4.4</Text>
                      <Image
                        source={require("@/assets/images/4Stars.png")}
                        style={{ height: 20, width: 87 }}
                      />
                    </View>

                    <Text style={styles.date}>28 Jun 2024 visited</Text>
                  </View>
                </View>
                <View style={styles.collectContainer}>
                  <FontAwesome5 name="heart" size={18} color="#A5A5A5" />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#BED4FF",
  },

  promotionText: {
    fontFamily: "MontserratAlternates-Bold",
    color: "#ECECEC",
  },

  recentVisitBorder: {
    backgroundColor: "#8FA1FF",
    height: 260,
    width: 180,
    borderWidth: 2,
    borderRadius: 16,
    borderColor: "#3F5DFF",
    marginLeft: 20,
    shadowColor: "#0929CF",
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    alignItems: "center",
  },

  recentVisitImage: {
    height: 170,
    width: 154,
    marginTop: 12,
  },

  restaurantName: {
    fontFamily: "MontserratAlternates-Bold",
    fontSize: 16,
    color: "#F7F7F7",
    padding: 2,
  },

  rating: {
    fontFamily: "MontserratAlternates-Regular",
    fontSize: 14,
    color: "#F7F7F7",
    padding: 2,
  },

  date: {
    fontFamily: "MontserratAlternates-SemiBold",
    fontSize: 12,
    color: "#F7F7F7",
    padding: 2,
  },

  input: {
    width: "100%",
    fontFamily: "MontserratAlternates-Regular",
    fontSize: 16,
    color: "#E4E4E4",
  },

  collectContainer: {
    height: 32,
    width: 32,
    borderWidth: 1,
    borderColor: "#353535",
    backgroundColor: "#ECECEC",
    borderRadius: 24,
    marginLeft: -20,
    marginTop: -12,
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
});

export default HomeScreen;
