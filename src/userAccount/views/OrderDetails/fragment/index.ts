import gql from "graphql-tag";

export const orderPriceFragment = gql`
  fragment OrderPrice on TaxedMoney {
    gross {
      amount
      currency
    }
    net {
      amount
      currency
    }
  }
`;
export const checkoutAddressFragment = gql`
  fragment Address on Address {
    id
    firstName
    lastName
    companyName
    streetAddress1
    streetAddress2
    city
    postalCode
    country {
      code
      country
    }
    countryArea
    phone
    isDefaultBillingAddress
    isDefaultShippingAddress
  }
`;

export const checkoutPriceFragment = gql`
  fragment Price on TaxedMoney {
    gross {
      amount
      currency
    }
    net {
      amount
      currency
    }
  }
`;

export const checkoutProductVariantFragment = gql`
  ${checkoutPriceFragment}
  fragment ProductVariant on ProductVariant {
    id
    name
    sku
    quantityAvailable
    isAvailable
    pricing {
      onSale
      priceUndiscounted {
        ...Price
      }
      price {
        ...Price
      }
    }
    attributes {
      attribute {
        id
        name
      }
      values {
        id
        name
        value: name
      }
    }
    product {
      id
      name
      thumbnail {
        url
        alt
      }
      thumbnail2x: thumbnail(size: 510) {
        url
      }
      productType {
        id
        isShippingRequired
      }
      metadata {
        key
        value
      }
      ushop {
        id
        name
        logoImage {
          alt
          url
        }
      }
    }
  }
`;

export const orderLineFragment = gql`
  fragment OrderLineFragment on OrderLine {
    id
    isShippingRequired
    variant {
      product {
        isAvailableForPurchase
        isPublished
      }
      quantityAvailable
    }
    productName
    productSku
    quantity
    quantityFulfilled
    variant {
      ...ProductVariant
    }
    unitPrice {
      gross {
        amount
        currency
      }
      net {
        amount
        currency
      }
    }
    unitPrice {
      currency
      ...OrderPrice
    }
    totalPrice {
      currency
      ...OrderPrice
    }
    thumbnail {
      url
    }
  }
`;

export const orderDetailFragment = gql`
  ${orderPriceFragment}
  ${checkoutAddressFragment}
  ${checkoutProductVariantFragment}
  ${orderLineFragment}
  fragment OrderDetail on Order {
    userEmail
    paymentStatus
    paymentStatusDisplay
    status
    statusDisplay
    id
    token
    totalBalance {
      amount
      currency
    }
    number
    shippingAddress {
      ...Address
    }
    lines {
      id
      productName
      quantity
      quantityFulfilled
      variant {
        ...ProductVariant
      }
      unitPrice {
        currency
        ...OrderPrice
      }
      totalPrice {
        currency
        ...OrderPrice
      }
    }
    fulfillments {
      id
      fulfillmentOrder
      status
      trackingNumber
      ukDate
      lines {
        id
        quantity
        orderLine {
          ...OrderLineFragment
        }
        ustatus
        changedDate
        soonDate
      }
      warehouse {
        id
        name
      }
    }
    subtotal {
      ...OrderPrice
    }
    total {
      ...OrderPrice
    }
    shippingPrice {
      ...OrderPrice
    }
  }
`;

export const invoiceFragment = gql`
  fragment InvoiceFragment on Invoice {
    id
    number
    createdAt
    url
    status
  }
`;
