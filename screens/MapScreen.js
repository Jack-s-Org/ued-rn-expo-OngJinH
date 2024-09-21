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
import MapVideo from "@/components/MapVideo";

const MapScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <MapVideo></MapVideo>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MapScreen;
