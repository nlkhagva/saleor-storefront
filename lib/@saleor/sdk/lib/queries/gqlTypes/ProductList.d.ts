import { ProductOrder, ProductFilterInput } from "./../../gqlTypes/globalTypes";
export interface ProductList_products_edges_node_thumbnail {
    __typename: "Image";
    /**
     * The URL of the image.
     */
    url: string;
    /**
     * Alt text for an image.
     */
    alt: string | null;
}
export interface ProductList_products_edges_node_thumbnail2x {
    __typename: "Image";
    /**
     * The URL of the image.
     */
    url: string;
}
export interface ProductList_products_edges_node_productType {
    __typename: "ProductType";
    /**
     * The ID of the object.
     */
    id: string;
    isShippingRequired: boolean;
}
export interface ProductList_products_edges_node_metadata {
    __typename: "MetadataItem";
    /**
     * Key of a metadata item.
     */
    key: string;
    /**
     * Value of a metadata item.
     */
    value: string;
}
export interface ProductList_products_edges_node_ushop_logoImage {
    __typename: "Image";
    /**
     * The URL of the image.
     */
    url: string;
    /**
     * Alt text for an image.
     */
    alt: string | null;
}
export interface ProductList_products_edges_node_ushop {
    __typename: "Ushop";
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
    logoImage: ProductList_products_edges_node_ushop_logoImage | null;
}
export interface ProductList_products_edges_node_pricing_priceRangeUndiscounted_start_gross {
    __typename: "Money";
    /**
     * Amount of money.
     */
    amount: number;
    /**
     * Currency code.
     */
    currency: string;
}
export interface ProductList_products_edges_node_pricing_priceRangeUndiscounted_start_net {
    __typename: "Money";
    /**
     * Amount of money.
     */
    amount: number;
    /**
     * Currency code.
     */
    currency: string;
}
export interface ProductList_products_edges_node_pricing_priceRangeUndiscounted_start {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: ProductList_products_edges_node_pricing_priceRangeUndiscounted_start_gross;
    /**
     * Amount of money without taxes.
     */
    net: ProductList_products_edges_node_pricing_priceRangeUndiscounted_start_net;
}
export interface ProductList_products_edges_node_pricing_priceRangeUndiscounted_stop_gross {
    __typename: "Money";
    /**
     * Amount of money.
     */
    amount: number;
    /**
     * Currency code.
     */
    currency: string;
}
export interface ProductList_products_edges_node_pricing_priceRangeUndiscounted_stop_net {
    __typename: "Money";
    /**
     * Amount of money.
     */
    amount: number;
    /**
     * Currency code.
     */
    currency: string;
}
export interface ProductList_products_edges_node_pricing_priceRangeUndiscounted_stop {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: ProductList_products_edges_node_pricing_priceRangeUndiscounted_stop_gross;
    /**
     * Amount of money without taxes.
     */
    net: ProductList_products_edges_node_pricing_priceRangeUndiscounted_stop_net;
}
export interface ProductList_products_edges_node_pricing_priceRangeUndiscounted {
    __typename: "TaxedMoneyRange";
    /**
     * Lower bound of a price range.
     */
    start: ProductList_products_edges_node_pricing_priceRangeUndiscounted_start | null;
    /**
     * Upper bound of a price range.
     */
    stop: ProductList_products_edges_node_pricing_priceRangeUndiscounted_stop | null;
}
export interface ProductList_products_edges_node_pricing_priceRange_start_gross {
    __typename: "Money";
    /**
     * Amount of money.
     */
    amount: number;
    /**
     * Currency code.
     */
    currency: string;
}
export interface ProductList_products_edges_node_pricing_priceRange_start_net {
    __typename: "Money";
    /**
     * Amount of money.
     */
    amount: number;
    /**
     * Currency code.
     */
    currency: string;
}
export interface ProductList_products_edges_node_pricing_priceRange_start {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: ProductList_products_edges_node_pricing_priceRange_start_gross;
    /**
     * Amount of money without taxes.
     */
    net: ProductList_products_edges_node_pricing_priceRange_start_net;
}
export interface ProductList_products_edges_node_pricing_priceRange_stop_gross {
    __typename: "Money";
    /**
     * Amount of money.
     */
    amount: number;
    /**
     * Currency code.
     */
    currency: string;
}
export interface ProductList_products_edges_node_pricing_priceRange_stop_net {
    __typename: "Money";
    /**
     * Amount of money.
     */
    amount: number;
    /**
     * Currency code.
     */
    currency: string;
}
export interface ProductList_products_edges_node_pricing_priceRange_stop {
    __typename: "TaxedMoney";
    /**
     * Amount of money including taxes.
     */
    gross: ProductList_products_edges_node_pricing_priceRange_stop_gross;
    /**
     * Amount of money without taxes.
     */
    net: ProductList_products_edges_node_pricing_priceRange_stop_net;
}
export interface ProductList_products_edges_node_pricing_priceRange {
    __typename: "TaxedMoneyRange";
    /**
     * Lower bound of a price range.
     */
    start: ProductList_products_edges_node_pricing_priceRange_start | null;
    /**
     * Upper bound of a price range.
     */
    stop: ProductList_products_edges_node_pricing_priceRange_stop | null;
}
export interface ProductList_products_edges_node_pricing {
    __typename: "ProductPricingInfo";
    /**
     * Whether it is in sale or not.
     */
    onSale: boolean | null;
    /**
     * The undiscounted price range of the product variants.
     */
    priceRangeUndiscounted: ProductList_products_edges_node_pricing_priceRangeUndiscounted | null;
    /**
     * The discounted price range of the product variants.
     */
    priceRange: ProductList_products_edges_node_pricing_priceRange | null;
}
export interface ProductList_products_edges_node {
    __typename: "Product";
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
    slug: string;
    seoDescription: string | null;
    seoTitle: string | null;
    /**
     * The main thumbnail for a product.
     */
    thumbnail: ProductList_products_edges_node_thumbnail | null;
    /**
     * The main thumbnail for a product.
     */
    thumbnail2x: ProductList_products_edges_node_thumbnail2x | null;
    productType: ProductList_products_edges_node_productType;
    /**
     * List of public metadata items. Can be accessed without permissions.
     */
    metadata: (ProductList_products_edges_node_metadata | null)[];
    ushop: ProductList_products_edges_node_ushop | null;
    /**
     * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
     */
    pricing: ProductList_products_edges_node_pricing | null;
}
export interface ProductList_products_edges {
    __typename: "ProductCountableEdge";
    /**
     * The item at the end of the edge.
     */
    node: ProductList_products_edges_node;
}
export interface ProductList_products_pageInfo {
    __typename: "PageInfo";
    /**
     * When paginating forwards, the cursor to continue.
     */
    endCursor: string | null;
    /**
     * When paginating forwards, are there more items?
     */
    hasNextPage: boolean;
}
export interface ProductList_products {
    __typename: "ProductCountableConnection";
    edges: ProductList_products_edges[];
    /**
     * Pagination data for this connection.
     */
    pageInfo: ProductList_products_pageInfo;
}
export interface ProductList {
    /**
     * List of the shop's products.
     */
    products: ProductList_products | null;
}
export interface ProductListVariables {
    after?: string | null;
    first: number;
    sortBy?: ProductOrder | null;
    filter?: ProductFilterInput | null;
}
