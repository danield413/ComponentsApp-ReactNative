import { ThemedText } from '@/components/ThemedText'
import ThemedButton from '@/presentation/shared/ThemedButton'
import ThemedView from '@/presentation/shared/ThemedView'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Platform } from 'react-native'

const ModalScreen = () => {
  return (
    <ThemedView className='px-5 flex-1 justify-center items-center' bgColor='#A52182'>
      <ThemedText>Hola, modal</ThemedText>

       <ThemedButton
        className='mt-5'
        onPress={() => {
          router.push('/modal/modal-window2');
        }}
      >
        Otro modal
      </ThemedButton>

      <StatusBar  style={
            Platform.OS === 'ios' ? 'light' : 'auto'
      }/>
    </ThemedView>
  )
}

export default ModalScreen