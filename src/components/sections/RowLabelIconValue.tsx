import React from 'react';
import {View, Text, StyleSheet, StyleProp, ViewProps, TextProps, TextStyle} from 'react-native';
import {IconType} from'../../commons/types';
import {Colors} from '../../configs';
import Row from './Row';
import Column from './Column';
import Icon from '../commons/Icon';
import TextCustom from '../commons/TextCustom';

export interface IProps {
  iconType: IconType;
  iconName: string;
  label: string;
  value: string;
  styleValue?: TextStyle;
}

const RowLabelIconValue = ({
  iconType,
  iconName,
  label,
  value,
  styleValue,
}: IProps) => {
  return (
    <Row isSmall>
      <Column style={{justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name={iconName}
            type={iconType}
            style={{fontSize: 18, color: Colors.DISABLED, marginRight: 10}}
          />
          <TextCustom style={{color: Colors.GRAY_LIGHT, fontSize: 14}}>
            {label}
          </TextCustom>
        </View>
        <TextCustom style={styleValue}>{value}</TextCustom>
      </Column>
    </Row>
  );
};

export default RowLabelIconValue;
