/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import {FlatList, View, ViewStyle, RefreshControl} from 'react-native';
import NotFound from './NotFound';

export interface IFlatListCommonProps {
  data: any[];
  renderItem(item: any): JSX.Element;
  isShowVertical: boolean;
  isSeparator?: boolean;
  contentContainerStyle?: ViewStyle;
  readonly footer?: React.ReactElement;
  emptyComponent?: React.ReactElement;
  refreshing?: boolean;
  onRefresh?: () => void;
}


const FlatListCommon: React.FC<IFlatListCommonProps> = ({
  data,
  isShowVertical,
  renderItem,
  isSeparator,
  contentContainerStyle,
  footer,
  emptyComponent,
  refreshing,
  onRefresh,
}) => {
  const renderSeparatorComponent = (): JSX.Element => {
    return !isSeparator ? <></> : <View style={{height: 20}} />;
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(_item, index) => `${index}`}
      renderItem={(item) => renderItem(item)}
      showsVerticalScrollIndicator={isShowVertical}
      ItemSeparatorComponent={renderSeparatorComponent}
      contentContainerStyle={contentContainerStyle}
      extraData
      bounces
      ListEmptyComponent={emptyComponent ?? <NotFound />}
      ListFooterComponent={footer}
      refreshControl={
        <RefreshControl
          refreshing={refreshing ?? false}
          onRefresh={onRefresh}
        />
      }
    />
  );
};

export default FlatListCommon;
