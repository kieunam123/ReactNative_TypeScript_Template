/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../configs';
import Icon from './Icon';

const WIDTH = 80;

export interface IProps {
  onPress?: (number: number | undefined) => void;
}

const PassCodeKeyboard = ({onPress}: IProps) => {

  const handleOnPress = (number?: number) => {
    return onPress && onPress(number);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.col}>
          <TouchableOpacity onPress={() => handleOnPress(1)}>
            <View style={styles.circle}>
              <Text style={styles.text}>1</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.col}>
          <TouchableOpacity onPress={() => handleOnPress(2)}>
            <View style={styles.circle}>
              <Text style={styles.text}>2</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.col}>
          <TouchableOpacity onPress={() => handleOnPress(3)}>
            <View style={styles.circle}>
              <Text style={styles.text}>3</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.col}>
          <TouchableOpacity onPress={() => handleOnPress(4)}>
            <View style={styles.circle}>
              <Text style={styles.text}>4</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.col}>
          <TouchableOpacity onPress={() => handleOnPress(5)}>
            <View style={styles.circle}>
              <Text style={styles.text}>5</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.col}>
          <TouchableOpacity onPress={() => handleOnPress(6)}>
            <View style={styles.circle}>
              <Text style={styles.text}>6</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.col}>
          <TouchableOpacity onPress={() => handleOnPress(7)}>
            <View style={styles.circle}>
              <Text style={styles.text}>7</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.col}>
          <TouchableOpacity onPress={() => handleOnPress(8)}>
            <View style={styles.circle}>
              <Text style={styles.text}>8</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.col}>
          <TouchableOpacity onPress={() => handleOnPress(9)}>
            <View style={styles.circle}>
              <Text style={styles.text}>9</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.col} />
        <View style={styles.col}>
          <TouchableOpacity onPress={() => handleOnPress(0)}>
            <View style={styles.circle}>
              <Text style={styles.text}>0</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.col}>
          <TouchableOpacity onPress={() => handleOnPress(undefined)}>
            <View style={styles.circle}>
              <Icon name="delete" type="Feather" style={styles.text} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PassCodeKeyboard;
const styles = StyleSheet.create({
  container: {width: '100%'},
  row: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  col: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: WIDTH,
    height: WIDTH,
    borderRadius: WIDTH,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },
  text: {
    color: Colors.GRAY,
    fontSize: 25,
  },
});
