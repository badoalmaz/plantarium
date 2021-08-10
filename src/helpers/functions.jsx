export const handleInp = (e, product, setProduct) => {
  console.log(product);
  let obj = {
    ...product,
    [e.target.name]: e.target.value,
  };
  setProduct(obj);
};

export const getCurrentPage = () => {
  const search = new URLSearchParams(window.location.search);

  if (!search.get("_page")) {
    return 1;
  }

  return search.get("_page");
};

export const calcSubPrice = (product) => +product.count * product.item.price;

export const calcTotalPrice = (products) => {
  return products.reduce((ac, cur) => {
    return (ac += cur.subPrice);
  }, 0);
};

export function getCountProductsInCart() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  return cart ? cart.products.length : 0;
}

export function getCountProductsInFavs() {
  let favs = JSON.parse(localStorage.getItem("favs"));
  return favs ? favs.products.length : 0;
}
