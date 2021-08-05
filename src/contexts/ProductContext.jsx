import axios from "axios";
import React, { createContext, useReducer } from "react";

export const productContext = createContext();

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

  const getProductsData = async () => {
    const { data } = await axios("http://localhost:8003/plants");
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };

  const values = {
    productsData: state.productsData,
    getProductsData,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
