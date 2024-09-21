import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreens from "./MainScreens";
import SignInScreen from "./SignInScreen";
import Onboarding_1Screen from "./Onboarding_1Screen";
import Onboarding_2Screen from "./Onboarding_2Screen";
import RestaurantScreen from "./RestaurantScreen";
// import FriendsScreens from "./FriendsScreen";
// import MoodChooseScreen from "./MoodChooseScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        {/* <Stack.Screen name="Onboarding_1" component={Onboarding_1Screen} />
        <Stack.Screen name="Onboarding_2" component={Onboarding_2Screen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Main" component={MainScreens} /> */}

        {/* <Stack.Screen name="Friends" component={FriendsScreen} /> */}
        {/* <Stack.Screen name="MoodChoose" component={MoodChooseScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
