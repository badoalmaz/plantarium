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
