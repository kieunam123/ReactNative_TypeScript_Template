/* eslint-disable react/no-array-index-key */
import {useField} from 'formik';
import React, {useCallback} from 'react';
import {IRadioData} from '../../commons/types';
import Radio from './Radio';
import TextCustom from './TextCustom';
import styles from './common.styles';

export interface IProps {
  data: IRadioData[];
  selectedValue?: string | number;
  name: string;
  onValueChange?: (value: string | number) => void;
}

const RadioGroup = ({data, selectedValue, name, onValueChange}: IProps) => {
  const [field, meta, helpers] = useField(name);

  const handleValueChange = useCallback(
    (value: string | number) => {
      helpers.setValue(value);
      return onValueChange && onValueChange(value);
    },
    [helpers, onValueChange],
  );
  return (
    <>
      {data.map((item, index) => {
        return (
          <Radio
            label={item.label}
            value={item.value}
            isChecked={selectedValue === item.value}
            key={`radio-key-${index}`}
            onChecked={handleValueChange}
          />
        );
      })}
      {meta.error && meta.touched && (
        <TextCustom style={styles.errorMessage}>{meta.error}</TextCustom>
      )}
    </>
  );
};

export default RadioGroup;
