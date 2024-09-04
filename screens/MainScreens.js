import { useState } from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import HomeScreen from "./HomeScreen";
import MoodScreen from "./MoodScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileScreen from "./ProfileScreen";
import FriendsScreen from "./FriendsScreen";
import AppDrawer from "./AppDrawer";
import SettingsScreen from "./SettingsScreen";
import AddScreen from "./AddScreen";
import SignUpScreen from "./SignUpScreen";
import SignInScreen from "./SignInScreen";
import MoodChooseScreen from "./MoodChooseScreen";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";

const MainStacks = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Empty = () => null;

const MainTabs = ({ navigation }) => {
  const [unreadCount, setUnreadCount] = useState(4);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#353535", // Active font color
        tabBarInactiveTintColor: "#E4E4E4", // Inactive font color
        tabBarStyle: {
          position: "absolute",
          bottom: 30,
          left: 20,
          right: 20,
          borderRadius: 28,
          borderColor: "#3E86EE",
          height: 60,
          width: 328,
          backgroundColor: "#6A9CFD",
          shadowColor: "#0060EB",
          shadowOpacity: 1,
          shadowRadius: 0,
          shadowOffset: {
            height: 2,
            width: 2,
          },
          elevation: 5,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: focused ? "#ADC9FF" : "transparent",
                  borderColor: focused ? "#387CFF" : "transparent",
                  borderWidth: focused ? 2 : 0,
                  borderRadius: focused ? 36 : 0,

                  width: focused ? 80 : 80,
                  height: focused ? 52 : 40,
                  top: 16,
                  left: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign
                  name="home"
                  size={24}
                  color={focused ? "#353535" : "#E4E4E4"}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "MontserratAlternates-Bold",
                    color: focused ? "#353535" : "#E4E4E4",

                    textAlign: "center",
                    width: focused ? 100 : 60,
                  }}
                >
                  Home
                </Text>
              </View>
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Friends"
        component={FriendsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: focused ? "#ADC9FF" : "transparent",
                  borderColor: focused ? "#387CFF" : "transparent",
                  borderWidth: focused ? 2 : 0,
                  borderRadius: focused ? 36 : 0,

                  width: focused ? 80 : 80,
                  height: focused ? 52 : 40,
                  top: 16,
                  left: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="people-outline" size={24} color="#E4E4E4" />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "MontserratAlternates-Bold",
                    color: focused ? "#353535" : "#E4E4E4",

                    textAlign: "center",
                    width: focused ? 100 : 60,
                  }}
                >
                  Friends
                </Text>
              </View>
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />

      <Tab.Screen
        name="Mood"
        component={MoodScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: focused ? "#ADC9FF" : "transparent",
                  borderColor: focused ? "#387CFF" : "transparent",
                  borderWidth: focused ? 2 : 0,
                  borderRadius: focused ? 36 : 0,

                  width: focused ? 80 : 80,
                  height: focused ? 52 : 40,
                  top: 16,
                  left: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="sticker-emoji"
                  size={24}
                  color="#E4E4E4"
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "MontserratAlternates-Bold",
                    color: focused ? "#353535" : "#E4E4E4",

                    textAlign: "center",
                    width: focused ? 100 : 60,
                  }}
                >
                  Mood
                </Text>
              </View>
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: focused ? "#ADC9FF" : "transparent",
                  borderColor: focused ? "#387CFF" : "transparent",
                  borderWidth: focused ? 2 : 0,
                  borderRadius: focused ? 36 : 0,

                  width: focused ? 80 : 80,
                  height: focused ? 52 : 40,
                  top: 16,
                  left: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Feather name="user" size={24} color="#E4E4E4" />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "MontserratAlternates-Bold",
                    color: focused ? "#353535" : "#E4E4E4",

                    textAlign: "center",
                    width: focused ? 100 : 60,
                  }}
                >
                  Profile
                </Text>
              </View>
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />

      {/* <Tab.Screen
          name="AddTab"
          component={Empty} // this is a workaround to show a full screen when this tab is pressed
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="add" size={36} color={color} />
            ),
            tabBarLabel: () => null,
          }}
          listeners={{
            tabPress: (e) => {
              e.preventDefault(); // stop default navigation
              navigation.navigate("Add"); // manually navigate to the stack screen outside of the tab navigators
            },
          }}
        /> */}

      {/* <Tab.Screen
          name="Inbox"
          component={NotificationsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbox" size={size} color={color} />
            ),
            tabBarLabel: "Inbox",
            tabBarBadge: unreadCount,
          }}
          listeners={{
            tabPress: () => {
              setUnreadCount(null);
            },
          }}
        /> */}
    </Tab.Navigator>
  );
};

const MainScreens = () => {
  return (
    <MainStacks.Navigator screenOptions={{ headerShown: false }}>
      <MainStacks.Screen name="MainTabs" component={MainTabs} />
      {/* <MainStacks.Screen
        name="Home"
        component={HomeScreen}
        options={{ animation: "fade_from_bottom" }}
      /> */}
      <MainStacks.Screen
        name="Mood"
        component={MoodScreen}
        options={{ animation: "slide_from_right" }}
      />
      <MainStacks.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="Friends"
        component={FriendsScreen}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="MoodChoose"
        component={MoodChooseScreen}
        options={{ animation: "fade_from_bottom" }}
      />
    </MainStacks.Navigator>
  );
};

export default MainScreens;
