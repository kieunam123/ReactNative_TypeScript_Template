import {useField} from 'formik';
import React, {useCallback} from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import styles from './common.styles';
import TextCustom from './TextCustom';

export interface IProps {
  label: string;
  value: string | number;
  isChecked?: boolean;
  onChecked?: (value: string | number) => void;
}

const Radio = ({label, value, isChecked, onChecked}: IProps) => {
  const handleOnChecked = useCallback(() => {
    return onChecked && onChecked(value);
  }, [onChecked, value]);

  return (
    <TouchableWithoutFeedback onPress={handleOnChecked}>
      <View style={styles.radioContainer}>
        <View style={styles.radioCircle}>
          {isChecked && <View style={styles.radioDot} />}
        </View>
        <TextCustom>{label}</TextCustom>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Radio;
