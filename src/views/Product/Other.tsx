import * as React from 'react';

import { ProductList } from '@components/organisms';

import { ProductDetails_product_category_products_edges } from './gqlTypes/ProductDetails';

const OtherProducts: React.FC<{
  products: ProductDetails_product_category_products_edges[];
}> = ({ products }) => (
  <div className="product-page__other-products">
    <div className="container">
      <div className="ushop-title">
        <h4>Танд санал болгох</h4>
        <h3>Ижил төстэй бараанууд</h3>
      </div>

      <ProductList products={products.map(({ node }) => node)} />
    </div>
  </div >
);

export default OtherProducts;
