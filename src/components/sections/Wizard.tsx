import React from 'react';
import {View} from 'react-native';
import styles from './section.styles';
import Icon, {IIconProps} from '../commons/Icon';
import {Colors, Sizes} from '../../configs';

export interface WizardProps {
  currentStep: number;
  icons: IIconProps[];
  size?: 'M' | 'L' | 'S';
  onPress?: ()=> void;
}

const Wizard: React.FC<WizardProps> = ({icons, currentStep, size}) => {
  const iconsLength: number = icons.length;
  const arr = new Array(iconsLength * 2 - 1);

  let width = 40;

  switch (size) {
    case 'L': {
      width = 50;
      break;
    }
    case 'M': {
      width = 40;
      break;
    }
    case 'S': {
      width = 30;
      break;
    }
    default:
      break;
  }

  const circleStyle = {width, height: width, borderRadius: width};
  const iconSize = width + 5 - Sizes.Icon;

  icons.forEach((icon, index) => {
    const colorActive =
      index <= currentStep ? Colors.ORIGIN : Colors.GRAY_LIGHT;
    arr.push(
      <View
        key={`icon-${icon.name}-${index + 1}`}
        style={[styles.wizardCircle, {borderColor: colorActive}, circleStyle]}>
        <Icon
          name={icon.name}
          type={icon.type}
          color={colorActive}
          size={iconSize}
          onIconPress = {icon.onIconPress}
        />
      </View>,
    );
    // Render line
    if (index < iconsLength - 1) {
      const borderActiveStyle =
        currentStep > index
          ? {backgroundColor: colorActive, borderColor: colorActive}
          : null;
      arr.push(
        <View
          style={[styles.wizardLine, borderActiveStyle]}
          key={`icon-${icon.name}-line-${index + 1}`}
        />,
      );
    }
  });

  return <View style={styles.wizardContainer}>{arr}</View>;
};

Wizard.defaultProps = {
  icons: [],
  currentStep: 0,
  size: 'M',
};

export default Wizard;
