import React from 'react';
import {
  View,
  TouchableOpacity,
  ViewStyle,
  Alert,
  Pressable,
} from 'react-native';
import Icon from './Icon';
import styles from './common.styles';
import {IconType} from '../../commons/types';
import {Colors} from '../../configs';

export interface ICircleButtonProps {
  onPress?(): void;
  iconName?: string;
  iconType?: IconType;
  iconColor?: string;
  style?: ViewStyle;
}

const CircleButton: React.FC<ICircleButtonProps> = ({
  onPress,
  iconName,
  iconType,
  iconColor,
  style,
}) => {
  return (
    <View style={[styles.circleButton, style]}>
      <Pressable onPress={onPress}>
        <Icon
          name={iconName ?? 'plus'}
          type={iconType ?? 'AntDesign'}
          style={[styles.circleButtonIcon, {color: iconColor}]}
        />
      </Pressable>
    </View>
  );
};

CircleButton.defaultProps = {
  iconName: 'plus',
  iconType: 'AntDesign',
  iconColor: Colors.ORIGIN,
};

export default CircleButton;
