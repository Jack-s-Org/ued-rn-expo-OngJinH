import {
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  View,
  ScrollView,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        {/* <ImageBackground
        source={require("@/assets/images/DotBG.png")}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground> */}
        {/* ------ProfilePic------ */}
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View
            style={{
              backgroundColor: "#8FA1FF",
              height: 212,
              width: 200,
              borderWidth: 2,
              borderRadius: 28,
              borderColor: "#3F5DFF",
              alignItems: "center",
              justifyContent: "center",
              shadowColor: "#0929CF",
              shadowOpacity: 1,
              shadowRadius: 0,
              shadowOffset: {
                height: 2,
                width: 2,
              },
            }}
          >
            <Image
              source={require("@/assets/images/ProfilePic.png")}
              style={{
                height: 150,
                width: 150,
                marginTop: 20,
              }}
            />
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  height: 12,
                  width: 12,
                  backgroundColor: "#6ECFBD",
                  borderRadius: 6,
                  marginRight: 4,
                }}
              />
              <Text
                style={{
                  fontFamily: "MontserratAlternates-Bold",
                  fontSize: 16,
                  color: "#F7F7F7",
                  padding: 2,
                }}
              >
                Active Now
              </Text>
            </View>
          </View>

          {/* ------ProfileName------ */}
          <View style={{ flexDirection: "row", padding: 12 }}>
            <Text
              style={{
                fontFamily: "MontserratAlternates-Bold",
                fontSize: 20,
                color: "#353535",
                marginRight: 12,
              }}
            >
              Ong Jin Hui
            </Text>
            <Text style={styles.profileText}>#30515</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("@/assets/images/Edit.png")}
              style={{ height: 18, width: 18, marginRight: 4 }}
            />
            <Text style={styles.profileText}>Edit</Text>
          </View>

          {/* ------Followers------ */}
          <View
            style={{
              height: 92,
              width: 358,
              flexDirection: "row",
              backgroundColor: "#ECECEC",
              borderColor: "#353535",
              borderWidth: 2,
              borderRadius: 16,
              padding: 12,
              margin: 12,
              alignItems: "center",
              justifyContent: "center",
              shadowColor: "#606060",
              shadowOpacity: 1,
              shadowRadius: 0,
              shadowOffset: {
                height: 2,
                width: 2,
              },
            }}
          >
            <View style={styles.profileName}>
              <Text style={styles.number}>5</Text>
              <Text style={styles.FollowerText}>Following</Text>
            </View>

            <View style={styles.profileName}>
              <Text style={styles.number}>15</Text>
              <Text style={styles.FollowerText}>Followers</Text>
            </View>

            <View style={styles.profileName}>
              <Text style={styles.number}>30</Text>
              <Text style={styles.FollowerText}>Collections</Text>
            </View>
          </View>
        </View>

        <Text
          style={{
            fontFamily: "MontserratAlternates-Bold",
            fontSize: 20,
            color: "#353535",
            margin: 20,
            marginLeft: 20,
            marginTop: 8,
          }}
        >
          Recently Visited
        </Text>

        <View style={{ height: 280 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {/* ------Fluffed Cafe------ */}
            <View style={{ flexDirection: "row", marginTop: 12 }}>
              <View style={styles.recentVisitBorder}>
                <Image
                  source={require("@/assets/images/RecentlyVisited1.png")}
                  style={styles.recentVisitImage}
                />
                <View style={{ marginLeft: -44, marginTop: 8 }}>
                  <Text style={styles.restaurantName}>Fluffed Cafe</Text>

                  <View style={{ flexDirection: "row", alignItems: "center" }}>
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

                  <View style={{ flexDirection: "row", alignItems: "center" }}>
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

                  <View style={{ flexDirection: "row", alignItems: "center" }}>
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

                  <View style={{ flexDirection: "row", alignItems: "center" }}>
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

                  <View style={{ flexDirection: "row", alignItems: "center" }}>
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

                  <View style={{ flexDirection: "row", alignItems: "center" }}>
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

                  <View style={{ flexDirection: "row", alignItems: "center" }}>
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

        <View style={{ margin: 20, marginLeft: 20 }}>
          <Text
            style={{
              fontFamily: "MontserratAlternates-Bold",
              fontSize: 20,
              color: "#353535",
            }}
          >
            Past Review
          </Text>

          <View
            style={{
              height: 200,
              width: 358,
              borderColor: "#353535",
              backgroundColor: "#ECECEC",
              borderWidth: 2,
              borderRadius: 16,
              marginTop: 12,
              alignItems: "center",
              justifyContent: "center",
              shadowColor: "#606060",
              shadowOpacity: 1,
              shadowRadius: 0,
              shadowOffset: {
                height: 2,
                width: 2,
              },
              overflow: "visible",
            }}
          >
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {/* ------QHouse------ */}
                <View style={styles.PastReviewBorder}>
                  <View>
                    <Image
                      source={require("@/assets/images/PastReview1.png")}
                      style={{ height: 83, width: 80, marginBottom: 6 }}
                    />
                    <View style={{ width: 80 }}>
                      <Text style={styles.PastReviewTextBold}>Q House</Text>
                    </View>
                    <Image
                      source={require("@/assets/images/Profile4Stars.png")}
                      style={{ height: 16, width: 70 }}
                    />
                    <Text style={styles.PastReviewTextRegular}>Nice Food!</Text>
                  </View>
                </View>

                {/* ------NikoNeko------ */}
                <View style={styles.PastReviewBorder}>
                  <View>
                    <Image
                      source={require("@/assets/images/PastReview2.png")}
                      style={{ height: 83, width: 80, marginBottom: 6 }}
                    />
                    <View style={{ width: 80 }}>
                      <Text style={styles.PastReviewTextBold}>Niko Neko</Text>
                    </View>
                    <Image
                      source={require("@/assets/images/Profile3Stars.png")}
                      style={{ height: 16, width: 70 }}
                    />
                    <Text style={styles.PastReviewTextRegular}>Not bad...</Text>
                  </View>
                </View>

                {/* ------FluffedCafe------ */}
                <View style={styles.PastReviewBorder}>
                  <View>
                    <Image
                      source={require("@/assets/images/PastReview3.png")}
                      style={{ height: 83, width: 80, marginBottom: 6 }}
                    />
                    <View style={{ width: 80 }}>
                      <Text style={styles.PastReviewTextBold}>
                        Fluffed Cafe
                      </Text>
                    </View>
                    <Image
                      source={require("@/assets/images/Profile5Stars.png")}
                      style={{ height: 16, width: 70 }}
                    />
                    <Text style={styles.PastReviewTextRegular}>Good!</Text>
                  </View>
                </View>

                {/* ------NanYang------ */}
                <View style={styles.PastReviewBorder}>
                  <View>
                    <Image
                      source={require("@/assets/images/PastReview4.png")}
                      style={{ height: 83, width: 80, marginBottom: 6 }}
                    />
                    <View style={{ width: 80 }}>
                      <Text style={styles.PastReviewTextBold}>Nan Yang</Text>
                    </View>
                    <Image
                      source={require("@/assets/images/Profile4Stars.png")}
                      style={{ height: 16, width: 70 }}
                    />
                    <Text style={styles.PastReviewTextRegular}>
                      Bun is nice!
                    </Text>
                  </View>
                </View>

                {/* ------Yeast------ */}
                <View style={styles.PastReviewBorder}>
                  <View>
                    <Image
                      source={require("@/assets/images/PastReview5.png")}
                      style={{ height: 83, width: 80, marginBottom: 6 }}
                    />
                    <View style={{ width: 80 }}>
                      <Text style={styles.PastReviewTextBold}>Yeast</Text>
                    </View>
                    <Image
                      source={require("@/assets/images/Profile4Stars.png")}
                      style={{ height: 16, width: 70 }}
                    />
                    <Text style={styles.PastReviewTextRegular}>
                      Service good.
                    </Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>

        {/* ------Edit Profile------ */}
        <View style={styles.settingSection}>
          <Image
            source={require("@/assets/images/EditProfileIcon.png")}
            style={styles.icon}
          />

          <View style={{ width: 280, margin: 4 }}>
            <Text style={styles.iconText}> Edit Profile</Text>
          </View>

          <Image
            source={require("@/assets/images/ArrowRight.png")}
            style={{ height: 24, width: 24 }}
          />
        </View>

        {/* ------Mood History------ */}
        <View style={styles.settingSection}>
          <Image
            source={require("@/assets/images/MoodHistoryIcon.png")}
            style={styles.icon}
          />

          <View style={{ width: 280, margin: 4 }}>
            <Text style={styles.iconText}> Mood History</Text>
          </View>

          <Image
            source={require("@/assets/images/ArrowRight.png")}
            style={{ height: 24, width: 24 }}
          />
        </View>

        {/* ------Invite Friends------ */}
        <View style={styles.settingSection}>
          <Image
            source={require("@/assets/images/InviteFriendsIcon.png")}
            style={styles.icon}
          />
          <View style={{ width: 280, margin: 4 }}>
            <Text style={styles.iconText}> Invite Friends</Text>
          </View>

          <Image
            source={require("@/assets/images/ArrowRight.png")}
            style={{ height: 24, width: 24 }}
          />
        </View>

        {/* ------Help------ */}
        <View style={styles.settingSection}>
          <Image
            source={require("@/assets/images/HelpIcon.png")}
            style={styles.icon}
          />

          <View style={{ width: 280, margin: 4 }}>
            <Text style={styles.iconText}> Help</Text>
          </View>

          <Image
            source={require("@/assets/images/ArrowRight.png")}
            style={{ height: 24, width: 24 }}
          />
        </View>

        {/* ------Settings------ */}
        <View style={styles.settingSection}>
          <Image
            source={require("@/assets/images/SettingIcon.png")}
            style={styles.icon}
          />

          <View style={{ width: 280, margin: 4 }}>
            <Text style={styles.iconText}> Setting</Text>
          </View>

          <Image
            source={require("@/assets/images/ArrowRight.png")}
            style={{ height: 24, width: 24 }}
          />
        </View>

        <View style={{ height: 120 }}>
          <Pressable
            onPress={() => {
              navigation.replace("Main", { screen: "SignIn" });
            }}
          >
            <Text
              style={{
                fontFamily: "MontserratAlternates-Bold",
                fontSize: 20,
                color: "#0060EB",
                textAlign: "center",
                marginTop: 20,
              }}
            >
              Log out account
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "stretch",
    justifyContent: "space-between",
    backgroundColor: "#BED4FF",
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

  profileName: {
    height: 61,
    width: 61,
    borderWidth: 2,
    borderColor: "#3F5DFF",
    backgroundColor: "#8FA1FF",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    shadowColor: "#0929CF",
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },

  profileText: {
    fontFamily: "MontserratAlternates-Regular",
    fontSize: 20,
    color: "#353535",
  },

  number: {
    fontFamily: "MontserratAlternates-Bold",
    fontSize: 20,
    color: "#353535",
  },

  FollowerText: {
    fontFamily: "MontserratAlternates-Bold",
    fontSize: 10,
    color: "#353535",
  },

  PastReviewBorder: {
    height: 160,
    width: 112,
    backgroundColor: "#6ECFBD",
    borderColor: "#00725D",
    borderWidth: 2,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    margin: 18,
    shadowColor: "#00B090",
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    overflow: "visible",
  },

  PastReviewTextBold: {
    fontFamily: "MontserratAlternates-Bold",
    fontSize: 14,
  },

  PastReviewTextRegular: {
    fontFamily: "MontserratAlternates-Regular",
    fontSize: 12,
  },

  settingSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 8,
    marginLeft: 20,
  },

  icon: {
    height: 32,
    width: 32,
  },

  iconText: {
    fontFamily: "MontserratAlternates-Bold",
    color: "#353535",
    fontSize: 18,
  },
});

export default ProfileScreen;
