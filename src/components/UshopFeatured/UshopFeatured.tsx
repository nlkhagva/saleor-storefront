// import { TypedFeaturedProductsQuery } from "./queries";
import './scss/index.scss';

import * as React from 'react';
import Media from 'react-media';
import { Link } from 'react-router-dom';

import { Carousel } from '../';
import * as appPaths from '../../app/routes';
import { mediumScreen, smallScreen } from '../../globalStyles/scss/variables.scss';
import pandoraLogo from '../../images/unurshop/xd/pandora.jpg';
import timberlandLogo from '../../images/unurshop/xd/timberland.jpg';
import zaraLogo from '../../images/unurshop/xd/zara.jpg';

// import { generateProductUrl } from '../../core/utils';

interface ProductsFeaturedProps {
    title?: string;
}

const ProductsFeatured: React.FC<ProductsFeaturedProps> = ({ title }) => {
    //    (
    //     <TypedFeaturedProductsQuery displayError={false}>
    //       {({ data }) => {
    //         const products = maybe(
    //           () => data.shop.homepageCollection.products.edges,
    //           []
    //         );

    //         if (products.length) {
    //           return ;
    //         } else {
    //           return null;
    //         }
    //       }}
    //     </TypedFeaturedProductsQuery>

    //   )

    const ushops = [
        {
            id: 1,
            logo: timberlandLogo,
            name: "Timberland",
        },
        {
            id: 2,
            logo: zaraLogo,
            name: "Zara",
        },
        {
            id: 3,
            logo: pandoraLogo,
            name: "Pandora",
        },
        {
            id: 4,
            logo: timberlandLogo,
            name: "Timberland",
        },
        {
            id: 5,
            logo: zaraLogo,
            name: "Zara",
        },
        {
            id: 6,
            logo: pandoraLogo,
            name: "Pandora",
        },
    ];

    const items = ushops.map(({ id, name, logo }) => (
        <Link
            to={appPaths.baseUrl}
            key={id}
        >
            <img src={logo} alt={name} />
        </Link>
    ))

    return (
        <div className="products-featured">
            <div className="container">
                <h4 className="t-c">Дэлхийн шилдэг брэндүүд</h4>
                <h3 className="t-c m-b3">Англи дахь дэлгүүр</h3>

                <Media query={{ maxWidth: smallScreen }}>
                    {matches =>
                        matches ? (
                            <Carousel slidesToShow={2.75}>
                                {items}
                            </Carousel>
                        ) : (
                                <Media query={{ maxWidth: mediumScreen }}>
                                    {matches =>
                                        <Carousel slidesToShow={matches ? 4 : 6}>
                                            {items}
                                        </Carousel>
                                    }
                                </Media>
                            )
                    }
                </Media>
            </div>
        </div >
    );
};

ProductsFeatured.defaultProps = {
    title: "Featured",
};

export default ProductsFeatured;
