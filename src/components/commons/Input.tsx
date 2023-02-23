import React from 'react';
import {TextInputProps, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useField} from 'formik';
import {
  convertStringToNumber,
  isInvalidString,
} from '../../helpers/UtilitiesHelper';
import styles from './common.styles';
import TextCustom from './TextCustom';

export interface IInputProps extends TextInputProps {
  label: string;
  isNumber?: boolean;
  name: string;
  readonly?: boolean;
  onValueChange?: (value: number | string | any) => void;
}

const Input: React.FC<IInputProps> = ({
  label,
  isNumber,
  name,
  readonly,
  onValueChange,
  ...props
}) => {
  const {value, placeholder} = props;
  const placeholderStyle = isInvalidString(value)
    ? styles.inputPlaceholder
    : undefined;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [field, meta, helpers] = useField(name);

  const handleOnChangeText = (str: string): void => {
    if (!isNumber) {
      helpers.setValue(str);
      return onValueChange && onValueChange(str);
    }
    const numberValue = convertStringToNumber(str) ?? 0;
    helpers.setValue(numberValue);
    return onValueChange && onValueChange(numberValue);
  };

  const strPlaceholder = placeholder ?? `Nhập ${label.toLocaleLowerCase()}`;

  return (
    <View style={styles.inputContainer}>
      <TextCustom style={styles.inputTitle}>{label}</TextCustom>
      <View style={styles.inputContent}>
        <TextInput
          style={[styles.inputForm]} // , placeholderStyle
          {...props}
          keyboardType={isNumber ? 'numeric' : 'default'}
          onChangeText={(str) => handleOnChangeText(str)}
          editable={!readonly}
          placeholder={strPlaceholder}
        />
      </View>
      {meta.error && meta.touched && (
        <TextCustom style={styles.errorMessage}>{meta.error}</TextCustom>
      )}
    </View>
  );
};

Input.defaultProps = {
  isNumber: false,
  readonly: false,
};

export default Input;
