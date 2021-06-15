import classNames from "classnames";
import React from "react";
import Media from "react-media";
import { ProductDescription } from "@components/molecules";
import { ProductGallery } from "@components/organisms";
import AddToCartSection from "@components/organisms/AddToCartSection";

import { smallScreen } from "../../globalStyles/scss/variables.scss";

import {
  Breadcrumbs,
  OverlayContext,
  OverlayTheme,
  OverlayType,
} from "../../components";
import { generateCategoryUrl, generateProductUrl } from "../../core/utils";
// import UshopLogo from "../../images/unurshop/logo-v3.png";
import GalleryCarousel from "./GalleryCarousel";
import OtherProducts from "./Other";

import { structuredData } from "../../core/SEO/Product/structuredData";
import { IProps } from "./types";
import {
  getWasPrice,
  getSalePercent,
  getLinkImages,
  getProductLink,
} from "./utils";

const populateBreadcrumbs = product => [
  {
    link: generateCategoryUrl(product.category.id, product.category.name),
    value: product.category.name,
  },
  {
    link: generateProductUrl(product.id, product.name),
    value: product.name,
  },
];

const Page: React.FC<
  IProps & {
    queryAttributes: Record<string, string>;
    onAttributeChangeHandler: (slug: string | null, value: string) => void;
  }
> = ({ add, product, items, queryAttributes, onAttributeChangeHandler }) => {
  const overlayContext = React.useContext(OverlayContext);

  const productGallery: React.RefObject<HTMLDivElement> = React.useRef();

  const [variantId, setVariantId] = React.useState("");

  const crawlerImages = () => {
    const images = getLinkImages(product);

    return images.map((image, index) => ({
      id: index,
      url: image,
      alt: product.name,
    }));
  };
  const wasPrice = getWasPrice(product);

  const getImages = () => {
    if (product.variants && variantId) {
      const variant = product.variants
        .filter(variant => variant.id === variantId)
        .pop();
      if (variant.images.length > 0) {
        return variant.images;
      }
      return product.images;
    }
    return product.images.length ? product.images : crawlerImages();
  };

  const handleAddToCart = (variantId, quantity) => {
    add(variantId, quantity);
    overlayContext.show(OverlayType.cart, OverlayTheme.right);
  };

  const addToCartSection = (
    <AddToCartSection
      items={items}
      product={product}
      productId={product.id}
      name={product.name}
      productVariants={product.variants}
      productPricing={product.pricing}
      queryAttributes={queryAttributes}
      setVariantId={setVariantId}
      onAddToCart={handleAddToCart}
      onAttributeChangeHandler={onAttributeChangeHandler}
      isAvailableForPurchase={product.isAvailableForPurchase}
      availableForPurchase={product.availableForPurchase}
    />
  );

  return (
    <div className="product-page">
      <div className="container">
        <Breadcrumbs breadcrumbs={populateBreadcrumbs(product)} />
      </div>
      <div className="container">
        <div className="product-page__product">
          <script className="structured-data-list" type="application/ld+json">
            {structuredData(product)}
          </script>
          <Media query={{ maxWidth: smallScreen }}>
            {matches =>
              matches ? (
                <>
                  {/* <img
                    src={product.ushop.logoImage.url}
                    alt={product.ushop.name}
                    style={{
                      position: "absolute",
                      top: "1rem",
                      left: "1rem",
                      height: "60px",
                      width: "60px",
                      zIndex: 2,
                      borderRadius: "100%",
                      boxShadow: "1px 1px 5px rgba(0,0,0,.3)",
                    }}
                  /> */}
                  {product && wasPrice && (
                    <div className="product-page__product__sale-mobile">
                      -
                      {getSalePercent(
                        wasPrice,
                        product.pricing.priceRange?.start?.gross.amount
                      )}
                    </div>
                  )}

                  <GalleryCarousel images={getImages()} />
                  <div className="product-page__product__info">
                    {addToCartSection}
                    <div className="product-page__product__description">
                      <ProductDescription
                        ushop={product.ushop}
                        productLink={getProductLink(product)}
                        descriptionJson={product.descriptionJson}
                        attributes={product.attributes}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* <img
                    src={product.ushop.logoImage.url}
                    alt={product.ushop.name}
                    style={{
                      position: "absolute",
                      top: "1rem",
                      left: "8rem",
                      height: "60px",
                      width: "60px",
                      zIndex: 2,
                      borderRadius: "100%",
                      boxShadow: "1px 1px 5px rgba(0,0,0,.3)",
                    }}
                  /> */}
                  {product && wasPrice && (
                    <div className="product-page__product__sale">
                      {getSalePercent(
                        wasPrice,
                        product.pricing.priceRange?.start?.gross.amount
                      )}
                    </div>
                  )}

                  <div
                    className="product-page__product__gallery"
                    ref={productGallery}
                  >
                    <ProductGallery images={getImages()} />
                  </div>
                  <div className="product-page__product__info">
                    <div
                      className={classNames(
                        "product-page__product__info--fixed"
                      )}
                    >
                      {addToCartSection}
                      <div className="product-page__product__description">
                        <ProductDescription
                          ushop={product.ushop}
                          productLink={getProductLink(product)}
                          descriptionJson={product.descriptionJson}
                          attributes={product.attributes}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )
            }
          </Media>
        </div>
      </div>
      <OtherProducts products={product.category.products.edges} />
    </div>
  );
};

export default Page;
