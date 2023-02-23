import React, {useState} from 'react';
import {View, Pressable, Platform, Button} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
// import DatePicker from "react-datepicker"; 
import {useField} from 'formik';
import styles from './common.styles';
import TextCustom from './TextCustom';
import Icon from './Icon';
import {convertStringDateToDdMmYyyy, convertStringDateToMdDdYyyy, convertStringToDate, formatDate} from '../../helpers/DatetimeHelpers';
import {DateType} from '../../commons/types';
import Input from './Input';

export interface IDateRowProps {
  label: string;
  date: Date;
  type: DateType;
  name: string;
  defaultValue?: string; 
  onDateChange?: (date: string) => void;
}

const DateRow: React.FC<IDateRowProps> = ({
  label,
  date,
  type,
  name,
  defaultValue,
  onDateChange,
}): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [field, meta, helpers] = useField(name);
  const [isShow, setIsShow] = useState(false);

  const handleDateChange = (
    event?: Event | undefined | string,
    dateChange?: Date | undefined,
  ): void => {
    setIsShow(false);
    if (dateChange) {
      const strDate = formatDate(dateChange!, type, false);
      helpers.setValue(strDate);
      return onDateChange && onDateChange(strDate);
    }
  };

  const isWeb = Platform.OS === 'web';
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (e) => {
    setIsOpen(!isOpen);
    setStartDate(e);
  };
  const handleClick = () => {
    setIsOpen(true);
  };

  const [dateInput,setDateInput] = useState<any>();

  return (
    <View style={[styles.inputContainer]}>
      <TextCustom style={{...styles.inputTitle}}>{label}</TextCustom>

      <Pressable onPress={() => setIsShow(true)}>
        <View style={styles.inputContent}>
          <TextCustom style={styles.inputForm}>
            {formatDate(date, type)}
          </TextCustom>
          {type === 'date' ? (
            <Icon
              name="calendar"
              type="AntDesign"
              style={styles.inputCalendarIcon}
            />
          ) : (
            <Icon
              name="back-in-time"
              type="Entypo"
              style={styles.inputCalendarIcon}
            />
          )}
        </View>
      </Pressable>
      {isShow ? (
        ( isWeb? 

          <>
            <Input
              name={name}
              label={label}
              defaultValue={convertStringDateToMdDdYyyy(`${date}`)}
              onChangeText={(text)=>setDateInput(convertStringToDate(text))}
            />
            <View style={{display:'none'}}>
              <DateTimePicker
                testID="dateTimePicker"
                value={dateInput}
                mode={type}
                is24Hour
                display="default"
                onChange={(event, dateInput) => handleDateChange(event, dateInput)}
              />
            </View>
          </>
        
        :

        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={type}
          is24Hour
          display="default"
          onChange={(event, dateChange) => handleDateChange(event, dateChange)}
        />)
      ) : null}
      {meta.error && meta.touched && (
        <TextCustom style={styles.errorMessage}>{meta.error}</TextCustom>
      )}
    </View>
  );
};

DateRow.defaultProps = {
  type: 'date',
};

export default React.memo(DateRow);
