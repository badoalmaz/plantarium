import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";

import { useHistory } from "react-router";

import { ACTIONS, JSON_API_PRODUCTS, PRODUCT_LIMIT } from "../helpers/consts";

import {
  calcSubPrice,
  calcTotalPrice,
  getCountProductsInCart,
  getCountProductsInFavs,
} from "../helpers/functions";

export const productContext = createContext();
export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  productsData: [],
  productDetails: {},
  pages: 1,
  favs: [],
  favsLength: getCountProductsInFavs(),
  cart: [],
  cartLength: getCountProductsInCart(),
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return {
        ...state,
        productsData: action.payload.data,
        pages: Math.ceil(
          action.payload.headers["x-total-count"] / PRODUCT_LIMIT
        ),
      };
    case ACTIONS.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };
    case ACTIONS.GET_CART:
      return { ...state, cart: action.payload };
    case ACTIONS.CHANGE_CART_LENGTH:
      return { ...state, cartLength: action.payload };
    case ACTIONS.GET_FAVS:
      return { ...state, favs: action.payload };
    case ACTIONS.CHANGE_FAVS_LENGTH:
      return { ...state, favs: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const history = useHistory();

  //////////////////////  CRUD START   ///////////////////////////

  const getProductsData = async () => {
    const search = new URLSearchParams(history.location.search);
    search.set("_limit", PRODUCT_LIMIT);
    history.push(`${history.location.pathname}?${search.toString()}`);
    const res = await axios(`${JSON_API_PRODUCTS}/${window.location.search}`);
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: res,
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
  ////////
  /////////////////
  //////////////////////

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
  /////////
  //////////////////////
  //////////////////////////////////////////////////

  /////////////////////////////     FAVORITES  start ////////////////////////////////////////////////////////////////
  const getFavs = () => {
    let favs = JSON.parse(localStorage.getItem("favs"));
    if (!favs) {
      localStorage.setItem(
        "favs",
        JSON.stringify({
          products: [],
          totalPrice: 0,
        })
      );
      favs = {
        products: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: ACTIONS.GET_FAVS,
      payload: favs,
    });
  };

  const addProductToFavs = (product) => {
    let favs = JSON.parse(localStorage.getItem("favs"));
    if (!favs) {
      favs = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: product.price,
    };

    let productToFind = favs.products.filter(
      (item) => item.item.id === product.id
    );
    if (productToFind.length == 0) {
      favs.products.push(newProduct);
    } else {
      favs.products = favs.products.filter(
        (item) => item.item.id !== product.id
      );
    }
    favs.totalPrice = calcTotalPrice(favs.products);
    localStorage.setItem("favs", JSON.stringify(favs));
    dispatch({
      type: ACTIONS.GET_FAVS,
      payload: favs,
    });
  };
  const changeFavsCount = (count, id) => {
    let favs = JSON.parse(localStorage.getItem("favs"));
    favs.products = favs.products.map((product) => {
      if (product.item.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });
    favs.totalPrice = calcTotalPrice(favs.products);
    localStorage.setItem("favs", JSON.stringify(favs));
    dispatch({
      type: ACTIONS.GET_FAVS,
      payload: favs,
    });
  };

  function deleteFavsProducts(id) {
    let toDelete = JSON.parse(localStorage.getItem("favs"));
    toDelete.products = toDelete.products.filter((elem) => elem.item.id !== id);
    toDelete.totalPrice = calcTotalPrice(toDelete.products);
    localStorage.setItem("favs", JSON.stringify(toDelete));
    console.log(toDelete);
    getFavs();
    dispatch({
      type: ACTIONS.CHANGE_FAVS_LENGTH,
      payload: toDelete.products.length,
    });
  }

  function checkProductInFavs(id) {
    let favs = JSON.parse(localStorage.getItem("favs"));
    if (favs) {
      let newFavs = favs.products?.filter((elem) => elem.item.id === id);
      return newFavs.length > 0 ? true : false;
    } else {
      favs = {
        product: [],
        totalPrice: 0,
      };
    }
  }
  //////////////////////////////////     FAVORITES end     ///////////////////////////////////////////////////////////////////
  ////////////////
  /////////////////////////////////
  /////////////////////////////////////////
  //////////////////////////     LIKES   START      ////////////////////////

  //////////////        LIKE END       /////////////////////////
  const values = {
    productsData: state.productsData,
    saveEditedProduct,
    getProductsData,
    addProduct,
    history,
    getProductDetails,
    productDetails: state.productDetails,
    deleteProduct,

    pages: state.pages,

    getCart,
    cart: state.cart,
    addProductToCart,
    changeProductCount,
    deleteCartProducts,
    checkProductInCart,

    getFavs,
    favs: state.favs,
    addProductToFavs,
    deleteFavsProducts,
    checkProductInFavs,
    changeFavsCount,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
