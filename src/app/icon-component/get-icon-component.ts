import ChildcareIcon from '../assets/icons/child-care';
import DollarIcon from '../assets/icons/dollar-icon';
import GovernmentIcon from '../assets/icons/government-icon';
import AutoLeasePaymentIcon from '../assets/icons/lease';
import AutoLoanRepayment from '../assets/icons/loan';
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
    case Icons.BuyNowPayLater:
    case Icons.DepartmentAndDiscountStores:
    case Icons.Investment:
    case Icons.OtherConsumerServices:
    case Icons.OtherNonEssential:
    case Icons.RecreationalGoods:
    case Icons.GrantsAndStipends:
    case Icons.Loans:
    case Icons.Other:
    case Icons.Prenote:
      return DollarIcon;
    case Icons.Government:
      return GovernmentIcon;

    default:
      return null;
  }
};

export default getIconComponent;
