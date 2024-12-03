import { Dimensions, StyleSheet, View } from 'react-native';
import React, { useCallback, useImperativeHandle } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { ThemedView } from '../atoms/ThemedView';
import { useThemeDefaultColor } from '../../hooks/useThemeColor';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 400;

type BottomSheetProps = {
  children?: React.ReactNode;
};

export type BottomSheetRefProps = {
  scrollTo: (destination: number) => void;
  isActive: () => boolean;
  scrollToTop: () => void;
};

const BottomSheet = React.forwardRef<BottomSheetRefProps, BottomSheetProps>(({ children }, ref) => {
  const translateY = useSharedValue(0);
  const active = useSharedValue(false);
  const colorScheme = useThemeDefaultColor();

  const scrollTo = useCallback((destination: number) => {
    'worklet';
    active.value = destination !== 0;

    translateY.value = withSpring(destination, { damping: 50 });
  }, []);

  const scrollToTop = useCallback(() => {
    'worklet';
    active.value = true;
    translateY.value = withSpring(MAX_TRANSLATE_Y, { damping: 50 });
  }, []);

  const isActive = useCallback(() => {
    return active.value;
  }, []);

  useImperativeHandle(ref, () => ({ scrollTo, isActive, scrollToTop }), [scrollTo, isActive, scrollToTop]);

  const context = useSharedValue({ y: 0 });
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      if (translateY.value > -SCREEN_HEIGHT / 2.4) {
        scrollTo(0);
      }
      //(translateY.value < -SCREEN_HEIGHT / 1.5)
      else {
        scrollTo(MAX_TRANSLATE_Y);
      }
    });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
      [25, 5],
      Extrapolation.CLAMP,
    );

    return {
      borderRadius,
      transform: [{ translateY: translateY.value }],
    };
  });

  const animStyle = useAnimatedStyle(
    () => ({
      opacity: withTiming(active.value ? 1 : 0),
    }),
    [],
  );

  const animBackdropProps: any = useAnimatedProps(
    () => ({
      pointerEvents: active.value ? 'auto' : 'none',
    }),
    [],
  );

  return (
    <>
      <Animated.View
        onTouchStart={() => {
          scrollTo(0);
        }}
        style={[
          {
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'rgba(0,0,0,.5)',
          },
          animStyle,
        ]}
        animatedProps={animBackdropProps}
      >
        <GestureDetector gesture={gesture}>
          <Animated.View
            style={[
              styles.bottomSheetContainer,
              rBottomSheetStyle,
              {
                backgroundColor: colorScheme.background,
              },
            ]}
          >
            <View style={styles.line} />
            <ThemedView darkColor="rgba(255,255,255,.1)" lightColor="rgba(0,0,0,.1)" className="h-[1.5px] w-full" />
            <ThemedView className="flex-1">{children}</ThemedView>
          </Animated.View>
        </GestureDetector>
      </Animated.View>
    </>
  );
});

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: '100%',
    position: 'absolute',
    top: SCREEN_HEIGHT,
    borderRadius: 25,
    zIndex: 9999,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
  },
});

export default BottomSheet;
