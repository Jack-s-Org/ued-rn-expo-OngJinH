import * as React from "react";
import Carousel from "react-native-reanimated-carousel";

import Slide from "./Slide";
import { View, Image } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Dots from "./Dots";

const height = 240;

const data = [
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Image
      source={require("@/assets/images/RestaurantPic/Nanyang_R1.png")}
      style={{ height: 184, width: 193 }}
    />
  </View>,
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Image
      source={require("@/assets/images/RestaurantPic/Nanyang_R2.png")}
      style={{ height: 184, width: 193 }}
    />
  </View>,
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Image
      source={require("@/assets/images/RestaurantPic/Nanyang_R3.png")}
      style={{ height: 184, width: 193 }}
    />
  </View>,
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Image
      source={require("@/assets/images/RestaurantPic/Nanyang_R4.png")}
      style={{ height: 184, width: 193 }}
    />
  </View>,
];

function SwipeableCarouselHorizontalStack() {
  const scrollOffsetValue = useSharedValue(0);

  const [index, setIndex] = React.useState(0);

  return (
    <View>
      <View style={{ height }}>
        <Carousel
          width={280}
          height={210}
          style={{
            width: "100%",
            height,
            alignItems: "center",
            justifyContent: "center",
          }}
          loop={true}
          mode="horizontal-stack"
          modeConfig={{
            stackInterval: 18,
          }}
          customConfig={() => ({ type: "positive" })}
          defaultScrollOffsetValue={scrollOffsetValue}
          // autoPlay={true}
          // autoPlayInterval={2000}
          data={data}
          onSnapToItem={(index) => setIndex(index)}
          renderItem={({ index }) => data[index]}
        />
      </View>

      {/* <View style={{ marginTop: 16 }}>
        <Dots data={data} currentIndex={index} />
      </View> */}
    </View>
  );
}

export default SwipeableCarouselHorizontalStack;
