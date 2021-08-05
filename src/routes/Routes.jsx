import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutUsPage from "../components/AboutUsPage/AboutUsPage";
import HomePage from "../components/HomePage/HomePage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/aboutuspage" component={AboutUsPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
