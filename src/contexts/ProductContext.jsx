import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";

import { useHistory } from "react-router";

import { ACTIONS, JSON_API_PRODUCTS } from "../helpers/consts";

export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  productsData: [],
  productDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, productsData: action.payload };
    case ACTIONS.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const history = useHistory();

  const getProductDetails = async (id) => {
    const { data } = await axios(`${JSON_API_PRODUCTS}/${id}`);
    dispatch({
      type: ACTIONS.GET_PRODUCT_DETAILS,
      payload: data,
    });
  };

  const getProductsData = async () => {
    const { data } = await axios(JSON_API_PRODUCTS);
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
  };

  const saveEditedProduct = async (id, editedProduct) => {
    const data = await axios.patch(`${JSON_API_PRODUCTS}/${id}`, editedProduct);
    history.push("/catalogue");
  };

  const addProduct = async (product) => {
    console.log(product);
    const data = await axios.post(JSON_API_PRODUCTS, product);
    getProductsData();
  };

  const deleteProduct = async (id) => {
    // console.log(id);
    const data = await axios.delete(`${JSON_API_PRODUCTS}/${id}`);
    getProductsData();
  };

  const values = {
    productsData: state.productsData,
    saveEditedProduct,
    getProductsData,
    addProduct,
    history,
    getProductDetails,
    productDetails: state.productDetails,
    deleteProduct,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;