import {
  Text,
  Button,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const SignInScreen = ({ navigation }) => {
  const [text, onChangeText] = useState("");
  const [password, onChangePassword] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("@/assets/images/Logo.png")}
        style={{ height: 163, width: 271, marginBottom: 28 }}
      />
      <View
        style={{
          height: 240,
          width: 340,
          borderWidth: 2,
          borderColor: "#3E86EE",
          backgroundColor: "#6A9CFD",
          borderRadius: 24,
          padding: 12,
          margin: 16,
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
        }}
      >
        <Text
          style={{
            fontFamily: "MontserratAlternates-Bold",
            fontSize: 24,
            color: "#ECECEC",
            marginBottom: 8,
          }}
        >
          Log In
        </Text>

        <Text
          style={{
            fontFamily: "MontserratAlternates-Bold",
            fontSize: 16,
            color: "#DEDEDE",
            textAlign: "left",
            alignSelf: "flex-start",
            marginTop: 4,
            marginLeft: 8,
          }}
        >
          Username/Email
        </Text>
        <View
          style={{
            height: 40,
            width: 306,
            borderWidth: 2,
            borderColor: "#3F5DFF",
            backgroundColor: "#8FA1FF",
            borderRadius: 24,
            padding: 12,
            margin: 16,
            alignItems: "center",
            justifyContent: "center",
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
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
        </View>

        <Text
          style={{
            fontFamily: "MontserratAlternates-Bold",
            fontSize: 16,
            color: "#DEDEDE",
            textAlign: "left",
            alignSelf: "flex-start",
            marginTop: 4,
            marginLeft: 8,
          }}
        >
          Password
        </Text>
        <View
          style={{
            height: 40,
            width: 306,
            borderWidth: 2,
            borderColor: "#3F5DFF",
            backgroundColor: "#8FA1FF",
            borderRadius: 24,
            padding: 12,
            margin: 16,
            alignItems: "center",
            justifyContent: "center",
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
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="password"
            secureTextEntry={true}
          />
        </View>
      </View>

      <Pressable
        onPress={() => {
          navigation.navigate("MainTabs", { screen: "Home" });
        }}
      >
        <View
          style={{
            height: 40,
            width: 188,
            borderWidth: 2,
            borderColor: "#FFA617",
            backgroundColor: "#FFC466",
            borderRadius: 24,
            padding: 12,
            marginTop: 24,
            alignItems: "center",
            justifyContent: "center",
            shadowColor: "#D97700",
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
              color: "#ECECEC",
              margin: -100,
            }}
          >
            Log In
          </Text>
        </View>
      </Pressable>
      <View
        style={{
          height: 2,
          width: 306,
          backgroundColor: "#0060EB",
          marginTop: 32,
        }}
      />
      <Text
        style={{
          fontFamily: "MontserratAlternates-Bold",
          fontSize: 16,
          color: "#353535",
          marginTop: 12,
        }}
      >
        OR
      </Text>

      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            height: 40,
            width: 40,
            borderWidth: 2,
            borderColor: "#3E86EE",
            backgroundColor: "#6A9CFD",
            borderRadius: 28,
            marginTop: 24,
            marginRight: 20,
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
          }}
        >
          <Feather name="facebook" size={24} color="#F7F7F7" />
        </View>

        <View
          style={{
            height: 40,
            width: 40,
            borderWidth: 2,
            borderColor: "#DB0000",
            backgroundColor: "#E74A4A",
            borderRadius: 28,
            marginTop: 24,
            marginRight: 20,
            alignItems: "center",
            justifyContent: "center",
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
          <FontAwesome5 name="google" size={20} color="#F7F7F7" />
        </View>

        <View
          style={{
            height: 40,
            width: 40,
            borderWidth: 2,
            borderColor: "#353535",
            backgroundColor: "#565656",
            borderRadius: 28,
            marginTop: 24,
            marginBottom: 24,
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
          }}
        >
          <FontAwesome name="apple" size={24} color="#F7F7F7" />
        </View>
      </View>

      <View style={{ flexDirection: "row", marginTop: 24 }}>
        <Text
          style={{
            fontFamily: "MontserratAlternates-SemiBold",
            fontSize: 14,
            color: "#353535",
          }}
        >
          Haven’t have an account?
        </Text>

        <Pressable
          onPress={() => {
            navigation.replace("Main", { screen: "SignUp" });
          }}
        >
          <Text
            style={{
              fontFamily: "MontserratAlternates-Bold",
              fontSize: 16,
              color: "#0929CF",
              marginLeft: 4,
              textDecorationLine: "underline",
            }}
          >
            Sign Up
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#BED4FF",
  },

  input: {
    width: "100%",
    fontFamily: "MontserratAlternates-Bold",
    fontSize: 16,
    color: "#ECECEC",
  },
});

export default SignInScreen;
