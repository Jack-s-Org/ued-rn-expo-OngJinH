import {
  Text,
  Button,
  StyleSheet,
  View,
  TextInput,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import Gacha from "@/components/Gacha";

const Onboarding_2Screen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Gacha></Gacha>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Onboarding_2Screen;
