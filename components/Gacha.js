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
        source={require("@/assets/videos/OnboardingPage-2.mp4")}
        useNativeControls={false}
        resizeMode={ResizeMode.COVER}
        shouldPlay={true}
        isLooping={false}
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

      <Pressable
        onPress={() => {
          navigation.navigate("Main", { screen: "SignIn" });
        }}
      >
        <View
          style={{
            height: 44,
            width: 170,
            borderWidth: 2,
            borderColor: "transparent",
            marginTop: 701,
            marginLeft: 110,
            borderRadius: 20,
          }}
        ></View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 844,
    width: 390,
  },
});
