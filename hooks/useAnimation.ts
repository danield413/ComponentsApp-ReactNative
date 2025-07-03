import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(-100)).current;

  const fadeIn = ({ duration = 300, toValue = 1, useNativeDriver = true, callback = () => {
    console.log("Fade In Animation Completed");
  }}) => {
    // Reset the animated values before starting the animation
    animatedOpacity.setValue(0);

    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: useNativeDriver,
    }).start(callback);
  };

  const startMovingTopPosition = () => {
    animatedTop.setValue(-100);

    Animated.timing(animatedTop, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
      easing: Easing.elastic(1.3),
    }).start();
  };

  const fadeOut = ({ duration = 300, toValue = 0, useNativeDriver = true, callback = () => {
    console.log("Fade Out Animation Completed");
  } }) => {
    // Reset the animated values before starting the animation
    animatedOpacity.setValue(1);

    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: useNativeDriver,
    }).start(callback);
  };

  const startMovingBottomPosition = () => {
    animatedTop.setValue(0);

    Animated.timing(animatedTop, {
      toValue: -100,
      duration: 500,
      useNativeDriver: true,
      // easing: Easing.elastic(1.3)
    }).start();
  };

  return {
    animatedOpacity,
    animatedTop,
    fadeIn,
    startMovingTopPosition,
    fadeOut,
    startMovingBottomPosition,
  };
};
