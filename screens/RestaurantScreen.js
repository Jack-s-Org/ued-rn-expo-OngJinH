import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SwipeableCarouselHorizontalStack from "@/components/SwipeableCarousel/SwipeableCarouselHorizontalStack";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView vertical={true}>
      <View style={styles.container}>
        <View style={{ marginTop: 48, flexDirection: "row" }}>
          <Pressable
            onPress={() => {
              navigation.navigate("MainTabs", { screen: "Home" });
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                borderWidth: 2,
                borderColor: "#3E86EE",
                backgroundColor: "#6A9CFD",
                borderRadius: 24,
                padding: 10,
                margin: 16,
                color: "#FFFFFF",
                shadowColor: "#0060EB",
                shadowOpacity: 1,
                shadowRadius: 0,
                shadowOffset: {
                  height: 2,
                  width: 2,
                },
                overflow: "visible",
              }}
            >
              <AntDesign name="back" size={18} color="#ECECEC" />
            </View>
          </Pressable>
          <View
            style={{
              width: 204,
              height: 40,
              borderWidth: 2,
              borderColor: "#FE7132",
              backgroundColor: "#FF9363",
              marginLeft: -8,
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
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("@/assets/images/Location.png")}
                style={{
                  height: 20,
                  width: 20,
                  marginRight: 8,
                  marginTop: -2,
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
          <View
            style={{
              width: 40,
              height: 40,
              borderWidth: 2,
              borderColor: "#3F5DFF",
              backgroundColor: "#8FA1FF",
              marginLeft: -8,
              borderRadius: 24,
              padding: 10,
              margin: 16,
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
            <Feather name="share" size={16} color="#ECECEC" />
          </View>

          <View style={styles.savedContainer}>
            <FontAwesome5 name="heart" size={16} color="#A5A5A5" />
          </View>
        </View>
        <View
          style={{
            height: 540,
            width: 362,
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
          <View style={{ marginTop: -20 }}>
            <SwipeableCarouselHorizontalStack></SwipeableCarouselHorizontalStack>
          </View>
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              marginLeft: 4,
            }}
          >
            <Text
              style={{
                fontFamily: "MontserratAlternates-Bold",
                fontSize: 22,
                color: "#353535",
              }}
            >
              Nanyang Cafe - Sunway Pyramid
            </Text>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontFamily: "MontserratAlternates-Bold",
                  fontSize: 18,
                  color: "#525252",
                }}
              >
                4.8
              </Text>

              <Image
                source={require("@/assets/images/4Stars.png")}
                style={{ height: 22, width: 89, marginLeft: 4 }}
              />
            </View>

            <View
              style={{
                height: 70,
                width: 343,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 4,
              }}
            >
              <Text
                style={{
                  fontFamily: "MontserratAlternates-SemiBold",
                  fontSize: 16,
                  color: "#353535",
                }}
              >
                A Malaysia born culinary brand, a fusion interpretation of
                Nanyang delicacies. Signature favourites include Hong Kong Style
                Wanton Noodles, Freshly Baked Polo Bun, Nanyang Coffee & Tea.
              </Text>
            </View>
          </View>

          <View
            style={{
              height: 120,
              width: 338,
              borderWidth: 2,
              borderColor: "#6A9CFD",
              backgroundColor: "#BED4FF",
              borderRadius: 24,
              padding: 12,
              margin: 16,
              alignItems: "center",
              justifyContent: "center",
              shadowColor: "#3E86EE",
              shadowOpacity: 1,
              shadowRadius: 0,
              shadowOffset: {
                height: 2,
                width: 2,
              },
              overflow: "visible",
              flexDirection: "row",
            }}
          >
            <View style={styles.detailContainer}>
              <MaterialCommunityIcons
                name="map-marker-distance"
                size={24}
                color="#353535"
              />
              <Text
                style={{
                  fontFamily: "MontserratAlternates-Regular",
                  fontSize: 14,
                  color: "#353535",
                  marginTop: 4,
                }}
              >
                5.9 km
              </Text>
            </View>
            <View style={styles.detailContainer}>
              <Ionicons name="pricetags-outline" size={22} color="#353535" />
              <Text
                style={{
                  fontFamily: "MontserratAlternates-Regular",
                  fontSize: 14,
                  color: "#353535",
                  marginTop: 4,
                }}
              >
                RM12-RM50
              </Text>
            </View>
            <View style={styles.detailContainer}>
              <MaterialIcons name="more-time" size={24} color="#353535" />
              <Text
                style={{
                  fontFamily: "MontserratAlternates-Regular",
                  fontSize: 14,
                  color: "#353535",
                  marginTop: 4,
                }}
              >
                8.00-
              </Text>
              <Text
                style={{
                  fontFamily: "MontserratAlternates-Regular",
                  fontSize: 14,
                }}
              >
                22.30
              </Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontFamily: "MontserratAlternates-Bold",
              fontSize: 20,
              color: "#2A2A2A",
            }}
          >
            Menu
          </Text>

          <View style={{ marginLeft: 272 }}>
            <Ionicons name="filter" size={24} color="#2A2A2A" />
          </View>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: "row" }}>
            {/* -------------Food 1----------------- */}
            <View style={styles.menuContainer}>
              <Image
                source={require("@/assets/images/Menu/Nanyang-6.jpeg")}
                style={{
                  height: 136,
                  width: 128,
                  borderRadius: 20,
                  marginTop: 4,
                }}
              />
              <Text
                style={{
                  fontFamily: "MontserratAlternates-Regular",
                  fontSize: 16,
                  marginTop: 6,
                }}
              >
                Nanyang Pork Burger with French Fries
              </Text>
              <Text
                style={{
                  fontFamily: "MontserratAlternates-Bold",
                  fontSize: 20,
                  marginTop: 6,
                }}
              >
                RM20.90
              </Text>
            </View>

            {/* -------------Food 2----------------- */}
            <View style={styles.menuContainer}>
              <Image
                source={require("@/assets/images/Menu/Nanyang-7.jpeg")}
                style={{
                  height: 136,
                  width: 128,
                  borderRadius: 20,
                  marginTop: 4,
                }}
              />
              <Text
                style={{
                  fontFamily: "MontserratAlternates-Regular",
                  fontSize: 16,
                  marginTop: 6,
                }}
              >
                Pineapple Bun with New Zealand Butter
              </Text>
              <Text
                style={{
                  fontFamily: "MontserratAlternates-Bold",
                  fontSize: 20,
                  marginTop: 6,
                }}
              >
                RM6.90
              </Text>
            </View>

            {/* -------------Food 3----------------- */}
            <View style={styles.menuContainer}>
              <Image
                source={require("@/assets/images/Menu/Nanyang-8.jpeg")}
                style={{
                  height: 136,
                  width: 128,
                  borderRadius: 20,
                  marginTop: 4,
                }}
              />
              <Text
                style={{
                  fontFamily: "MontserratAlternates-Regular",
                  fontSize: 16,
                  marginTop: 6,
                }}
              >
                Pork Chop with Curry Rice
              </Text>
              <Text
                style={{
                  fontFamily: "MontserratAlternates-Bold",
                  fontSize: 20,
                  marginTop: 6,
                }}
              >
                RM22.90
              </Text>
            </View>

            {/* -------------Food 4----------------- */}
            <View style={styles.menuContainer}>
              <Image
                source={require("@/assets/images/Menu/Nanyang-9.jpeg")}
                style={{
                  height: 136,
                  width: 128,
                  borderRadius: 20,
                  marginTop: 4,
                }}
              />
              <Text
                style={{
                  fontFamily: "MontserratAlternates-Regular",
                  fontSize: 16,
                  marginTop: 6,
                }}
              >
                Prawns & Wonton with Tossed Noodles
              </Text>
              <Text
                style={{
                  fontFamily: "MontserratAlternates-Bold",
                  fontSize: 20,
                  marginTop: 6,
                }}
              >
                RM15.90
              </Text>
            </View>

            {/* -------------Food 5----------------- */}
            <View style={styles.menuContainer}>
              <Image
                source={require("@/assets/images/Menu/Nanyang-10.jpeg")}
                style={{
                  height: 136,
                  width: 128,
                  borderRadius: 20,
                  marginTop: 4,
                }}
              />
              <Text
                style={{
                  fontFamily: "MontserratAlternates-Regular",
                  fontSize: 16,
                  marginTop: 6,
                }}
              >
                Double Eggs & Luncheon Meat Rice
              </Text>
              <Text
                style={{
                  fontFamily: "MontserratAlternates-Bold",
                  fontSize: 20,
                  marginTop: 6,
                }}
              >
                RM18.90
              </Text>
            </View>
          </View>
        </ScrollView>

        {/* ------Recommended Restaurant------ */}
        <View>
          <Text
            style={{
              fontFamily: "MontserratAlternates-Bold",
              fontSize: 20,
              color: "#2A2A2A",
              marginLeft: -120,
              marginTop: 12,
            }}
          >
            Recommended Restaurant
          </Text>
        </View>

        {/* Paradise Dynasty */}
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
                style={{ flexDirection: "row", marginTop: 8, marginLeft: -2 }}
              >
                <Ionicons name="location-outline" size={18} color="#F7F7F7" />
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
                style={{ flexDirection: "row", marginTop: 8, marginLeft: -2 }}
              >
                <Ionicons name="location-outline" size={18} color="#F7F7F7" />
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
                style={{ flexDirection: "row", marginTop: 8, marginLeft: -2 }}
              >
                <Ionicons name="location-outline" size={18} color="#F7F7F7" />
                <Text style={styles.locationText}>1.2 km</Text>
              </View>

              <View style={styles.goNowContainer}>
                <Text style={styles.goNowText}>Go now</Text>
              </View>
            </View>

            <View style={styles.collectContainer}>
              <FontAwesome5 name="heart" size={18} color="#A5A5A5" />
            </View>

            <Pressable
              onPress={() => {
                navigation.navigate("Main", { screen: "Map" });
              }}
            >
              <View
                style={{
                  height: 40,
                  width: 163,
                  borderWidth: 2,
                  borderColor: "#3E86EE",
                  borderRadius: 24,
                  position: "absolute",
                  marginTop: 136,
                  left: -240,
                  backgroundColor: "#6A9CFD",
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
                }}
              >
                <Text
                  style={{
                    fontFamily: "MontserratAlternates-Bold",
                    fontSize: 24,
                    color: "#E4E4E4",
                  }}
                >
                  Go Now
                </Text>
              </View>
            </Pressable>
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#BED4FF",
  },

  detailContainer: {
    height: 80,
    width: 80,
    borderWidth: 2,
    borderColor: "#FFA617",
    backgroundColor: "#FFC466",
    borderRadius: 20,
    padding: 12,
    margin: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#E18A00",
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    overflow: "visible",
  },

  menuContainer: {
    height: 260,
    width: 172,
    borderWidth: 2,
    borderColor: "#FFA617",
    backgroundColor: "#FFC466",
    borderRadius: 24,
    padding: 12,
    margin: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#E18A00",
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    overflow: "visible",
  },

  restaurantContainer: {
    height: 140,
    width: 360,
    borderWidth: 2,
    borderColor: "#3F5DFF",
    backgroundColor: "#8FA1FF",
    borderRadius: 24,
    padding: 12,
    margin: 16,
    marginBottom: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    shadowColor: "#0929CF",
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
    borderColor: "#3F5DFF",
    backgroundColor: "#8FA1FF",
    borderRadius: 24,
    padding: 12,
    margin: 16,
    marginBottom: 72,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    shadowColor: "#0929CF",
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

export default RestaurantScreen;
