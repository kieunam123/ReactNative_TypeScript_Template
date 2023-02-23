/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useField} from 'formik';
import {Colors} from '../../configs';
import {scaleFactor} from '../../helpers/UtilitiesHelper';
import Icon from './Icon';
import TextCustom from './TextCustom';
import stylesCommons from './common.styles';

export interface IProps {
  lable: string;
  name: string;
  checked: boolean;
  onPress?: (value: string | number | boolean) => void;
}

const CheckBox = ({name, lable, checked, onPress}: IProps) => {
  const [field, meta, helpers] = useField(name);

  const handleOnPress = () => {
    const isValue = !checked;
    helpers.setValue(isValue);
    return onPress && onPress(isValue);
  };

  return (
    <View style={stylesCommons.inputContainer}>
      <Pressable
        style={styles.container}
        onPress={() => handleOnPress()}
        {...field}>
        <View style={styles.square}>
          {checked && (
            <Icon name="check" type="AntDesign" style={styles.icon} />
          )}
        </View>
        <Text>{lable}</Text>
      </Pressable>
      {meta.error && meta.touched && (
        <TextCustom style={stylesCommons.errorMessage}>{meta.error}</TextCustom>
      )}
    </View>
  );
};

export default CheckBox;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  square: {
    width: scaleFactor(18),
    height: scaleFactor(18),
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  icon: {
    fontSize: 20,
    color: Colors.GRAY,
  },
});
