/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  View,
  Pressable,
  FlatList,
  SafeAreaView,
  TextStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {useField} from 'formik';
import {DropdownItemType} from '../../commons/types';
import TextCustom from './TextCustom';
import styles from './common.styles';
import {Colors, AppString} from '../../configs';
import Icon from './Icon';
import ModalBottom from './ModalBottom';
import {removeUnicode} from '../../helpers/UtilitiesHelper';

export interface IDropdownProps {
  name: string;
  label: string;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  wrapStyle?: StyleProp<ViewStyle>;
  selectedValue: string | number | undefined | string[] | number[];
  modalTitle?: string;
  data: DropdownItemType[];
  titles?: string[];
  accessors?: string[];
  onSelect?(item: DropdownItemType): void;
  searchPlaceholder?: string;
  minHeight?: number;
  itemComponent?: (item: DropdownItemType) => any;
  disabled?: boolean;
  isMultiple?: boolean;
}

const Dropdown: React.FC<IDropdownProps> = ({
  name,
  label,
  modalTitle,
  selectedValue,
  data,
  titles,
  accessors,
  onSelect,
  searchPlaceholder,
  itemComponent,
  disabled,
  wrapStyle,
  labelStyle,
  containerStyle,
  isMultiple,
}) => {
  const [field, meta, helpers] = useField(name);

  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [dataSource, setDataSource] = React.useState<DropdownItemType[]>([]);

  React.useEffect(() => {
    setDataSource(data);
  }, [data]);

  const handleSelect = (item: DropdownItemType): any => {
    if (!isMultiple) {
      setIsVisible(false);
      helpers.setValue(item.value);
      helpers.setTouched(false);
      return onSelect && onSelect(item);
    }
    if (Array.isArray(selectedValue)) {
      const currentValues: Array<string | number> = [...selectedValue];
      const index = currentValues.findIndex(
        (p: string | number) => p === item.value,
      );
      if (index > -1) currentValues.splice(index, 1);
      else currentValues.push(item.value);
      helpers.setValue(currentValues);
      helpers.setTouched(false);
    }
  };

  const headerComponent = (): JSX.Element => {
    if (!titles) return <></>;
    return (
      <View style={styles.modalContentRow}>
        {titles?.map((item, index) => (
          <View key={`col-header-${index}`} style={[styles.modalContentColumn]}>
            <TextCustom bold> {item}</TextCustom>
          </View>
        ))}
      </View>
    );
  };

  const renderDropdownItem = (item: DropdownItemType): JSX.Element => {
    if (itemComponent) {
      return itemComponent(item);
    }
    if (!titles) {
      let textBold = 'normal';
      if (!Array.isArray(selectedValue))
        textBold = selectedValue === item.value ? 'bold' : 'normal';
      else {
        textBold =
          selectedValue.findIndex((p: string | number) => p === item.value) > -1
            ? 'bold'
            : 'normal';
      }
      return (
        <Pressable
          style={styles.modalContentRow}
          onPress={() => handleSelect(item)}>
          <Icon
            type="AntDesign"
            name="tags"
            color={Colors.GRAY_LIGHT}
            style={{marginRight: 20}}
          />
          <TextCustom style={{fontWeight: textBold}}>{item.label}</TextCustom>
        </Pressable>
      );
    }

    return (
      <Pressable
        style={styles.modalContentRow}
        onPress={() => handleSelect(item)}>
        {accessors?.map((accessor, index) => (
          <View key={`column-${index}`} style={styles.modalContentColumn}>
            <TextCustom>{item[accessor]}</TextCustom>
          </View>
        ))}
      </Pressable>
    );
  };

  const showLabelBySelectedValue = (): string => {
    if (
      selectedValue === undefined ||
      selectedValue === null ||
      selectedValue === '' ||
      (Array.isArray(selectedValue) && selectedValue.length < 1)
    ) {
      return `${AppString.Common.SelectDefault} ${label}`;
    }
    if (!Array.isArray(selectedValue)) {
      const itemSelected = data.find((p) => p.value === selectedValue);
      return itemSelected?.label || '';
    }

    let labelReturn = '';
    for (let i = 0; i < selectedValue.length; i += 1) {
      const item = data.find((p) => p.value === selectedValue[i]);
      if (item) labelReturn += `${item.label}; `;
    }
    return selectedValue.length < 2
      ? labelReturn
      : `(đang chọn ${selectedValue.length})`;
  };

  const onSearch = React.useCallback(
    (str: string): void => {
      const searchText: string = removeUnicode(str);
      const dataFilter: DropdownItemType[] = data.filter(
        (p: DropdownItemType) => p.keySearch.indexOf(searchText) > -1,
      );
      setDataSource(dataFilter);
    },
    [data],
  );

  return (
    <>
      <View style={[styles.inputContainer, containerStyle]}>
        <TextCustom style={labelStyle ?? styles.inputTitle}>{label}</TextCustom>
        <Pressable
          onPress={() => {
            if (!disabled) {
              setIsVisible(true);
              setDataSource(data);
            }
          }}
          {...field}
          style={[styles.inputContent, {paddingBottom: 5}, wrapStyle]}>
          <TextCustom style={styles.inputForm}>
            {showLabelBySelectedValue()}
          </TextCustom>
          <Icon name="down" size={20} color={Colors.GRAY} type="AntDesign" />
        </Pressable>
        {meta.error && meta.touched && (
          <View>
            <TextCustom style={styles.errorMessage}>{meta.error}</TextCustom>
          </View>
        )}
      </View>

      <ModalBottom
        title={modalTitle}
        searchPlaceholder={searchPlaceholder}
        onSearch={onSearch}
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
        style={{paddingHorizontal: 0}}>
        <SafeAreaView style={{flex: 1}}>
          <FlatList
            ListHeaderComponent={headerComponent}
            data={dataSource}
            renderItem={({item}) => renderDropdownItem(item)}
            keyExtractor={(item, index) => `${item.value.toString()}-${index}`}
          />
        </SafeAreaView>
      </ModalBottom>
    </>
  );
};

export default Dropdown;
