import React, { useState } from 'react';
import {View, TextInput, Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../../configs';
import {removeUnicode} from '../../helpers/UtilitiesHelper';
import styles from './section.styles';

export interface ISearchBoxProps<T> {
  placeholder: string;
  onSearch?: (data?: T[]) => void;
  onPress?: () => void;
  dataSource?: T[];
  accessor: keyof T;
  stringtext?:any;
}

// function SearchBox<T>({placeholder, onSearch}: ISearchBoxProps<T>) {
const SearchBox2 = <T extends {}>({
  placeholder,
  dataSource,
  accessor,
  onSearch,
  onPress,
  stringtext
}: ISearchBoxProps<T>) => {
  const [text, setText] = useState<string>('');
  const [searchText, setSearchText] = useState("");

  function onChangeText (newValue: string) {
    if(newValue.length > 0){
      setText(newValue)
    } else {
      setText('')
    }
    const searchString = removeUnicode(text);
    const data = dataSource?.filter((p: T) => {
      return (
        String(p[accessor]).toLowerCase().trim().indexOf(searchString) > -1
      );
    });
    if (onSearch) {
      onSearch(data);
    }
  };

  return (
    <View style={styles.searchBoxContainer}>
      <TextInput
        placeholderTextColor={Colors.GRAY_LIGHT}
        placeholder={placeholder}
        style={styles.searchBoxInput}
        onChangeText={stringtext}
        // onEndEditing={text === '' ? onPress : ()=>onChangeText(text)}
        onSubmitEditing={text === '' ? onPress : ()=>onChangeText(text)}
      />
      <Pressable style={styles.searchBoxBtn} onPress={text === '' ? onPress : ()=>onChangeText(text)}>
        <AntDesign name="search1" style={styles.searchBoxIcon} />
      </Pressable>
    </View>
  );
};

export default SearchBox2;
