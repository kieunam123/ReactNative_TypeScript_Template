/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import {View, StyleSheet, ViewProps} from 'react-native';
import {Colors} from '../../configs';
import {TextCustom} from '../commons';

export interface IProps extends ViewProps {
  label: string;
  value: string;
  valCol: number;
  valLabel: number;
  isBold?: boolean;
  valColor?: string;
}

const RowLabelValue = ({
  label,
  value,
  valCol,
  isBold,
  valColor,
  valLabel,
}: IProps) => {
  const fontWeight = isBold ? 'bold' : undefined;
  const color = valColor ?? Colors.GRAY;
  return (
    <View style={styles.container}>
      <View style={[styles.column, {flex: valLabel}]}>
        <TextCustom style={styles.label}>{label}</TextCustom>
      </View>
      <View style={[styles.column, {flex: valCol}]}>
        <TextCustom style={{paddingLeft: 10, fontWeight, color}}>
          {value}
        </TextCustom>
      </View>
    </View>
  );
};

RowLabelValue.defaultProps = {
  valCol: 2,
  valLabel: 1,
};

export default RowLabelValue;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  column: {flex: 1},
  label: {color: Colors.GRAY_LIGHT, fontSize: 13, marginRight: 10},
});
