import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useHistory } from "react-router";
import { JSON_API_PRODUCTS } from "../helpers/consts";

export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  productsData: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, productsData: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const history = useHistory();

  const getProductsData = async () => {
    const { data } = await axios("http://localhost:8003/plants");
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };
  const addProduct = async (product) => {
    const data = await axios.post(JSON_API_PRODUCTS, product);
    getProductsData();
  };

  const values = {
    productsData: state.productsData,
    getProductsData,
    addProduct,
    history,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
