import React from 'react';
import {View, ViewStyle} from 'react-native';

export type ColumnSize = 0.5 | 1 | 2 | 3 | 4;

export interface IColumnProps {
  mobile?: ColumnSize;
  children: React.ReactNode;
  style?: ViewStyle;
}

const Column: React.FC<IColumnProps> = ({
  children,
  mobile,
  style,
}): JSX.Element => {
  return (
    <View
      style={[
        {flex: mobile, flexDirection: 'row', marginHorizontal: 10},
        style,
      ]}>
      {children}
    </View>
  );
};

Column.defaultProps = {
  mobile: 1,
};

export default Column;
