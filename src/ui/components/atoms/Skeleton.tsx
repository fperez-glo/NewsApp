import React from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

interface SkeletonProps {
  className?: string;
}

const Skeleton = ({ className }: SkeletonProps) => {
  const opacity = useSharedValue(1);

  opacity.value = withRepeat(withTiming(0.4, { duration: 900 }), -1, true);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Animated.View className={`h-4 w-24 rounded-md bg-gray-300 ${className}`} style={animatedStyle}></Animated.View>
  );
};

export default Skeleton;
