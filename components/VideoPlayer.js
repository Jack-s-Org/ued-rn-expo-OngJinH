import * as React from "react";
import { View, StyleSheet, Button, Text, Pressable } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { useNavigation } from "@react-navigation/native";

export default function VideoPlayer() {
  const navigation = useNavigation();

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={StyleSheet.absoluteFill}
        // source={{
        //   uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        // }}
        source={require("@/assets/videos/Emoji.mp4")}
        useNativeControls={false}
        resizeMode={ResizeMode.COVER}
        shouldPlay={true}
        isLooping={true}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      {/* <View style={styles.button}>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View> */}
      <Text
        style={{
          fontFamily: "MontserratAlternates-Bold",
          fontSize: 18,
          color: "#ECECEC",
          marginTop: 554,
          marginLeft: 52,
        }}
      >
        Mood-based Dining
      </Text>
      <Text
        style={{
          fontFamily: "MontserratAlternates-Medium",
          fontSize: 15,
          color: "#ECECEC",
          marginTop: 8,
          marginLeft: 52,
        }}
      >
        Use the Mood Tracker to find the perfect
      </Text>
      <Text style={styles.text}>
        restaurant for your current mood and enjoy
      </Text>
      <Text style={styles.text}>a delightful dining experience.</Text>

      <Pressable
        onPress={() => {
          navigation.navigate("Main", { screen: "Onboarding_2" });
        }}
      >
        <Text
          style={{
            fontFamily: "MontserratAlternates-Bold",
            fontSize: 24,
            marginTop: 84,
            marginLeft: 172,
            color: "#ECECEC",
          }}
        >
          Skip
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 844,
    width: 390,
  },

  text: {
    fontFamily: "MontserratAlternates-Medium",
    fontSize: 15,
    color: "#ECECEC",
    marginLeft: 52,
  },
});
