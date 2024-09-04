import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SwipeableCarouselHorizontalStack from "@/components/SwipeableCarousel/SwipeableCarouselHorizontalStack";

const RestaurantScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text></Text>

      <SwipeableCarouselHorizontalStack></SwipeableCarouselHorizontalStack>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RestaurantScreen;
