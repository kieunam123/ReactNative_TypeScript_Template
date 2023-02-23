import React from 'react';
import {TextStyle, StyleProp} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import styles from './common.styles';
import {Sizes, Colors} from '../../configs';
import {IconType} from '../../commons/types';
import {scaleFactor} from '../../helpers/UtilitiesHelper';

export interface IIconProps {
  type: IconType;
  name: string;
  color?: string;
  size?: number;
  style?: StyleProp<TextStyle>;
  onIconPress?:()=> void;
}

const Icon: React.FC<IIconProps> = ({type, name, color, size, style, onIconPress}) => {
  let component = null;
  const iconSize = scaleFactor(size);
  switch (type) {
    case 'AntDesign':
      component = (
        <AntDesign
          name={name}
          size={iconSize}
          color={color}
          style={[styles.iconCommon, style]}
          onPress = {onIconPress}
        />
      );
      break;
    case 'Entypo':
      component = (
        <Entypo
          name={name}
          size={iconSize}
          color={color}
          style={[styles.iconCommon, style]}
          onPress = {onIconPress}
        />
      );
      break;
    case 'MaterialIcons':
      component = (
        <MaterialIcons
          name={name}
          size={iconSize}
          color={color}
          style={[styles.iconCommon, style]}
          onPress = {onIconPress}
        />
      );
      break;
    case 'EvilIcons':
      component = (
        <EvilIcons
          name={name}
          size={iconSize}
          color={color}
          style={[styles.iconCommon, style]}
          onPress = {onIconPress}
        />
      );
      break;
    case 'FontAwesome':
      component = (
        <FontAwesome
          name={name}
          size={iconSize}
          color={color}
          style={[styles.iconCommon, style]}
          onPress = {onIconPress}
        />
      );
      break;
    case 'Feather':
      component = (
        <Feather
          name={name}
          size={iconSize}
          color={color}
          style={[styles.iconCommon, style]}
          onPress = {onIconPress}
        />
      );
      break;
    default:
      component = (
        <AntDesign
          name={name}
          size={iconSize}
          color={color}
          style={[styles.iconCommon, style]}
          onPress = {onIconPress}
        />
      );
      break;
  }

  return <>{component}</>;
};

// Default props
Icon.defaultProps = {
  type: 'AntDesign',
  name: 'home',
  size: Sizes.Icon,
  color: Colors.ORIGIN,
};

export default Icon;
