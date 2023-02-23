import React from 'react';
import {View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './section.styles';
import {TextCustom} from '../commons';
import {Sizes} from'../../configs';

export interface IRowLabelIconProps {
  bold?: boolean;
  value?: string;
  iconType?: 'AntDesign' | 'Entypo' | 'FontAwesome';
  iconName: string;
  isSmall?: boolean;
}

const RowLabelIcon: React.FC<IRowLabelIconProps> = (props): JSX.Element => {
  const fontSize = props?.isSmall ? 12 : Sizes.Content;
  const iconSize = props?.isSmall ? 12 : Sizes.Title;

  const getIcon = (): JSX.Element | null => {
    switch (props?.iconType) {
      case 'AntDesign':
        return (
          <AntDesign
            name={props?.iconName}
            style={[styles.rowLabelIconStyle, {fontSize: iconSize}]}
          />
        );
      case 'Entypo':
        return (
          <Entypo
            name={props?.iconName}
            style={[styles.rowLabelIconStyle, {fontSize: iconSize}]}
          />
        );
      case 'FontAwesome':
        return (
          <FontAwesome
            name={props?.iconName}
            style={[styles.rowLabelIconStyle, {fontSize: iconSize}]}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.rowLabelIconContainer}>
      <View>{getIcon()}</View>
      <TextCustom
        bold={props?.bold ?? false}
        style={{paddingRight: 15, fontSize}}>
        {props?.value}
      </TextCustom>
    </View>
  );
};

RowLabelIcon.defaultProps = {
  iconType: 'AntDesign',
  iconName: 'pluscircle',
};

export default RowLabelIcon;
