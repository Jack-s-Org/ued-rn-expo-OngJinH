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
              fontSize: 20,
              color: "2A2A2A",
            }}
          >
            Mood History
          </Text>
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

        <View
          style={{
            height: 140,
            width: 360,
            borderWidth: 2,
            borderColor: "#3F5DFF",
            backgroundColor: "#8FA1FF",
            borderRadius: 24,
            padding: 12,
            margin: 16,
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
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("@/assets/images/MoodScreen/ProfileNanyang.png")}
              style={{ height: 117, width: 130, marginRight: 112 }}
            />
            <View style={{ marginLeft: -100, marginTop: 2 }}>
              <Text
                style={{
                  fontFamily: "MontserratAlternates-Bold",
                  fontSize: 16,
                  color: "#F7F7F7",
                }}
              >
                Nanyang Cafe
              </Text>
              <Text
                style={{
                  fontFamily: "MontserratAlternates-Regular",
                  fontSize: 14,
                  color: "#F7F7F7",
                }}
              >
                4.8
              </Text>
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
});

export default MoodScreen;
