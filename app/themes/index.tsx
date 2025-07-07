import { useThemeChangerContext } from '@/presentation/context/ThemeChangeContext';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';

const ThemesScreen = () => {

  // const { colorScheme, setColorScheme } = useColorScheme();

  const { toggleTheme, currentTheme, setSystemTheme, isSystemTheme } = useThemeChangerContext();

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: currentTheme === 'dark',
    systemMode: isSystemTheme,
  });

  const setDarkMode = (value: boolean) => {

    // setColorScheme(value ? 'dark' : 'light');
    toggleTheme();

    setDarkModeSettings({
      darkMode: value,
      systemMode: false,
    })
  }
  const setSystemMode = (value: boolean) => {

    if ( value ) {
      setSystemTheme();
    }
    
    setDarkModeSettings({
      darkMode: darkModeSettings.darkMode,
      systemMode: value,
    });
    
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
