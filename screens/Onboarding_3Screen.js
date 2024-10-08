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
import Map from "@/components/Map";

const Onboarding_3Screen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Map></Map>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Onboarding_3Screen;
