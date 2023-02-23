import React, {useState} from 'react';
import {View, Pressable, Platform, Button, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
// import DatePicker from "react-datepicker"; 
import styles from './common.styles';
import TextCustom from './TextCustom';
import Icon from './Icon';
import {formatDate, formatDateToDdMmYyyy} from '../../helpers/DatetimeHelpers';
import {DateType} from '../../commons/types';

export interface IDateRowProps {
  label: string;
  date: Date;
  type: DateType;
  onDateChange?: (date: string) => void;
}

const DateRowWithoutFormik: React.FC<IDateRowProps> = ({
  label,
  date,
  type,
  onDateChange,
}): JSX.Element => {
  const [isShow, setIsShow] = useState(false);

  const handleDateChange = (
    event: Event | string,
    dateChange: Date | undefined,
  ): void => {
    setIsShow(false);
    if (dateChange) {
      const strDate = formatDate(dateChange!, type, false);
      return onDateChange && onDateChange(strDate);
    }
  };

  const isWeb = Platform.OS === 'web';
  const [startDate, setStartDate] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (e) => {
    
    setStartDate(e);
    handleDateChange('',e);
  };
  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <View style={styles.inputContainer}>
      <TextCustom style={styles.inputTitle}>{label}</TextCustom>

      <Pressable onPress={() => setIsShow(true)}>
        <View style={styles.inputContent}>
          <TextCustom style={styles.inputForm}>
            {type === 'date'
              ? formatDateToDdMmYyyy(date)
              : formatDate(date, type)}
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
        (isWeb ?
          <>
            {/* <Button title={`${type === 'date'
              ? formatDateToDdMmYyyy(date)
              : formatDate(date, type)}`} onPress={handleClick} />
            {isOpen && <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <DatePicker  
              selected={startDate}
              onChange={handleChange}
              dateFormat="dd/MM/yyyy"
              showMonthYearPicker
              // inline
              withPortal
             />
            </View>
             } */}
          </>
          :

          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={type}
            is24Hour
            display="default"
            onChange={(event, dateChange) => handleDateChange(event, dateChange)}
          />
          
          )
      ) : null}
    </View>
  );
};

DateRowWithoutFormik.defaultProps = {
  type: 'date',
};

export default DateRowWithoutFormik;
