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
import Happy from "@/components/Happy";

const MoodHappyScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Happy></Happy>

        <Text
          style={{
            fontFamily: "MontserratAlternates-Bold",
            fontSize: 32,
            color: "#E4E4E4",
            marginTop: 240,
          }}
        >
          Happy
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
        ></View>
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
    backgroundColor: "#E74A4A",
  },
});

export default MoodHappyScreen;
