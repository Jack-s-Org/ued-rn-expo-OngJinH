import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreens from "./MainScreens";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import Onboarding_1Screen from "./Onboarding_1Screen";
import Onboarding_2Screen from "./Onboarding_2Screen";
import Onboarding_3Screen from "./Onboarding_3Screen";
import RestaurantScreen from "./RestaurantScreen";
import HomeScreen from "./HomeScreen";
import FriendsScreen from "./FriendsScreen";
import MoodScreen from "./MoodScreen";
import ProfileScreen from "./ProfileScreen";
import MoodChooseScreen from "./MoodChooseScreen";
import MoodAngryScreen from "./MoodAngryScreen";
import MoodHappyScreen from "./MoodHappyScreen";
import MoodSadScreen from "./MoodSadScreen";
import MoodAfraidScreen from "./MoodAfraidScreen";
import FriendsGachaScreen from "./FriendsGachaScreen";
import MapScreen from "./MapScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding_1" component={Onboarding_1Screen} />
        <Stack.Screen name="Onboarding_2" component={Onboarding_2Screen} />
        <Stack.Screen name="Onboarding_3" component={Onboarding_3Screen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Main" component={MainScreens} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Friends" component={FriendsScreen} />
        <Stack.Screen name="Mood" component={MoodScreen} />
        <Stack.Screen name="MoodAngry" component={MoodAngryScreen} />
        <Stack.Screen name="MoodHappy" component={MoodHappyScreen} />
        <Stack.Screen name="MoodSad" component={MoodSadScreen} />
        <Stack.Screen name="MoodAfraid" component={MoodAfraidScreen} />
        <Stack.Screen name="MoodChoose" component={MoodChooseScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="FriendsGacha" component={FriendsGachaScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
