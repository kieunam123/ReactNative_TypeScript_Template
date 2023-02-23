import React from 'react';
import {View, TextInput, TextInputProps, StyleProp, ViewStyle} from 'react-native';
import {
  convertStringToNumber,
  isInvalidString,
} from '../../helpers/UtilitiesHelper';
import styles from './common.styles';
import TextCustom from './TextCustom';

export interface IProps extends TextInputProps {
  label?: string;
  isNumber?: boolean;
  readonly?: boolean;
  contentStyle?: StyleProp<ViewStyle>;
  onValueChange?: (value: number | string) => void;
}

const InputWithoutFormik = ({
  label,
  isNumber,
  readonly,
  value,
  multiline,
  contentStyle,
  onValueChange,
}: IProps) => {
  const placeholderStyle = isInvalidString(value)
    ? styles.inputPlaceholder
    : undefined;
  const multilineStyle = multiline
    ? {height: 130, width: '100%', borderWidth: 0.5}
    : undefined;

  const inputMultipleStyle: TextInputProps | undefined = multiline
    ? {
        textAlignVertical: 'top',
      }
    : undefined;

  const handleOnChangeText = (str: string): void => {
    if (!isNumber) {
      return onValueChange && onValueChange(str);
    }
    const numberValue = convertStringToNumber(str) ?? 0;
    return onValueChange && onValueChange(numberValue);
  };

  return (
    <View style={styles.inputContainer}>
      {!multiline && <TextCustom style={styles.inputTitle}>{label}</TextCustom>}
      <View style={[styles.inputContent, multilineStyle, contentStyle]}>
        <TextInput
          style={[styles.inputForm, placeholderStyle, inputMultipleStyle]}
          keyboardType={isNumber ? 'numeric' : 'default'}
          onChangeText={(str) => handleOnChangeText(str)}
          editable={!readonly}
          placeholder={label && `Nhập ${label}`.toLocaleLowerCase()}
          multiline
          value={value}
        />
      </View>
    </View>
  );
};

export default InputWithoutFormik;
