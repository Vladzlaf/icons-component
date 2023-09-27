import React from 'react';
import IconSwitcher from './icons-swither';
import {View} from 'react-native';
import {Icons} from '../enums/icons';

const IconComponent: React.FC = () => {
  return (
    <View>
      <IconSwitcher icon={Icons.autoLeasePayment} />
      <IconSwitcher icon={Icons.autoLoanRepayment} />
      <IconSwitcher icon={Icons.childcare} />
      <IconSwitcher icon={Icons.selfCare} />
      <IconSwitcher icon={Icons.rentToOwn} />
      <IconSwitcher icon={Icons.saasTools} />
    </View>
  );
};

export default IconComponent;
