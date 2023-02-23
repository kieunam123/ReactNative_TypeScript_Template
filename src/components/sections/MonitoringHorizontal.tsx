/* eslint-disable @typescript-eslint/no-use-before-define */
import React, {useEffect, useRef, useState, useMemo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList,
  NativeScrollEvent,
} from 'react-native';
import {Colors} from '../../configs';
import {
  convertStringDateToDdMmYyyy,
  isValidDateIso8601,
} from '../../helpers/DatetimeHelpers';
import {doubleFormat} from '../../helpers/UtilitiesHelper';
import {CircleButton, NotFound} from '../commons';

export interface IProps {
  dataS: object[];
  titles: string[];
  fieldKeys: string[];
  keyStatus?: string;
}

const {width} = Dimensions.get('window');
const colWith = width / 5;
const leftCol = colWith * 2;
const rightCol = colWith * 3;

const ALLOWANCE = 16;

const MIN_HEIGHT = 40;
const MAX_CHARACTER_ON_ONE_ROW = 25;
const PADDING_VERTICAL = 10;
const TEXT_LINE_HEIGHT = 25;

const EMPTY_VALUE = '----------';

const MonitoringHorizontal = ({
  dataS,
  keyStatus,
  fieldKeys,
  titles,
}: IProps) => {
  const flatListRef = useRef<FlatList>(null);

  const scrollViewRef = useRef<ScrollView>(null);

  const [arrColHeight, setColHeight] = useState<number[]>([]);
  const [heightContainer, setHeightContainer] = useState<number>(0);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const [yOffset, setYOffset] = useState<number>(0);
  const [maxYOffset, setMaxYOffset] = useState<number>(0);

  const [isScrollDown, setIsScrollDown] = useState<boolean>(true);
  const preOffset = useRef<number>(0);

  const [isToast, setIsToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>();

  useEffect(() => {
    if (dataS && dataS.length > 0) {
      if (flatListRef.current)
        flatListRef.current.scrollToIndex({index: 0, animated: true});
    }
  }, [dataS, keyStatus]);

  useEffect(() => {
    if (dataS) {
      const arrHeight = Array<number>(fieldKeys.length);
      for (let i = 0; i < fieldKeys.length; i += 1) {
        const fieldName = fieldKeys[i];
        const title = titles[i];
        const arrLengthOfItems = dataS.map((a) => {
          const str = a[fieldName];
          return !str ? 0 : str.toString().length;
        });
        const dataByFileName = Math.max(...arrLengthOfItems);
        const maxLengthByFieldName =
          title.length > dataByFileName ? title.length : dataByFileName;
        const totalRow = Math.ceil(
          maxLengthByFieldName / MAX_CHARACTER_ON_ONE_ROW,
        );
        let rowHeight = totalRow * MIN_HEIGHT;
        rowHeight -= totalRow * PADDING_VERTICAL * 2;
        rowHeight += TEXT_LINE_HEIGHT;
        arrHeight[i] = rowHeight;
      }
      setColHeight(arrHeight);
    }
  }, [dataS, fieldKeys, titles]);

  useEffect(() => {
    if (!isToast) {
      setIsToast(true);
      setTimeout(() => {
        setIsToast(false);
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toastMessage]);

  const renderItem = ({item, index}) => {
    return (
      <View>
        {titles.map((title, titleIndex) => {
          const property = fieldKeys[titleIndex];
          const value = item[property];
          // return rowFlatList(prop, value, titleIndex, index);
          return rowFlatList(title, value, titleIndex);
        })}
      </View>
    );
  };

  const rowFlatList = (lable, value, index) => {
    const bgRow =
      index % 2 === 0 ? undefined : {backgroundColor: Colors.BG_SECOND};
    const rowHeight = {height: arrColHeight[index]};
    let strValue = value ?? EMPTY_VALUE;
    if (!value) {
      strValue = typeof value === 'number' ? 0 : EMPTY_VALUE;
    } else if (typeof value === 'number') {
      strValue = doubleFormat(value, '');
    } else if (isValidDateIso8601(value)) {
      if (value.indexOf('00:00:00') > -1)
        strValue = convertStringDateToDdMmYyyy(value, 'date');
      else strValue = convertStringDateToDdMmYyyy(value, 'datetime');
    }
    return (
      <View
        style={[
          styles.viewRow,
          bgRow,
          {width: rightCol},
          rowHeight,
          index === 0 ? styles.borderTopStyle : undefined,
        ]}
        key={`${index}`}>
        <View style={styles.colValue}>
          <Text style={styles.textValue}>{`${strValue}`}</Text>
        </View>
      </View>
    );
  };

  const onViewRef = React.useRef(({changed, viewableItems}) => {
    const {current} = flatListRef;
    let index =
      viewableItems && viewableItems.length > 0 ? viewableItems[0].index : 0;
    index += 1;
    let totalRecord = 0;
    if (current && current.props && current.props.data)
      totalRecord = current.props.data.length;
    setToastMessage(`${index}/${totalRecord}`);
  });
  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 50});

  const handleOnScroll = (e: NativeScrollEvent) => {
    const {x, y} = e.contentOffset;
  };

  const renderHeadComponent = () => {
    return titles.map((lable, index) => {
      const bgRow =
        index % 2 === 0 ? undefined : {backgroundColor: Colors.BG_SECOND};
      const rowHeight = {height: arrColHeight[index]};
      return (
        <View
          style={[
            styles.viewRow,
            bgRow,
            styles.borderRight,
            rowHeight,
            index === 0 ? styles.borderTopStyle : undefined,
          ]}
          // eslint-disable-next-line react/no-array-index-key
          key={`${index}`}>
          <View style={styles.colValue}>
            <Text style={styles.textTitle}>{lable}</Text>
          </View>
        </View>
      );
    });
  };

  const getIconName = useMemo(() => {
    setIsScrollDown(true);
    const downIcon = 'arrowdown';
    const upIcon = 'arrowup';
    if (maxYOffset < 1) return downIcon;
    const preValue = preOffset.current ?? 0;
    if (preValue < 1) return downIcon;
    if (yOffset > preValue) return downIcon;
    setIsScrollDown(false);
    return upIcon;
  }, [maxYOffset, yOffset]);

  return (
    <>
      <View
        style={styles.viewContainer}
        onLayout={(e) => {
          setHeightContainer(e.nativeEvent.layout.height);
        }}>
        <ScrollView
          ref={scrollViewRef}
          pagingEnabled={false}
          onScroll={(e) => {
            preOffset.current = yOffset;
            const {y} = e.nativeEvent.contentOffset;
            setYOffset(y);
          }}
          onMomentumScrollEnd={(e) => {
            const {y} = e.nativeEvent.contentOffset;
            preOffset.current = y + ALLOWANCE;
            setMaxYOffset(y);
          }}
          onContentSizeChange={(contentWidth, ctHeight) => {
            setContentHeight(ctHeight);
          }}
          scrollEventThrottle={160}>
          {!dataS || dataS.length < 1 ? (
            <NotFound />
          ) : (
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{width: leftCol, height: '100%'}}>
                {renderHeadComponent()}
              </View>
              <View style={{width: rightCol, height: '100%'}}>
                <FlatList
                  ref={flatListRef}
                  horizontal
                  pagingEnabled
                  indicatorStyle="white"
                  showsHorizontalScrollIndicator={false}
                  scrollIndicatorInsets={{
                    top: 10,
                    left: 10,
                    bottom: 10,
                    right: 10,
                  }} // Ios only
                  data={dataS}
                  keyExtractor={(_, index) => `${index}`}
                  renderItem={(item) => renderItem(item)}
                  viewabilityConfig={viewConfigRef.current}
                  onViewableItemsChanged={onViewRef.current}
                  // scrollEventThrottle={16}
                  onLayout={(e) => {
                    const {y, x, height, width: width1} = e.nativeEvent.layout;
                  }}
                  onScroll={(e) => handleOnScroll(e.nativeEvent)}
                  onMomentumScrollEnd={(e) => {
                    console.log('scroll y ', e.nativeEvent.contentOffset.y);
                  }}
                  onScrollEndDrag={() => console.log('end')}
                  onScrollBeginDrag={() => console.log('start')}
                />
              </View>
            </View>
          )}
        </ScrollView>

        {contentHeight > heightContainer + ALLOWANCE && (
          <CircleButton
            iconName={getIconName}
            onPress={() => {
              if (scrollViewRef.current) {
                if (isScrollDown) {
                  scrollViewRef.current.scrollToEnd();
                } else {
                  scrollViewRef.current.scrollTo();
                }
              }
            }}
          />
        )}
      </View>
      {isToast && (
        <View style={styles.toast}>
          <Text style={styles.toastText}>{toastMessage}</Text>
        </View>
      )}
    </>
  );
};

export default MonitoringHorizontal;

export const MonitoringHorizontalMemo = React.memo(MonitoringHorizontal);

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  borderTopStyle: {
    borderTopWidth: 0.5,
    borderTopColor: Colors.BORDER_TWO,
  },
  viewRow: {
    flexDirection: 'row',
    borderBottomColor: Colors.BORDER_TWO,
    borderBottomWidth: 0.5,
    width: '100%',
    minHeight: MIN_HEIGHT,
    overflow: 'hidden',
  },
  colTitle: {
    flex: 2,
    borderRightColor: Colors.BORDER_TWO,
    borderRightWidth: 0.5,
    paddingVertical: PADDING_VERTICAL,
    paddingHorizontal: 10,
  },
  colValue: {
    flex: 4,
    paddingVertical: PADDING_VERTICAL,
    paddingHorizontal: 10,
  },
  borderRight: {
    borderRightWidth: 0.5,
    borderRightColor: Colors.BORDER_TWO,
  },
  textTitle: {
    fontWeight: 'bold',
  },
  textValue: {
    lineHeight: TEXT_LINE_HEIGHT,
  },
  toast: {
    backgroundColor: 'rgba(0,0,0, .6)',
    position: 'absolute',
    bottom: 50,
    padding: 3,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignSelf: 'center',
  },
  toastText: {color: Colors.WHITE, letterSpacing: 2},
});
