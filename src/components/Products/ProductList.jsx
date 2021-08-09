import { Container, Grid, makeStyles } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductContext";
import AddProductPage from "../Admin/AddProductPage";
import SecondBar from "../SecondBar/SecondBar";
import ProductCard from "./ProductCard";
import { Pagination } from "@material-ui/lab";
import { getCurrentPage } from "../../helpers/functions";
import { useHistory } from "react-router";
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

  catalogueBar: {
    width: "100%",
  },
  // aboutUsImg: {
  //   borderRadius: "40px",
  //   marginTop: "2rem",
  // },
  // aboutUsTxt: {
  //   fontSize: "25px",
  //   fontFamily: '"Merienda"',
  // },

  pagination: {
    margin: "20px auto",
  },

  // },
}));

const ProductList = () => {
  const classes = useStyles();
  const { productsData, getProductsData, pages } = useProducts();
  const [page, setPage] = useState(getCurrentPage());
  const history = useHistory();

  useEffect(() => {
    getProductsData();
  }, []);
  useEffect(() => {
    console.log(page);
  }, [page]);

  const handlePage = (e, page) => {
    const search = new URLSearchParams(window.location.search);
    search.set("_page", page);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getProductsData();
    setPage(page);
  };

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
          <div className={classes.catalogueBar}>
            <SecondBar />
          </div>
          {productsData && productsData ? (
            productsData.map((item) => (
              <ProductCard item={item} key={item.id} />
            ))
          ) : (
            <></>
          )}
          <Pagination
            className={classes.pagination}
            variant="outlined"
            color="white"
            count={pages}
            page={+page}
            onChange={handlePage}
            size="large"
          />
          {/* </div> */}
        </Grid>
      </div>
      {/* <div
      // style={{
      //   margin: "20px auto",
      //   // backgroundColor: "white",
      //   position: "sticky",
      // }}
      > */}
    </>
  );
};

export default ProductList;
