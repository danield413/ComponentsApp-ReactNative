import { useAnimation } from '@/hooks/useAnimation';
import { useState } from 'react';
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';

interface FadeInImageProps {
    uri: string;
    style: StyleProp<ImageStyle>;
}

const FadeInImage = ({ uri, style }: FadeInImageProps) => {

    const [isLoading, setIsLoading] = useState(true);
    const { fadeIn, animatedOpacity } = useAnimation();

  return (
    <View
        style={{justifyContent: 'center', alignItems: 'center', width: '100%'}}
    >
        {isLoading && (
            <ActivityIndicator
                size={40}
                style={{ position: 'absolute' }}
            />
        )}
      <Animated.Image
        source={{ uri }}
        style={[ style, { opacity: animatedOpacity } ]}
        onLoadEnd={() => {
            // setIsLoading(false);
            fadeIn({ toValue: 1, duration: 1000, useNativeDriver: true});
            setIsLoading(false);
        }}
        />
    </View>
  )
}

export default FadeInImage