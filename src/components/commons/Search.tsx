/* eslint-disable @typescript-eslint/no-use-before-define */
import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  Pressable,
  Dimensions,
  Keyboard,
} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import {Colors} from '../../configs';
import {Icon} from '.';

const TextInputAnimated = Animated.createAnimatedComponent(TextInput);

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const AnimatedValue = 40;
const MAX_WIDTH = SCREEN_WIDTH * 0.7;
const MARGIN_RIGHT = 10;

export interface IProps {
  title: string;
  placeholder?: string;
  enableSearch?: boolean;
}

const Search = ({title, placeholder, enableSearch}: IProps) => {
  const refTextInput = useRef<TextInput | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const width = useSharedValue<number>(AnimatedValue);

  const animatedStyle = useAnimatedStyle(() => {
    const widthTemp = interpolate(
      width.value,
      [AnimatedValue, MAX_WIDTH],
      [AnimatedValue, MAX_WIDTH],
      Extrapolate.CLAMP,
    );

    return {
      width: withTiming(widthTemp, {
        duration: 200,
        easing: Easing.ease,
      }),

      borderRadius: isOpen ? 5 : 0,
      borderWidth: isOpen ? 0.1 : 0,
      backgroundColor: isOpen ? Colors.WHITE : Colors.TRANSPARENT,
    };
  });

  const textOpacity = useAnimatedStyle(() => {
    const opacity = interpolate(
      width.value,
      [AnimatedValue, MAX_WIDTH],
      [1, 0],
      Extrapolate.CLAMP,
    );
    const textWidth = interpolate(
      width.value,
      [AnimatedValue, MAX_WIDTH],
      [MAX_WIDTH - MARGIN_RIGHT, 0],
      Extrapolate.EXTEND,
    );
    return {
      opacity: withTiming(opacity, {duration: 200, easing: Easing.ease}),
      width: withTiming(textWidth, {
        duration: 200,
        easing: Easing.ease,
      }),
      marginLeft: MARGIN_RIGHT,
    };
  });

  return (
    <>
      <Animated.Text style={[styles.title, textOpacity]}>{title}</Animated.Text>
      {enableSearch && (
        <Animated.View style={[styles.searchBox, animatedStyle]}>
          <TextInputAnimated
            placeholder={placeholder ?? 'Nội dung tìm kiếm'}
            style={[{flex: 1}]}
            ref={refTextInput}
          />

          <Pressable
            onPress={() => {
              if (width.value === AnimatedValue) {
                width.value = MAX_WIDTH;
                setIsOpen(true);
                refTextInput.current?.focus();
              } else {
                width.value = AnimatedValue;
                setIsOpen(false);
                Keyboard.dismiss();
              }
            }}>
            <Icon
              name={isOpen ? 'close' : 'search'}
              type="EvilIcons"
              color={Colors.GRAY_LIGHT}
            />
          </Pressable>
        </Animated.View>
      )}
    </>
  );
};

export default Search;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBox: {
    width: 30,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    overflow: 'hidden',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.GRAY,
    textAlign: 'center',
  },
});
