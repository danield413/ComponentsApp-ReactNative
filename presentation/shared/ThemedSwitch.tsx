import { ThemedText } from '@/components/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Platform, Pressable, Switch, View } from 'react-native';

interface Props {
    text?: string;
    value: boolean;
    className?: string;

    onValueChange: (value: boolean) => void;
}

const isAndroid = Platform.OS === 'android';

const ThemedSwitch = ({ text, value, className, onValueChange }: Props) => {

    const switchActiveColor = useThemeColor({}, 'primary');

    return (
        <Pressable
            className={`flex flex-row items-center justify-between active:opacity-80 ${className}`}
            onPress={() => onValueChange(!value)}
        >
            {
                text ? <ThemedText type='default'>
                    {text}
                </ThemedText> : <View />
            }
            <Switch
                thumbColor={ isAndroid ? switchActiveColor : '' }

                value={value}
                onValueChange={onValueChange}
                className={className}
                trackColor={{
                    false: "gray",
                    true: switchActiveColor,
                }}
            />
        </ Pressable>

    )
}

export default ThemedSwitch