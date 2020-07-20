import gql from 'graphql-tag';

import { checkoutPriceFragment } from './checkout';

export const basicProductFragment = gql`
  fragment BasicProductFields on Product {
    id
    name
    thumbnail {
      url
      alt
    }
    thumbnail2x: thumbnail(size: 510) {
      url
    }
  }
`;

export const selectedAttributeFragment = gql`
  fragment SelectedAttributeFields on SelectedAttribute {
    attribute {
      id
      name
    }
    values {
      id
      name
    }
  }
`;

export const productVariantFragment = gql`
  ${checkoutPriceFragment}
  fragment ProductVariantFields on ProductVariant {
    id
    sku
    name
    quantityAvailable(countryCode: $countryCode)
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
  }
`;

export const productSimple = gql`
fragment ProductErrorFragment on ProductError {
  code
  field
  __typename
}

fragment ProductImageFragment on ProductImage {
  id
  alt
  sortOrder
  url
  __typename
}

fragment Money on Money {
  amount
  currency
  __typename
}

fragment ProductVariantAttributesFragment on Product {
  id
  attributes {
    attribute {
      id
      slug
      name
      inputType
      valueRequired
      values {
        id
        name
        slug
        __typename
      }
      __typename
    }
    values {
      id
      name
      slug
      __typename
    }
    __typename
  }
  productType {
    id
    variantAttributes {
      id
      name
      values {
        id
        name
        slug
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}

fragment StockFragment on Stock {
  id
  quantity
  quantityAllocated
  warehouse {
    id
    name
    __typename
  }
  __typename
}

fragment Product on Product {
  ...ProductVariantAttributesFragment
  name
  descriptionJson
  seoTitle
  seoDescription
  category {
    id
    name
    __typename
  }
  collections {
    id
    name
    __typename
  }
  basePrice {
    ...Money
    __typename
  }
  margin {
    start
    stop
    __typename
  }
  purchaseCost {
    start {
      ...Money
      __typename
    }
    stop {
      ...Money
      __typename
    }
    __typename
  }
  isAvailable
  isPublished
  chargeTaxes
  publicationDate
  pricing {
    priceRange {
      start {
        net {
          ...Money
          __typename
        }
        __typename
      }
      stop {
        net {
          ...Money
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  images {
    ...ProductImageFragment
    __typename
  }
  variants {
    id
    sku
    name
    priceOverride {
      ...Money
      __typename
    }
    margin
    stocks {
      ...StockFragment
      __typename
    }
    trackInventory
    __typename
  }
  productType {
    id
    name
    hasVariants
    __typename
  }
  __typename
}
`;