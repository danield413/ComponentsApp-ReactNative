
import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

const Animation101Screen = () => {

  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {

    // Reset the animated values before starting the animation
    animatedOpacity.setValue(0);
    animatedTop.setValue(-100);

    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(animatedTop, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
      easing: Easing.elastic(1.3)

    }).start();

  };

  const fadeOut = () => {

    // Reset the animated values before starting the animation
    animatedOpacity.setValue(1);
    animatedTop.setValue(0);

    Animated.timing(animatedTop, {
      toValue: -100,
      duration: 500,
      useNativeDriver: true,
      // easing: Easing.elastic(1.3)
    }).start();

    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();

  };

  return (
    <ThemedView className='px-5 justify-center items-center flex-1' >
      {/* <Text>Animation101Screen</Text> */}

      <Animated.View className="bg-light-secondary dark:bg-dark-secondary rounded-xl mb-6" style={{
       width: 150,
        height: 150,
        opacity: animatedOpacity,
        transform: [{ translateY: animatedTop }]
      }}>

      </Animated.View>

      <ThemedButton
        className='mb-5'
        onPress={ () => {
          fadeIn();
        }}
      >Fade In</ThemedButton>
      <ThemedButton
        className='mb-5'
        onPress={ () => {
          fadeOut();
        }}
      >Fade Out</ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
