import ThemedSwitch from '@/presentation/shared/ThemedSwitch';
import ThemedView from '@/presentation/shared/ThemedView';
import { useColorScheme } from 'nativewind';
import { useState } from 'react';

const ThemesScreen = () => {

  // const theme = useColorScheme();
  const { colorScheme, setColorScheme } = useColorScheme();

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: colorScheme === 'dark',
    systemMode: false,
  });

  const setDarkMode = (value: boolean) => {

    setColorScheme(value ? 'dark' : 'light');

    setDarkModeSettings({
      darkMode: value,
      systemMode: false,
    })
  }
  const setSystemMode = (value: boolean) => {

    setColorScheme(value ? 'system' : 'light');

    setDarkModeSettings({
      darkMode: false,
      systemMode: value,
    })
  }


  return (
    <ThemedView className="p-5  flex-1">
      <ThemedSwitch
        text='Dark Mode'
        className='mb-5'
        value={darkModeSettings.darkMode}
        onValueChange={(value) => setDarkMode(value)}
      />
      <ThemedSwitch
        text='System Mode'
        value={darkModeSettings.systemMode}
        onValueChange={(value) => setSystemMode(value)}
      />

    </ThemedView>
  );
};
export default ThemesScreen;
