import React from 'react';
import { View, ViewProps } from 'react-native';

interface Props extends ViewProps {
    className ?: string;

}

const ThemedCard = ({children, className}: Props) => {
    return (
        <View className={`bg-white dark:bg-black/10 rounded-xl p-4 shadow shadow-black/5 ${className}`}>
            {children}
        </View>
    )
}

export default ThemedCard