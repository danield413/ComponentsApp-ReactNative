import { useThemeColor } from '@/hooks/useThemeColor';
import { TextInputProps } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

interface Props extends TextInputProps {
    className?: string;
}

const ThemedTextInput = ({ className, ...rest }: Props) => {

    const backgroundColor = useThemeColor({}, 'background');
    const borderColor = useThemeColor({}, 'primary');

  return (
    <TextInput
      className={`py-4 px-2 text-black dark:text-white ${className}`}
        style={{
            borderRadius: 8,
            borderWidth: 1,
            borderColor: borderColor,
        }}
      placeholderTextColor="#888"
      {...rest}
    />
  )
}

export default ThemedTextInput