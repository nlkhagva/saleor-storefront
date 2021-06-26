export interface BaseProduct_thumbnail {
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
export interface BaseProduct_thumbnail2x {
    __typename: "Image";
    /**
     * The URL of the image.
     */
    url: string;
}
export interface BaseProduct_productType {
    __typename: "ProductType";
    /**
     * The ID of the object.
     */
    id: string;
    isShippingRequired: boolean;
}
export interface BaseProduct_metadata {
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
export interface BaseProduct_ushop_logoImage {
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
export interface BaseProduct_ushop {
    __typename: "Ushop";
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
    logoImage: BaseProduct_ushop_logoImage | null;
}
export interface BaseProduct {
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
    thumbnail: BaseProduct_thumbnail | null;
    /**
     * The main thumbnail for a product.
     */
    thumbnail2x: BaseProduct_thumbnail2x | null;
    productType: BaseProduct_productType;
    /**
     * List of public metadata items. Can be accessed without permissions.
     */
    metadata: (BaseProduct_metadata | null)[];
    ushop: BaseProduct_ushop | null;
}
