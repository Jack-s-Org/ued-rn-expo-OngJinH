import SignInScreen from "./SignInScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreens from "./MainScreens";
import FriendsScreens from "./FriendsScreen";
import MoodChooseScreen from "./MoodChooseScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Main" component={MainScreens} />
        {/* <Stack.Screen name="Friends" component={FriendsScreen} /> */}
        <Stack.Screen name="MoodChoose" component={MoodChooseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
