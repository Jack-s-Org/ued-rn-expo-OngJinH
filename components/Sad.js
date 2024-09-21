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
        source={require("@/assets/videos/Sad.mp4")}
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

      <View style={{ marginTop: -20 }}>
        <Pressable
          onPress={() => {
            navigation.navigate("MainTabs", { screen: "Mood" });
          }}
        >
          <Image
            source={require("@/assets/images/BackPurple.png")}
            style={{ height: 40, width: 40, marginLeft: 20, marginTop: 12 }}
          />
        </Pressable>
        <Text
          style={{
            fontFamily: "MontserratAlternates-Bold",
            fontSize: 36,
            color: "#E4E4E4",
            margin: 8,
            textAlign: "center",
            marginBottom: 480,
          }}
        >
          Choose how's your feeling now.
        </Text>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: 36,
              width: 328,
              backgroundColor: "#8FA1FF",
              borderColor: "#3F5DFF",
              borderWidth: 2,
              borderRadius: 32,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 40,
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
            <Pressable
              onPress={() => {
                navigation.navigate("Main", { screen: "MoodAfraid" });
              }}
            >
              <View
                style={{
                  height: 24,
                  width: 24,
                  backgroundColor: "#ECECEC",
                  borderRadius: 20,
                  marginRight: -172,
                }}
              ></View>
            </Pressable>
          </View>
          <View
            style={{
              height: 40,
              width: 163,
              backgroundColor: "#8FA1FF",
              borderColor: "#3F5DFF",
              borderWidth: 2,
              borderRadius: 32,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 8,
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
            <Text
              style={{
                fontFamily: "MontserratAlternates-Bold",
                fontSize: 20,
                color: "#E4E4E4",
              }}
            >
              Next
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 844,
    width: 390,
    alignContent: "center",
    justifyContent: "center",
  },
});
