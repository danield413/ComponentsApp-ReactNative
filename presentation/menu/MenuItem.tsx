import { ThemedText } from '@/components/ThemedText';
import { Href, router } from 'expo-router';
import { Pressable, View } from 'react-native';

interface MenuItemProps {
    title: string;
    icon: string;
    name: string;

    isFirst?: boolean;
    isLast?: boolean;

}

const MenuItem = ({ title, icon, name, isFirst, isLast }: MenuItemProps) => {

    const [routeName] = name.split('/')

    return (
        <Pressable
            onPress={() => router.push(routeName as Href)}
            className='bg-white dark:bg-black/15 px-5 py-2'
            style={{
                ...(isFirst && {
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    paddingTop: 10,
                }),
                ...(isLast && {
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    paddingBottom: 10,
                }),
            }}
        >
            <View className="flex-row items-center">
                <ThemedText
                    type='link'
                >{title}</ThemedText>
            </View>
        </Pressable>
    )
}

export default MenuItem