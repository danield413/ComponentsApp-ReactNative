import { useThemeColor } from '@/hooks/useThemeColor';
import FadeInImage from '@/presentation/images/FadeInImage';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

const InfiniteScrollScreen = () => {

  const [numbers, setNumbers] = useState<number[]>([0,1,2,3,4,5,6]);
  const primaryColor = useThemeColor({}, 'primary');

  const loadMore = () => {
    const newNumbers = Array.from({ length: 5 }, (_, i) => i + numbers.length);

    setTimeout(() => {
      setNumbers(prevNumbers => [...prevNumbers, ...newNumbers]);
    }, 3000);
  };

  return (
    <ThemedView className='py-5 flex-1 ' > 
      <FlatList 
          data={numbers}
          renderItem={({ item }) => (
            <ListItem number={item} />
          )}
          onEndReached={loadMore}
          onEndReachedThreshold={0.6}
          ListFooterComponent={() => (
            <View style={{ height: 100, justifyContent: 'center' }}>
              <ActivityIndicator size={40} color={primaryColor} />
            </View>
          )}
      />
    </ThemedView>
  );
};
export default InfiniteScrollScreen;


interface ListItemProps  {
  number: number;
}


const ListItem = ({ number }: ListItemProps) => {


  return (
    <FadeInImage 
      uri={`https://picsum.photos/id/${number}/500/400`}
      style={{ height: 400, width: '100%' }}
    />
    // <Image
    //   source={{ uri: `https://picsum.photos/id/${number}/200/200` }}
    //   className='h-[200px] w-full'
    //   style={{height: 400, width: '100%'}}
    // />
  )
}