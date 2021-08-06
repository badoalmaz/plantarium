export const handleInp = (e, product, setProduct) => {
  console.log(product);
  let obj = {
    ...product,
    [e.target.name]: e.target.value,
  };
  setProduct(obj);
};
