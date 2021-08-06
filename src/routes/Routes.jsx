import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutUsPage from "../components/AboutUsPage/AboutUsPage";
import AddProductPage from "../components/Admin/AddProductPage";
import HomePage from "../components/HomePage/HomePage";
import NavbarB from "../components/Navbar/Navbar";
import ProductDetails from "../components/Products/ProductDetailes";
import ProductList from "../components/Products/ProductList";
import ProductContextProvider from "../contexts/ProductContext";

const Routes = () => {
  return (
    <BrowserRouter>
      <NavbarB />
      <ProductContextProvider>
        <Switch>
          <Route exact path="/aboutuspage" component={AboutUsPage} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/catalogue" component={ProductList} />
          <Route exact path="/addproductpage" component={AddProductPage} />
          <Route exact path="/details/:id" component={ProductDetails} />
        </Switch>
      </ProductContextProvider>
    </BrowserRouter>
  );
};

export default Routes;
