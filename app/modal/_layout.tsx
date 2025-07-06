import { Stack } from 'expo-router'

const ModalLayout = () => {
  return (
    <Stack
        screenOptions={{
            headerShown: false,
            animation: 'fade_from_bottom',
        }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="modal-window"
        options={{
          presentation: 'modal',
        }}
      />
    </Stack>
  )
}

export default ModalLayout