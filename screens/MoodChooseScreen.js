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

const MoodChooseScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={require("@/assets/images/BackRed.png")}
            style={{ height: 40, width: 40, marginLeft: 12 }}
          />
        </Pressable>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "MontserratAlternates-Bold",
              fontSize: 36,
              color: "#E4E4E4",
              margin: 40,
              textAlign: "center",
            }}
          >
            Choose how's your feeling now.
          </Text>

          <Text
            style={{
              fontFamily: "MontserratAlternates-Bold",
              fontSize: 32,
              color: "#E4E4E4",
              marginTop: 240,
            }}
          >
            Angry
          </Text>

          <View
            style={{
              height: 40,
              width: 163,
              backgroundColor: "#E74A4A",
              borderColor: "#DB0000",
              borderWidth: 2,
              borderRadius: 32,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 60,
              shadowColor: "#930000",
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
                color: "#E4E4E4",
              }}
            >
              Next
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#E74A4A",
  },
});

export default MoodChooseScreen;
