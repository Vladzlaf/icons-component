import React, {Suspense} from 'react';
import {Icons} from '../enums/icons';
import AutoLeasePaymentIcon from '../assets/icons/lease';
import AutoLoanRepayment from '../assets/icons/loan';
import ChildcareIcon from '../assets/icons/child-care';
import {View} from 'react-native';
import SelfCare from '../assets/icons/self-care';

const IconSwitcher: React.FC<{icon: Icons}> = ({icon}) => {
  const getIconComponent = (icon: Icons) => {
    switch (icon) {
      case Icons.autoLeasePayment:
        return AutoLeasePaymentIcon;
      case Icons.autoLoanRepayment:
        return AutoLoanRepayment;
      case Icons.childcare:
        return ChildcareIcon;
      case Icons.selfCare:
      case Icons.saasTools:
      case Icons.rentToOwn:
        return SelfCare;
      default:
        return null;
    }
  };

  const IconComponent = getIconComponent(icon);

  return (
    <View>
      {IconComponent ? (
        <Suspense fallback={<View>Loading...</View>}>
          <IconComponent />
        </Suspense>
      ) : (
        <View>Icon not found</View>
      )}
    </View>
  );
};

export default IconSwitcher;
