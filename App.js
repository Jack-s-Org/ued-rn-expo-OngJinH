import { useFonts } from "expo-font";
import createIconSetFromIcoMoon from "@expo/vector-icons/createIconSetFromIcoMoon";
import RootNavigator from "./screens/RootNavigator";
import "./gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, Image, Text } from "react-native";
import VideoPlayer from "./components/VideoPlayer";
import HomeScreen from "./screens/HomeScreen";

const Icon = createIconSetFromIcoMoon(
  require("@/assets/icomoon/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

export default function App() {
  const [fontsLoaded] = useFonts({
    IcoMoon: require("@/assets/icomoon/icomoon.ttf"),
    "MontserratAlternates-Bold": require("@/assets/fonts/MontserratAlternates-Bold.ttf"),
    "MontserratAlternates-SemiBold": require("@/assets/fonts/MontserratAlternates-SemiBold.ttf"),
    "MontserratAlternates-Regular": require("@/assets/fonts/MontserratAlternates-Regular.ttf"),
    "MontserratAlternates-Medium": require("@/assets/fonts/MontserratAlternates-Medium.ttf"),
    // "FontFamilyName": require("@/yourfile"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      {/* <SafeAreaView> */}
      <RootNavigator />
      {/* <Icon name="Vector" size={32} color="blue" />
        <Image
          source={require("@/assets/Add.png")}
          style={{ height: 64, width: 124 }}
        />

        <Text style={{ fontFamily: "Gilroy-Regular" }}>Hello</Text> */}
      {/* </SafeAreaView> */}
    </SafeAreaProvider>
  );
}
