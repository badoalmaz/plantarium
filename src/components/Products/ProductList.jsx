import { Container, Grid } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { useProducts } from "../../contexts/ProductContext";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { productsData, getProductsData } = useProducts();

  useEffect(() => {
    getProductsData();
  }, []);

  // useEffect(() => {
  //   console.log(productsData);
  // }, [productsData]);

  return (
    <Grid container justify="space-around">
      {productsData && productsData ? (
        productsData.map((item) => <ProductCard item={item} key={item.id} />)
      ) : (
        <></>
      )}
    </Grid>
  );
};

export default ProductList;
