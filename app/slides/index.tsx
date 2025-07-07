import { ThemedText } from '@/components/ThemedText';
import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { FlatList, ImageSourcePropType, NativeScrollEvent, NativeSyntheticEvent, useWindowDimensions } from 'react-native';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../../assets/images/slides/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../../assets/images/slides/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../../assets/images/slides/slide-3.png'),
  },
];

const SlidesScreen = () => {

  const flatListRef = useRef<FlatList>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [scrollEnabled, setScrollEnabled] = useState(false);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;

    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);
    setCurrentSlideIndex( currentIndex > 0 ? currentIndex : 0);
  }

  return (
    <ThemedView className='py-5 justify-center items-center flex-1' >
      <FlatList
        ref={flatListRef}
        data={items}
        keyExtractor={(item) => item.title}
        horizontal
        pagingEnabled
        renderItem={({ item }) => (
          <SlideItem item={item} />
        )}
        scrollEnabled={scrollEnabled}
        onScroll={onScroll}
        onEndReached={() => {
          setScrollEnabled(true);
        }}
        showsHorizontalScrollIndicator={false}
      />

      {
        currentSlideIndex === items.length - 1 ? (
          <ThemedButton 
          className="absolute bottom-10 right-5 w-[150px]"
            onPress={ () => router.dismiss() }
          >Finalizar</ThemedButton>
        ) : (
          <ThemedButton 
          className="absolute bottom-10 right-5 w-[150px]"
            onPress={ () => flatListRef.current?.scrollToIndex({ index: currentSlideIndex + 1 }) }
          >Siguiente</ThemedButton>
        )
      }

    </ThemedView >
  );
};
export default SlidesScreen;


interface SlideItemProps {
  item: Slide;
}

const SlideItem = ({ item }: SlideItemProps) => {

  const { width } = useWindowDimensions();
  const { img, title, desc } = item;

  return (
    <ThemedView className='flex-1 rounded p-10 justify-center bg-red-500' style={{ width }}>
      <Image source={img} className='w-full h-64 rounded' style={{ width: width * 0.7, height: width * 0.7, resizeMode: 'center', alignSelf: 'center' }} />
      <ThemedText type='subtitle' className='mt-5 text-center text-light-primary dark:text-dark-primary'>
        {title}
      </ThemedText>
      <ThemedText type='default' className='mt-2 text-center text-light-secondary dark:text-dark-secondary'>
        {desc}
      </ThemedText>
    </ThemedView>
  );
};
