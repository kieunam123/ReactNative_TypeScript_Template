import React, {useState, useEffect} from 'react';
import {View, Pressable, ViewStyle, StyleProp} from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import styles from './common.styles';
import TextCustom from './TextCustom';
import Icon from './Icon';
import {Colors, Sizes} from '../../configs';

export interface IAccordionProps {
  children: React.ReactNode;
  title: string;
  isOpen?: boolean;
  style?: StyleProp<ViewStyle>;
  showIcon?: boolean;
  headerStyle?: StyleProp<ViewStyle>;
}

const Accordion: React.FC<IAccordionProps> = ({
  title,
  children,
  isOpen,
  style,
  showIcon,
  headerStyle,
}): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  const height = useSharedValue<number>(0);

  useEffect(() => {
    height.value = isOpen ? 1 : 0;
  }, [height, isOpen]);

  const heightAnimation = useAnimatedStyle(() => {
    const h = height.value > 0 ? '100%' : '0%';
    return {
      maxHeight: withTiming(h, {
        duration: 300,
        easing: Easing.bounce,
      }),
    };
  });

  const rotate = useAnimatedStyle(() => {
    const rote = interpolate(height.value, [0, 1], [0, 180]);

    return {
      transform: [{rotate: `${rote}deg`}],
    };
  });

  const handleOpenClose = () => {
    if (open) {
      height.value = 1;
    } else {
      height.value = 0;
    }
    setOpen(!open);
  };

  return (
    <View style={[styles.accordionContainer, style]}>
      <Pressable onPress={(): void => handleOpenClose()}>
        <View style={[styles.accordionHeader, headerStyle]}>
          <View style={{flexDirection: 'row'}}>
            {showIcon && (
              <Icon name="bars" type="AntDesign" style={styles.accordionIcon} />
            )}
            <TextCustom bold style={styles.accordionTitle}>
              {title}
            </TextCustom>
          </View>

          <Animated.View style={rotate}>
            <Icon
              name="down"
              size={Sizes.IconSub}
              type="AntDesign"
              color={Colors.GRAY}
            />
          </Animated.View>
        </View>
      </Pressable>
      <Animated.View style={[heightAnimation, {overflow: 'hidden'}]}>
        {children}
      </Animated.View>
    </View>
  );
};

Accordion.defaultProps = {
  showIcon: true,
};

export default Accordion;
