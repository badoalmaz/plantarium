import { Container, Grid } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { productContext } from "./ProductContext";
import ProductCard from "./components/Products/ProductCard";

const ProductList = () => {
  const { productsData, getProductsData } = useContext(productContext);

  useEffect(() => {
    getProductsData();
  }, []);

  useEffect(() => {
    console.log(productsData);
  }, [productsData]);

  return (
    <Grid container justify='space-around'>
      {productsData && productsData ? (
        productsData.map((item) => <ProductCard item={item} />)
      ) : (
        <></>
      )}
    </Grid>
  );
};

export default ProductList;
