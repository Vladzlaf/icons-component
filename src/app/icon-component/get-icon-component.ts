import ChildcareIcon from '../assets/icons/child-care';
import AutoLeasePaymentIcon from '../assets/icons/lease';
import AutoLoanRepayment from '../assets/icons/loan';
import SelfCare from '../assets/icons/self-care';
import {Icons} from '../enums/icons';

const getIconComponent = (icon: Icons) => {
  switch (icon) {
    case Icons.AutoLeasePayment:
      return AutoLeasePaymentIcon;
    case Icons.AutoLoanRepayment:
      return AutoLoanRepayment;
    case Icons.Childcare:
      return ChildcareIcon;
    case Icons.SelfCare:
    case Icons.SaasTools:
    case Icons.RentToOwn:
      return SelfCare;
    default:
      return null;
  }
};

export default getIconComponent;