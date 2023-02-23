import React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import styles from './section.styles';

export interface RowProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  isSmall?: boolean;
}

const Row: React.FC<RowProps> = ({children, isSmall, style}) => {
  const secondStyle: any = isSmall
    ? {alignItems: 'center', marginVertical: 8}
    : undefined;
  return (
    <View style={[styles.rowContainer, secondStyle, style]}>{children}</View>
  );
};

export default Row;
