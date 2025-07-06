import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { Link, router } from 'expo-router';
import { Text } from 'react-native';

const ModalScreen = () => {
  return (
    <ThemedView className='px-5  flex-1' >
      <Link asChild href='/modal/modal-window' className='mt-10'>
        <Text className='text-center text-lg font-bold color-light-text dark:color-dark-text'>
          Open Modal
        </Text>
      </Link>

      <ThemedButton
        className='mt-5'
        onPress={() => {
          router.push('/modal/modal-window');
        }}
      >
        Abrir modal
      </ThemedButton>

     
    </ThemedView>
  );
};
export default ModalScreen;
