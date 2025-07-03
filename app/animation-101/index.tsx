
import { useAnimation } from '@/hooks/useAnimation';
import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { Animated } from 'react-native';

const Animation101Screen = () => {

  const { animatedOpacity, animatedTop, fadeIn, fadeOut } = useAnimation();

  

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
          fadeIn({
            duration: 300,
            toValue: 1,
            useNativeDriver: true
          });
        }}
      >Fade In</ThemedButton>
      <ThemedButton
        className='mb-5'
        onPress={ () => {
          fadeOut({
            duration: 300,
            toValue: 0,
            useNativeDriver: true
          });
        }}
      >Fade Out</ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
