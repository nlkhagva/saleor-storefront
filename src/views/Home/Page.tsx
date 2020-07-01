import './scss/index.scss';

import classNames from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { Loader, UshopFeatured } from '../../components';
import { structuredData } from '../../core/SEO/Homepage/structuredData';
import { generateCategoryUrl } from '../../core/utils';
import noPhotoImg from '../../images/no-photo.svg';
import ushopBackgroundImage from '../../images/unurshop/xd/homepage-cover.png';
import {
  ProductsList_categories, ProductsList_shop, ProductsList_shop_homepageCollection_backgroundImage
} from './gqlTypes/ProductsList';

const Page: React.FC<{
  loading: boolean;
  categories: ProductsList_categories;
  backgroundImage: ProductsList_shop_homepageCollection_backgroundImage;
  shop: ProductsList_shop;
}> = ({ loading, categories, backgroundImage, shop }) => {
  const categoriesExist = () => {
    return categories && categories.edges && categories.edges.length > 0;
  };

  return (
    <>
      <script className="structured-data-list" type="application/ld+json">
        {structuredData(shop)}
      </script>
      <div
        className="home-page__hero"
        style={
          backgroundImage
            ? { backgroundImage: `url(${ushopBackgroundImage})` }
            : null
        }
      >

        <div className="home-page__hero-action" style={{ marginTop: 350 }}>
          {loading && !categories ? (
            <Loader />
          ) : (
              categoriesExist() && (
                <Link

                  to={generateCategoryUrl(
                    categories.edges[0].node.id,
                    categories.edges[0].node.name
                  )}
                >
                  {/* <Button>Shop sale</Button> */}
                </Link>
              )
            )}
        </div>
      </div>
      {/* <ProductsFeatured /> */}
      {<UshopFeatured />}
      {categoriesExist() && (
        <div className="home-page__categories">
          <div className="container">
            <h4 className="t-c">Зуны шинэ загварууд</h4>
            <h3 className="t-c m-b3">Онцлох бараа</h3>
            <div className="home-page__categories__list">
              {categories.edges.map(({ node: category }) => (
                <div key={category.id}>
                  <Link
                    to={generateCategoryUrl(category.id, category.name)}
                    key={category.id}
                  >
                    <div
                      className={classNames(
                        "home-page__categories__list__image",
                        {
                          "home-page__categories__list__image--no-photo": !category.backgroundImage,
                        }
                      )}
                      style={{
                        backgroundImage: `url(${
                          category.backgroundImage
                            ? category.backgroundImage.url
                            : noPhotoImg
                          })`,
                      }}
                    />
                    <h3>{category.name}</h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
