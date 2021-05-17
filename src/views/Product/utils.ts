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
  const metadata = product?.metadata
    ? product?.metadata.find(el => el.key === "wasPrice")
    : null;

  return metadata ? metadata.value : null;
}

export const getSalePercent = (wasPrice: any, price: any) => {
  return wasPrice ? `${Math.round(100 - (price * 100) / wasPrice)}%` : false;
};
