import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutUsPage from "../components/AboutUsPage/AboutUsPage";
import HomePage from "../components/HomePage/HomePage";
import ProductDetails from "../components/Products/ProductDetailes";
import ProductList from "../components/Products/ProductList";
import ProductContextProvider from "../contexts/ProductContext";

const Routes = () => {
  return (
    <BrowserRouter>
      <ProductContextProvider>
        <Switch>
          <Route exact path='/aboutuspage' component={AboutUsPage} />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/details/:id' component={ProductDetails} />
          <Route exact path='/catalogue' component={ProductList} />
        </Switch>
      </ProductContextProvider>
    </BrowserRouter>
  );
};

export default Routes;
