import React from 'react';
import {Text, TextStyle} from 'react-native';
import styles from './common.styles';
import {Colors, Sizes} from '../../configs';

export interface ITextCustomProps {
  style?: TextStyle;
  children?: React.ReactNode;
  bold?: boolean;
  isSmall?: boolean;
}

const TextCustom: React.FC<ITextCustomProps> = ({
  style,
  children,
  bold,
  isSmall,
  ...prop
}) => {
  const boldStyle = bold ? styles.textBold : undefined;
  const smallStyle: object | undefined = isSmall
    ? {color: Colors.GRAY_LIGHT, fontSize: Sizes.Note, ...styles.textItalic}
    : undefined;
  return (
    <Text style={[styles.textStyle, boldStyle, smallStyle, style]} {...prop}>
      {children}
    </Text>
  );
};

export default TextCustom;
