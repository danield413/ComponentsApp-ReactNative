import ThemedView from '@/presentation/shared/ThemedView';
import { useRef } from 'react';
import { Animated, PanResponder } from 'react-native';

const Animation102Screen = () => {

   const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      },
    ]),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {toValue: {x: 0, y: 0}, useNativeDriver: false}, // Back to zero
      ).start();
    },
  });


  return (
    <ThemedView className='px-5 justify-center items-center flex-1' > 
    <Animated.View
          {...panResponder.panHandlers}
          style={[pan.getLayout(), {
            width: 150,
            height: 150,
            backgroundColor: 'lightblue',
            borderRadius: 10,
          }]}
        />
    </ThemedView>
  );
};
export default Animation102Screen;
