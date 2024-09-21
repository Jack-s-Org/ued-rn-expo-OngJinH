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
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Icon = createIconSetFromIcoMoon(
  require("@/assets/icomoon/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

const FriendsScreen = () => {
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
        <View
          style={{
            width: 358,
            height: 40,
            borderWidth: 2,
            borderColor: "#A5A5A5",
            backgroundColor: "#F7F7F7",
            borderRadius: 24,
            padding: 10,
            margin: 16,
            flexDirection: "row",
            shadowColor: "#6B6B6B",
            shadowOpacity: 1,
            shadowRadius: 0,
            shadowOffset: {
              height: 2,
              width: 2,
            },
            marginTop: 60,
          }}
        >
          <View style={{ marginLeft: 8, marginRight: 12 }}>
            <AntDesign name="search1" size={16} color="#2B2B2B" />
          </View>

          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Find your friendtag"
          />
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                height: 64,
                width: 64,
                backgroundColor: "#FFC466",
                borderRadius: 60,
                borderColor: "#FFA617",
                marginLeft: 16,
                marginTop: 8,
                shadowColor: "#E18A00",
                shadowOpacity: 1,
                shadowRadius: 0,
                shadowOffset: {
                  height: 2,
                  width: 2,
                },
                overflow: "visible",
              }}
            >
              <View style={{ marginTop: 8, marginLeft: 12 }}>
                <FontAwesome6 name="add" size={48} color="#F7F7F7" />
              </View>
            </View>

            <Image
              source={require("@/assets/images/FriendsProfile/Friends1.png")}
              style={{ height: 84, width: 84, marginLeft: 16 }}
            />

            <Image
              source={require("@/assets/images/FriendsProfile/Friends2.png")}
              style={{ height: 84, width: 84, marginLeft: 12 }}
            />

            <Image
              source={require("@/assets/images/FriendsProfile/Friends3.png")}
              style={{ height: 84, width: 84, marginLeft: 12 }}
            />

            <Image
              source={require("@/assets/images/FriendsProfile/Friends4.png")}
              style={{ height: 84, width: 84, marginLeft: 12, marginRight: 24 }}
            />
          </View>
        </ScrollView>

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
            style={{
              height: 136,
              width: 312,
              position: "absolute",
              marginLeft: 36,
              marginTop: 116,
            }}
          />
          <Pressable
            style={{ flexDirection: "row" }}
            onPress={() => {
              navigation.navigate("Main", { screen: "FriendsGacha" });
            }}
          >
            <View
              style={{
                height: 75,
                width: 75,
                backgroundColor: "transparent",
                position: "absolute",
                borderRadius: 100,
                marginLeft: 223,
                marginTop: 32,
              }}
            ></View>
          </Pressable>
        </View>

        {/* ------Recently Visited------ */}
        <View style={{ marginBottom: -68 }}>
          <View style={{ margin: 12, marginLeft: 20 }}>
            <Text
              style={{
                fontFamily: "MontserratAlternates-Bold",
                fontSize: 24,
                color: "#353535",
              }}
            >
              Friends' Recent Visited
            </Text>
          </View>

          <View style={{ height: 400 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {/* ------Fluffed Cafe------ */}
              <View style={{ flexDirection: "row", marginTop: 12 }}>
                <View style={styles.recentVisitBorder}>
                  <Image
                    source={require("@/assets/images/RecentlyVisited1.png")}
                    style={styles.recentVisitImage}
                  />

                  <View
                    style={{
                      flexDirection: "row",
                      height: 40,
                      marginTop: 8,
                      marginBottom: -8,
                      marginLeft: -72,
                    }}
                  >
                    <Image
                      source={require("@/assets/images/FriendsProfile/P1.png")}
                      style={{ height: 32, width: 32, marginRight: 12 }}
                    />
                    <Text
                      style={{
                        fontFamily: "MontserratAlternates-Bold",
                        fontSize: 20,
                        color: "#F7F7F7",
                        marginTop: 8,
                      }}
                    >
                      Ning
                    </Text>
                  </View>

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
                  <View
                    style={{
                      flexDirection: "row",
                      height: 40,
                      marginTop: 8,
                      marginBottom: -8,
                      marginLeft: -44,
                    }}
                  >
                    <Image
                      source={require("@/assets/images/FriendsProfile/P2.png")}
                      style={{ height: 32, width: 32, marginRight: 12 }}
                    />
                    <Text
                      style={{
                        fontFamily: "MontserratAlternates-Bold",
                        fontSize: 20,
                        color: "#F7F7F7",
                        marginTop: 8,
                      }}
                    >
                      Xuanny
                    </Text>
                  </View>
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
                  <View
                    style={{
                      flexDirection: "row",
                      height: 40,
                      marginTop: 8,
                      marginBottom: -8,
                      marginLeft: -72,
                    }}
                  >
                    <Image
                      source={require("@/assets/images/FriendsProfile/P3.png")}
                      style={{ height: 32, width: 32, marginRight: 12 }}
                    />
                    <Text
                      style={{
                        fontFamily: "MontserratAlternates-Bold",
                        fontSize: 20,
                        color: "#F7F7F7",
                        marginTop: 8,
                      }}
                    >
                      Jolin
                    </Text>
                  </View>
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
                  <View
                    style={{
                      flexDirection: "row",
                      height: 40,
                      marginTop: 8,
                      marginBottom: -8,
                      marginLeft: -72,
                    }}
                  >
                    <Image
                      source={require("@/assets/images/FriendsProfile/P4.png")}
                      style={{ height: 32, width: 32, marginRight: 12 }}
                    />
                    <Text
                      style={{
                        fontFamily: "MontserratAlternates-Bold",
                        fontSize: 20,
                        color: "#F7F7F7",
                        marginTop: 8,
                      }}
                    >
                      Zoey
                    </Text>
                  </View>
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
                  <View
                    style={{
                      flexDirection: "row",
                      height: 40,
                      marginTop: 8,
                      marginBottom: -8,
                      marginLeft: -76,
                    }}
                  >
                    <Image
                      source={require("@/assets/images/FriendsProfile/P5.png")}
                      style={{ height: 32, width: 32, marginRight: 12 }}
                    />
                    <Text
                      style={{
                        fontFamily: "MontserratAlternates-Bold",
                        fontSize: 20,
                        color: "#F7F7F7",
                        marginTop: 8,
                      }}
                    >
                      Sky
                    </Text>
                  </View>
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
                  <View
                    style={{
                      flexDirection: "row",
                      height: 40,
                      marginTop: 8,
                      marginBottom: -8,
                      marginLeft: -76,
                    }}
                  >
                    <Image
                      source={require("@/assets/images/FriendsProfile/P6.png")}
                      style={{ height: 32, width: 32, marginRight: 12 }}
                    />
                    <Text
                      style={{
                        fontFamily: "MontserratAlternates-Bold",
                        fontSize: 20,
                        color: "#F7F7F7",
                        marginTop: 8,
                      }}
                    >
                      Ash
                    </Text>
                  </View>
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
                style={{
                  flexDirection: "row",
                  marginTop: 16,
                  marginRight: 20,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#8FA1FF",
                    height: 300,
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
                  <View
                    style={{
                      flexDirection: "row",
                      height: 40,
                      marginTop: 8,
                      marginBottom: -8,
                      marginLeft: -60,
                    }}
                  >
                    <Image
                      source={require("@/assets/images/FriendsProfile/P7.png")}
                      style={{ height: 32, width: 32, marginRight: 12 }}
                    />
                    <Text
                      style={{
                        fontFamily: "MontserratAlternates-Bold",
                        fontSize: 20,
                        color: "#F7F7F7",
                        marginTop: 8,
                      }}
                    >
                      Trisha
                    </Text>
                  </View>
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

        <View
          style={{
            height: 340,
            width: 347,
            borderWidth: 2,
            borderColor: "#353535",
            backgroundColor: "#F7F7F7",
            borderRadius: 24,
            padding: 12,
            margin: 16,
            marginBottom: 120,
            marginLeft: 20,
            alignItems: "flex-start",
            justifyContent: "flex-start",
            shadowColor: "#2B2B2B",
            shadowOpacity: 1,
            shadowRadius: 0,
            shadowOffset: {
              height: 2,
              width: 2,
            },
            overflow: "visible",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontFamily: "MontserratAlternates-Bold",
                fontSize: 24,
                color: "#353535",
                marginLeft: 8,
                marginTop: 12,
              }}
            >
              Group
            </Text>
            <View
              style={{
                height: 40,
                width: 40,
                backgroundColor: "#FFC466",
                borderRadius: 60,
                borderColor: "#FFA617",
                marginLeft: 200,
                marginTop: 8,
                marginBottom: 12,
                shadowColor: "#E18A00",
                shadowOpacity: 1,
                shadowRadius: 0,
                shadowOffset: {
                  height: 2,
                  width: 2,
                },
                overflow: "visible",
              }}
            >
              <View style={{ marginTop: 8, marginLeft: 10 }}>
                <FontAwesome6 name="add" size={24} color="#F7F7F7" />
              </View>
            </View>
          </View>

          {/* -----------Group2----------- */}
          <View
            style={{
              height: 108,
              width: 315,
              backgroundColor: "#FF9363",
              borderRadius: 16,
              borderColor: "#FE7132",
              marginTop: 8,
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
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text
                  style={{
                    fontFamily: "MontserratAlternates-Bold",
                    fontSize: 22,
                    color: "#2B2B2B",
                    marginLeft: 20,
                    marginTop: 12,
                  }}
                >
                  Nalong Gang
                </Text>
                <Image
                  source={require("@/assets/images/FriendsProfile/G1.png")}
                  style={{
                    height: 41,
                    width: 157,
                    marginLeft: 16,
                    marginTop: 16,
                  }}
                />
              </View>

              <View>
                <Image
                  source={require("@/assets/images/FriendsProfile/G1-1.png")}
                  style={{
                    height: 79,
                    width: 79,
                    marginLeft: 46,
                    marginTop: 16,
                  }}
                />
              </View>
            </View>

            {/* -----------Group2----------- */}
            <View
              style={{
                height: 108,
                width: 315,
                backgroundColor: "#FF9363",
                borderRadius: 16,
                borderColor: "#FE7132",
                marginTop: 36,
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
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Text
                    style={{
                      fontFamily: "MontserratAlternates-Bold",
                      fontSize: 22,
                      color: "#2B2B2B",
                      marginLeft: 20,
                      marginTop: 12,
                    }}
                  >
                    Omakase
                  </Text>
                  <Image
                    source={require("@/assets/images/FriendsProfile/G2.png")}
                    style={{
                      height: 44,
                      width: 128,
                      marginLeft: 16,
                      marginTop: 16,
                    }}
                  />
                </View>

                <View>
                  <Image
                    source={require("@/assets/images/FriendsProfile/G2-1.png")}
                    style={{
                      height: 79,
                      width: 79,
                      marginLeft: 76,
                      marginTop: 16,
                    }}
                  />
                </View>
              </View>
            </View>
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
    height: 300,
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

export default FriendsScreen;
