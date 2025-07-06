import { ThemedText } from '@/components/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import { useThemeColor } from '../../hooks/useThemeColor';

const PullToRefreshScreen = () => {
  
  const primaryColor = useThemeColor({}, 'primary');
  const backgroundColor = useThemeColor({
    dark: '#121212',
    light: '#ffffff',
  }, 'background');

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // Simulate a network request
    await new Promise(resolve => setTimeout(resolve, 3000));
    setRefreshing(false);
  }

  return (
    <ThemedView className='px-5 justify-center items-center' >
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[primaryColor, '#ff0000', '#00ff00', '#0000ff']}
            progressBackgroundColor={backgroundColor}
          />
        }
      >
        <ThemedText>
          PullToRefreshScreen
        </ThemedText>
      </ScrollView>
    </ThemedView >
  );
};
export default PullToRefreshScreen;
