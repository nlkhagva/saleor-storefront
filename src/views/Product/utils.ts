import { PRODUCT_TYPE_FBLIVE } from "@temp/constants";

export function getLinkImages(product) {
  const metadata = product?.metadata
    ? product?.metadata.find(el => el.key === "linkImages")
    : null;
  return JSON.parse(metadata ? metadata.value : "[]" || "[]");
}

export function getAvatarImage(product) {
  const imageLinks = getLinkImages(product);

  return product?.thumbnail
    ? product.thumbnail.url
    : imageLinks.length
    ? imageLinks[0]
    : null;
}
export function getAvatarImage2x(product) {
  const imageLinks = getLinkImages(product);

  return product?.thumbnail2x
    ? product.thumbnail2x.url
    : imageLinks.length
    ? imageLinks[0]
    : null;
}
export function getWasPrice(product) {
  if (product.wasPrice) {
    return product.wasPrice;
  }
  const metadata = product?.metadata
    ? product?.metadata.find(el => el.key === "wasPrice")
    : null;

  return metadata ? metadata.value : null;
}

export const getSalePercent = (wasPrice: any, price: any) => {
  return wasPrice ? `${Math.round(100 - (price * 100) / wasPrice)}%` : false;
};

export const getProductLink = product => {
  const metadata = product?.metadata
    ? product?.metadata.find(el => el.key === "url")
    : null;

  return metadata ? metadata.value : null;
};

export const getFbLiveAttrs = product => {
  if (product.attributes && product.productType.id === PRODUCT_TYPE_FBLIVE) {
    const size = product.attributes.find(
      i => i.attribute.slug === "all-size" && i.values.length > 0
    );
    const brand = product.attributes.find(
      i => i.attribute.slug === "all-brand" && i.values.length > 0
    );
    const texts = [];

    if (brand) texts.push(brand.values[0].name);
    if (size) {
      let val = size.values[0].name;
      if (parseInt(val, 10).toString() === val) {
        val = `UK ${val}`;
      }
      texts.push(val);
    }

    return texts.join("-");
  }
};
