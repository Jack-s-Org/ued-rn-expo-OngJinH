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
import VideoPlayer from "@/components/VideoPlayer";

const Onboarding_1Screen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <VideoPlayer></VideoPlayer>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default Onboarding_1Screen;
