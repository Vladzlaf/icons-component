import React from 'react';
import {View} from 'react-native';
import {Icons} from '../enums/icons';
import CategoryConponent from './category-conponent';

const IconsComponent: React.FC = () => {
  return (
    <View>
      <CategoryConponent icon={Icons.AutoLeasePayment} />
      <CategoryConponent icon={Icons.AutoLoanRepayment} />
      <CategoryConponent icon={Icons.Childcare} />
      <CategoryConponent icon={Icons.SelfCare} />
      <CategoryConponent icon={Icons.RentToOwn} />
      <CategoryConponent icon={Icons.SaasTools} />
      <CategoryConponent icon={Icons.Government} />
    </View>
  );
};

export default IconsComponent;
