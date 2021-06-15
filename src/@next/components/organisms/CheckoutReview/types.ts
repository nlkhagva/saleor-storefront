import { IAddress, IFormError } from "@types";

export interface IProps {
  is30?: boolean;
  totalPrice?: any;

  shippingAddress?: IAddress | null;
  billingAddress?: IAddress | null;
  shippingMethodName?: string;
  paymentMethodName?: string;
  email?: string;
  errors?: IFormError[];
}
