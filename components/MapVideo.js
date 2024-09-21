import * as React from "react";
import { View, StyleSheet, Button, Text, Pressable, Image } from "react-native";
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
        source={require("@/assets/videos/Map.mp4")}
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
          navigation.navigate("Main", { screen: "Restaurant" });
        }}
      >
        <Image
          source={require("@/assets/images/BackBlue.png")}
          style={{ height: 40, width: 40, marginTop: 64, marginLeft: 28 }}
        />
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
