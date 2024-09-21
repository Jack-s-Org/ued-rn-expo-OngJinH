import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const MoodScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView vertical={true}>
      <SafeAreaView style={styles.container}>
        <View>
          <Text
            style={{
              fontFamily: "MontserratAlternates-Bold",
              fontSize: 32,
              color: "#2B2B2B",
              marginLeft: 20,
              marginTop: 40,
            }}
          >
            How’s your mood today?
          </Text>

          <Text
            style={{
              fontFamily: "MontserratAlternates-SemiBold",
              fontSize: 14,
              color: "#565656",
              marginLeft: 20,
              marginTop: 16,
            }}
          >
            Let us know how you’re feeling and discover new restaurants that
            match your mood!
          </Text>
        </View>

        <View
          style={{
            height: 348,
            width: 353,
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
          <Text
            style={{
              fontFamily: "MontserratAlternates-Bold",
              fontSize: 22,
              color: "2A2A2A",
            }}
          >
            Mood History
          </Text>

          <Image
            source={require("@/assets/images/Angry.png")}
            style={{ height: 194, width: 200 }}
          />

          <Text
            style={{
              fontFamily: "MontserratAlternates-Bold",
              fontSize: 20,
              color: "555555",
            }}
          >
            Today
          </Text>

          <Pressable
            onPress={() => {
              navigation.navigate("Main", { screen: "MoodAngry" });
            }}
          >
            <View style={{ flexDirection: "row", marginTop: 8 }}>
              <Image
                source={require("@/assets/images/Edit.png")}
                style={{ height: 16, width: 16 }}
              />
              <Text
                style={{
                  fontFamily: "MontserratAlternates-Medium",
                  fontSize: 15,
                  marginLeft: 4,
                  marginTop: 1,
                }}
              >
                Edit
              </Text>
            </View>
          </Pressable>
        </View>

        <View>
          <Text
            style={{
              fontFamily: "MontserratAlternates-Bold",
              fontSize: 20,
              color: "#2A2A2A",
              marginLeft: 20,
            }}
          >
            Special for you
          </Text>
        </View>

        {/* Nanyang Cafe */}
        <Pressable
          onPress={() => {
            navigation.navigate("Main", { screen: "Restaurant" });
          }}
        >
          <View style={styles.restaurantContainer}>
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
                  style={{ flexDirection: "row", marginTop: 8, marginLeft: -2 }}
                >
                  <Ionicons name="location-outline" size={18} color="#F7F7F7" />
                  <Text style={styles.locationText}>2.1 km</Text>
                </View>

                <Pressable
                  onPress={() => {
                    navigation.navigate("Main", { screen: "Map" });
                  }}
                >
                  <View style={styles.goNowContainer}>
                    <Text style={styles.goNowText}>Go now</Text>
                  </View>
                </Pressable>
              </View>

              <View style={styles.collectContainer}>
                <FontAwesome5 name="heart" size={18} color="#A5A5A5" />
              </View>
            </View>
          </View>
        </Pressable>

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
          </View>
        </View>
      </SafeAreaView>
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
});

export default MoodScreen;
