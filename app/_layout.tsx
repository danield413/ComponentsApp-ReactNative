import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { allRoutes } from '@/constants/Routes';
import { Stack } from 'expo-router';
import "../global.css";


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor({}, 'background');

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        backgroundColor: backgroundColor,
      }}
    >
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
       
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            headerShown: true,
            headerStyle: {
              backgroundColor: useThemeColor({}, 'background'),
            },
           
          }}
        >
          <Stack.Screen name="index" options={{ title: 'Inicio' }} />
          {
            allRoutes.map( route => (
              <Stack.Screen
                key={route.name}
                name={route.name}
                options={{ title: route.title }}
              />
            ))
          }

        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
