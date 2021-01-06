import { defineMessages, IntlShape } from "react-intl";

export const commonMessages = defineMessages({
  search: {
    defaultMessage: "Хайлт",
  },
  outOfStock: {
    defaultMessage: "Дууссан",
  },
  lowStock: {
    defaultMessage: "Цөөн үлдсэн",
  },
  noItemsAvailable: {
    defaultMessage: "No items available",
  },
  noPurchaseAvailable: {
    defaultMessage: "Not available for purchase",
  },
  purchaseAvailableOn: {
    defaultMessage: `Will become available for purchase on {date} at {time}`,
  },
  youMightLike: {
    defaultMessage: "You might like",
  },
  choosePaymentMethod: {
    defaultMessage: "Төлбөрийн нөхцөлөө сонгоно уу",
  },
  provideEmailAddress: {
    defaultMessage: "И-мэйл хаягаа оруулна уу",
  },
  account: {
    defaultMessage: "Account",
  },
  myAccount: {
    defaultMessage: "My Account",
  },
  orderHistory: {
    defaultMessage: "Захиалгын түүх",
  },
  addressBook: {
    defaultMessage: "Хаягууд",
  },
  logOut: {
    defaultMessage: "Гарах",
  },
  firstName: {
    defaultMessage: "Нэр",
  },
  lastName: {
    defaultMessage: "Овог",
  },
  password: {
    defaultMessage: "Нууц үг",
  },
  quantity: {
    defaultMessage: "Тоо",
  },
  sku: {
    defaultMessage: "SKU",
  },
  maxQtyIs: {
    defaultMessage: "Хамгийн дээд хэмжээ нь {maxQuantity}",
  },
  qty: {
    defaultMessage: "Тоо",
  },
  subtotal: {
    defaultMessage: "Subtotal",
  },
  shipping: {
    defaultMessage: "Тээвэр",
  },
  promoCode: {
    defaultMessage: "Promo code",
  },
  total: {
    defaultMessage: "Нийт",
  },
  totalPrice: {
    defaultMessage: "Нийт үнэ",
  },
  checkout: {
    defaultMessage: "Худалдан авах",
  },
  eMail: {
    defaultMessage: "И-мэйл хаяг",
  },
  shortEmail: {
    defaultMessage: "И-мэйл",
  },
  loading: {
    defaultMessage: "Loading",
  },
  products: {
    defaultMessage: "Бараанууд",
  },
  price: {
    defaultMessage: "Үнэ",
  },
  variant: {
    defaultMessage: "Сонголт",
  },
  phone: {
    defaultMessage: "Утас",
  },
  phoneNumber: {
    defaultMessage: "Утасны дугаар: {phone}",
  },
  showEmail: {
    defaultMessage: "И-мэйл: {email}",
  },
  save: {
    defaultMessage: "Хадгалах",
  },
  add: {
    defaultMessage: "Нэмэх",
  },
  filterHeader: {
    defaultMessage: "ШҮҮХ",
  },
  clearFilterHeader: {
    defaultMessage: "ШҮҮЛТ ЦЭВЭРЛЭХ",
  },
  status: {
    defaultMessage: "Төлөв",
  },
  cancel: {
    defaultMessage: "Cancel",
  },
  home: {
    defaultMessage: "Home",
  },
});

export const checkoutMessages = defineMessages({
  stepNameAddress: {
    defaultMessage: "Address",
  },
  stepNameShipping: {
    defaultMessage: "Shipping",
  },
  stepNamePayment: {
    defaultMessage: "Payment",
  },
  stepNameReview: {
    defaultMessage: "Review",
  },
  addressNextActionName: {
    defaultMessage: "Үргэлжлүүлэх",
  },
  shippingNextActionName: {
    defaultMessage: "Continue to Payment",
  },
  paymentNextActionName: {
    defaultMessage: "Үргэлжлүүлэх",
  },
  reviewNextActionName: {
    defaultMessage: "Захиалга өгөх",
  },
  addNewAddress: {
    defaultMessage: "Add new address",
  },
  shippingMethod: {
    defaultMessage: "SHIPPING METHOD",
  },
  billingAddress: {
    defaultMessage: "Тооцооны хаяг",
  },
  paymentMethod: {
    defaultMessage: "Төлбөрийн нөхцөл",
  },
  reviewOrder: {
    defaultMessage: "Захиалга хянах",
  },
  shippingAddress: {
    defaultMessage: "Хүлээн авах хаяг",
  },
  continueShopping: {
    defaultMessage: "Нүүр хуудас",
  },
});

export const prodListHeaderCommonMsg = defineMessages({
  sortOptionsClear: {
    defaultMessage: "Clear...",
  },
  sortOptionsPrice: {
    defaultMessage: "Price Low-High",
  },
  sortOptionsPriceDsc: {
    defaultMessage: "Price High-Low",
  },
  sortOptionsName: {
    defaultMessage: "Name Increasing",
  },
  sortOptionsNameDsc: {
    defaultMessage: "Name Decreasing",
  },
  sortOptionsUpdatedAt: {
    defaultMessage: "Last updated Ascending",
  },
  sortOptionsUpdatedAtDsc: {
    defaultMessage: "Last updated Descending",
  },
});

export const paymentStatusMessages = defineMessages({
  notCharged: {
    defaultMessage: "Төлөөгүй",
  },
  partiallyCharged: {
    defaultMessage: "Төлбөрийн үлдэлдэлтэй",
  },
  fullyCharged: {
    defaultMessage: "Бүрэн төлсөн",
  },
  partiallyRefunded: {
    defaultMessage: "Хэсэгчлэн буцаалттай",
  },
  fullyRefunded: {
    defaultMessage: "Бүгдийн буцаасан",
  },
});

export const orderStatusMessages = defineMessages({
  draft: {
    defaultMessage: "Draft",
  },
  unfulfilled: {
    defaultMessage: "Биелээгүй",
  },
  partiallyFulfilled: {
    defaultMessage: "Хэсэгчлэн биелсэн",
  },
  fulfilled: {
    defaultMessage: "Биелсэн",
  },
  canceled: {
    defaultMessage: "Цуцалсан",
  },
});

export function translatePaymentStatus(
  status: string,
  intl: IntlShape
): string {
  switch (status) {
    case "Not charged":
      return intl.formatMessage(paymentStatusMessages.notCharged);
    case "Partially charged":
      return intl.formatMessage(paymentStatusMessages.partiallyCharged);
    case "Fully charged":
      return intl.formatMessage(paymentStatusMessages.fullyCharged);
    case "Partially refunded":
      return intl.formatMessage(paymentStatusMessages.partiallyRefunded);
    case "Fully refunded":
      return intl.formatMessage(paymentStatusMessages.fullyRefunded);
    default:
      return status;
  }
}

export function translateOrderStatus(status: string, intl: IntlShape): string {
  switch (status) {
    case "Draft":
      return intl.formatMessage(orderStatusMessages.draft);
    case "Unfulfilled":
      return intl.formatMessage(orderStatusMessages.unfulfilled);
    case "Partially fulfilled":
      return intl.formatMessage(orderStatusMessages.partiallyFulfilled);
    case "Fulfilled":
      return intl.formatMessage(orderStatusMessages.fulfilled);
    case "Canceled":
      return intl.formatMessage(orderStatusMessages.canceled);
    default:
      return status;
  }
}
