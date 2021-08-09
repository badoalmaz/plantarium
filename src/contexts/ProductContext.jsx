import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";

import { useHistory } from "react-router";

import { ACTIONS, JSON_API_PRODUCTS } from "../helpers/consts";
import {
  calcSubPrice,
  calcTotalPrice,
  getCountProductsInCart,
} from "../helpers/functions";

export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  productsData: [],
  productDetails: {},
  cart: [],
  cartLength: getCountProductsInCart(),
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, productsData: action.payload };
    case ACTIONS.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };
    case ACTIONS.GET_CART:
      return { ...state, cart: action.payload };
    case ACTIONS.CHANGE_CART_LENGTH:
      return { ...state, cartLength: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const history = useHistory();

  //////////////////////  CRUD START   ///////////////////////////
  const getProductsData = async () => {
    const { data } = await axios(JSON_API_PRODUCTS);
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
  };

  const getProductDetails = async (id) => {
    const { data } = await axios(`${JSON_API_PRODUCTS}/${id}`);
    dispatch({
      type: ACTIONS.GET_PRODUCT_DETAILS,
      payload: data,
    });
  };

  const saveEditedProduct = async (id, editedProduct) => {
    await axios.patch(`${JSON_API_PRODUCTS}/${id}`, editedProduct);
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

  //////////////////////   CRUD  END   ///////////////////////////////////////

  ///////////////////////////   CART  START ///////////////////////////////
  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          products: [],
          totalPrice: 0,
        })
      );
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };

  const addProductToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: product.price,
    };

    let productToFind = cart.products.filter(
      (item) => item.item.id === product.id
    );
    if (productToFind.length == 0) {
      cart.products.push(newProduct);
    } else {
      cart.products = cart.products.filter(
        (item) => item.item.id !== product.id
      );
    }
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };

  const changeProductCount = (count, id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.map((product) => {
      if (product.item.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };

  function deleteCartProducts(id) {
    let toDelete = JSON.parse(localStorage.getItem("cart"));
    toDelete.products = toDelete.products.filter((elem) => elem.item.id !== id);
    toDelete.totalPrice = calcTotalPrice(toDelete.products);
    localStorage.setItem("cart", JSON.stringify(toDelete));
    console.log(toDelete);
    getCart();
    dispatch({
      type: ACTIONS.CHANGE_CART_LENGTH,
      payload: toDelete.products.length,
    });
  }

  function checkProductInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      let newCart = cart.products?.filter((elem) => elem.item.id === id);
      return newCart.length > 0 ? true : false;
    } else {
      cart = {
        product: [],
        totalPrice: 0,
      };
    }
  }

  //////////////////////////////    CART END /////////////////////////////

  const values = {
    productsData: state.productsData,
    saveEditedProduct,
    getProductsData,
    addProduct,
    history,
    getProductDetails,
    productDetails: state.productDetails,
    deleteProduct,
    getCart,
    cart: state.cart,
    addProductToCart,
    changeProductCount,
    deleteCartProducts,
    checkProductInCart,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
