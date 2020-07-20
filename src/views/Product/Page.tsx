import classNames from 'classnames';
import * as React from 'react';
import Media from 'react-media';

import { CachedImage, Thumbnail } from '@components/molecules';
import { ICheckoutModelLine } from '@sdk/repository';

import { ProductDescription as NewProductDescription } from '../../@next/components/molecules';
import { ProductGallery } from '../../@next/components/organisms/';
import { Breadcrumbs, ProductDescription } from '../../components';
import { structuredData } from '../../core/SEO/Product/structuredData';
import { generateCategoryUrl, generateProductUrl } from '../../core/utils';
import { smallScreen } from '../../globalStyles/scss/variables.scss';
import UshopLogo from '../../images/unurshop/logo-v3.png';
// import ZaraLogo from '../../images/unurshop/xd/zara.jpg';
import GalleryCarousel from './GalleryCarousel';
import { ProductDetails_product } from './gqlTypes/ProductDetails';
import OtherProducts from './Other';

class Page extends React.PureComponent<
  {
    product: ProductDetails_product;
    add: (variantId: string, quantity: number) => any;
    items: ICheckoutModelLine[];
  },
  { variantId: string }
  > {
  fixedElement: React.RefObject<HTMLDivElement> = React.createRef();
  productGallery: React.RefObject<HTMLDivElement> = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      variantId: "",
    };
  }

  setVariantId = (id: string) => {
    this.setState({ variantId: id });
  };

  get showCarousel() {
    return this.props.product.images.length > 1;
  }

  populateBreadcrumbs = product => [
    {
      link: generateCategoryUrl(product.category.id, product.category.name),
      value: product.category.name,
    },
    {
      link: generateProductUrl(product.id, product.name),
      value: product.name,
    },
  ];

  getImages = () => {
    const { product } = this.props;
    if (product.variants && this.state.variantId) {
      const variant = product.variants
        .filter(variant => variant.id === this.state.variantId)
        .pop();
      if (variant.images.length > 0) {
        return variant.images;
      } else {
        return product.images;
      }
    } else {
      return product.images;
    }
  };

  renderImages = product => {
    const images = this.getImages();
    if (images && images.length) {
      return images.map(image => (
        <a href={image.url} target="_blank">
          <CachedImage url={image.url} key={image.id}>
            <Thumbnail source={product} />
          </CachedImage>
        </a>
      ));
    }
    return <CachedImage />;
  };

  render() {
    const { product } = this.props;

    const productDescription = (
      <ProductDescription
        items={this.props.items}
        productId={product.id}
        name={product.name}
        productVariants={product.variants}
        pricing={product.pricing}
        addToCart={this.props.add}
        setVariantId={this.setVariantId}
      />
    );
    return (
      <div className="product-page">
        <div className="container">
          <Breadcrumbs breadcrumbs={this.populateBreadcrumbs(product)} />
        </div>
        <div className="container">
          <div className="product-page__product" style={{ position: 'relative' }}>
            {/* Add script here */}
            <script className="structured-data-list" type="application/ld+json">
              {structuredData(product)}
            </script>

            {/*  */}
            <Media query={{ maxWidth: smallScreen }}>
              {matches =>
                matches ? (
                  <>
                    <img src={UshopLogo} alt="Zara" style={{ position: "absolute", top: '1rem', left: '1rem', height: '60px', width: '60px', zIndex: 2, borderRadius: '100%', boxShadow: '1px 1px 5px rgba(0,0,0,.3)' }} />

                    <GalleryCarousel images={this.getImages()} />
                    <div className="product-page__product__info">
                      {productDescription}
                    </div>
                  </>
                ) : (
                    <>
                      <div
                        className="product-page__product__gallery"
                        ref={this.productGallery}
                      >
                        <ProductGallery images={this.getImages()} />
                      </div>
                      <div className="product-page__product__info">
                        <div
                          className={classNames(
                            "product-page__product__info--fixed"
                          )}
                        >
                          {productDescription}
                        </div>
                      </div>
                    </>
                  )
              }
            </Media>
          </div>
        </div>
        <div className="container">
          <div className="product-page__product__description">
            <NewProductDescription
              descriptionJson={product.descriptionJson}
              attributes={product.attributes}
            />
          </div>
        </div>
        <OtherProducts products={product.category.products.edges} />
      </div>
    );
  }
}

export default Page;
