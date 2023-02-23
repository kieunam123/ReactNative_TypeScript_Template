/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {TextStyle, TouchableOpacity, View} from 'react-native';
import TextCustom from './TextCustom';
import styles from './common.styles';
import Icon, {IIconProps} from './Icon';
import {Colors, Sizes} from '../../configs';

export interface IButtonProps {
  outline?: boolean;
  radius?: number;
  title: string;
  iconLeft?: IIconProps;
  iconRight?: IIconProps;
  onPress?(): void;
  color?: string;
  bgColor?: string;
  isSmall?: boolean;
  disabled?: boolean;
  leftComponent?: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({
  outline,
  title,
  radius,
  iconLeft,
  iconRight,
  color,
  isSmall,
  onPress,
  disabled,
  bgColor,
  leftComponent,
}) => {
  const borderRadius = {borderRadius: radius};
  const textStyle: TextStyle = {...styles.buttonTitle};
  if (disabled) {
    textStyle.color = Colors.DISABLED;
  } else if (color) {
    textStyle.color = color;
  } else if (outline) {
    textStyle.color = Colors.ORIGIN;
  }

  const smallStyle: object | undefined = isSmall
    ? {paddingVertical: 5}
    : {paddingVertical: 10};
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <View
          style={[
            outline
              ? {...styles.buttonOutline, borderColor: color}
              : {...styles.button, borderColor: color, ...smallStyle},
            !outline && {backgroundColor: bgColor ?? Colors.ORIGIN},
            disabled ? {backgroundColor: Colors.BG} : undefined,
            borderRadius,
          ]}>
          {iconLeft && (
            <Icon
              type={iconLeft.type}
              name={iconLeft.name}
              color={color}
              size={Sizes.IconSub}
            />
          )}
          {leftComponent}
          <TextCustom style={{...textStyle}}>{title}</TextCustom>
          {iconRight && (
            <Icon
              type={iconRight.type}
              name={iconRight.name}
              color={color}
              size={Sizes.IconSub}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

Button.defaultProps = {
  outline: false,
  title: 'Button Title',
  radius: 0,
  color: Colors.ORIGIN,
};

export default Button;
