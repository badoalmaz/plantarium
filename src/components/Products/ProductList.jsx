import { Container, Grid, makeStyles } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { useProducts } from "../../contexts/ProductContext";
import AddProductPage from "../Admin/AddProductPage";
import ProductCard from "./ProductCard";

const useStyles = makeStyles((theme) => ({
  catalogueParalax: {
    // backgroundImage: `url(${"http://www.baltana.com/files/wallpapers-24/Plant-Wallpaper-3840x2400-60182.jpg"})`,
    backgroundImage: `url(${"https://i.pinimg.com/originals/f0/a9/0c/f0a90c2bc63dfa352e39c28dfff16d1f.jpg"})`,
    minHeight: "500px",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // borderRadius: "30px",
  },
  catalogueContent: {
    // height: "1000px",
    backgroundColor: "rgba(255, 255, 255, .4)",
    fontSize: "40px",
    maxWidth: "80%",
    marginTop: "4rem",
    // fontSize: "25px",
    borderRadius: "60px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  // aboutUsImg: {
  //   borderRadius: "40px",
  //   marginTop: "2rem",
  // },
  // aboutUsTxt: {
  //   fontSize: "25px",
  //   fontFamily: '"Merienda"',
  // },
}));

const ProductList = () => {
  const classes = useStyles();
  const { productsData, getProductsData } = useProducts();

  useEffect(() => {
    getProductsData();
  }, []);

  // useEffect(() => {
  //   console.log(productsData);
  // }, [productsData]);

  return (
    <>
      {/* <AddProductPage /> */}
      <div className={classes.catalogueParalax}>
        <Grid
          className={classes.catalogueContent}
          container
          justify="space-around"
        >
          {productsData && productsData ? (
            productsData.map((item) => (
              <ProductCard item={item} key={item.id} />
            ))
          ) : (
            <></>
          )}
        </Grid>
      </div>
    </>
  );
};

export default ProductList;
