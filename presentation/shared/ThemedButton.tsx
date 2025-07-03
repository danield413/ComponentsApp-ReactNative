import React from 'react';
import { Pressable, PressableProps, Text } from 'react-native';

interface ThemedButtonProps extends PressableProps {
    className?: string;
    children: string;
}

const ThemedButton = ({ className, children, ...rest }: ThemedButtonProps) => {
  return (
    <Pressable className={`bg-light-primary dark:bg-dark-primary items-center rounded-xl px-6 py-2 active:opacity-75 ${className}`} {...rest}>
      <Text
        className="text-white"
      >{children}</Text>
    </Pressable>
  )
}

export default ThemedButton