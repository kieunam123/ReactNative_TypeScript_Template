/* eslint-disable @typescript-eslint/no-use-before-define */
import React, {ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';

const WIDTH = 15;

export interface ICircleProps {
  value: number;
  passCodeValue?: string;
}

const Circle = ({value, passCodeValue}: ICircleProps) => {
  return (
    <View
      style={[
        styles.circle,
        passCodeValue && passCodeValue.length >= value
          ? styles.active
          : undefined,
      ]}
    />
  );
};

export interface IProps {
  value?: string;
  length: number;
}

const PassCode = ({value, length}: IProps) => {
  const renderCircle = () => {
    const arr = [] as ReactNode[];
    for (let i = 1; i <= length; i += 1) {
      arr.push(
        <Circle value={i} passCodeValue={value} key={`passCode-${i}`} />,
      );
    }
    return arr;
  };
  return <View style={styles.container}>{renderCircle()}</View>;
};

PassCode.defaultProps = {
  length: 6,
};

export default PassCode;
const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  circle: {
    width: WIDTH,
    height: WIDTH,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    marginHorizontal: 5,
    borderRadius: WIDTH,
  },
  active: {
    backgroundColor: 'rgba(0,0,0, 0.6)',
  },
});
