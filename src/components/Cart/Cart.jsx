import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import { useEffect } from "react";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { useProducts } from "../../contexts/ProductContext";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  textStyle: {
    width: "200px",
    margin: "0 auto",
    fontSize: "25px",
    fontFamily: '"Merienda"',
    color: "white",
  },
  table: {
    maxWidth: "100%",
    borderRadius: "20px",
    backgroundColor: "rgba(255, 255, 255, .4)",
  },
  tableCellImg: {
    width: "14vw",
  },
  number: {
    width: "100px",
    height: "50px",
    backgroundColor: "rgba(255, 255, 255, .4)",
    borderRadius: "10px",
    textAlign: "center",
    fontFamily: '"Merienda"',
  },
  button: {
    fontSize: "20px",
    cursor: "pointer",
    color: "white",
    width: "70vw",
    borderRadius: "8px",
    border: "3px solid white",
    margin: "50px",
  },
});

export default function Cart() {
  const classes = useStyles();
  const [count, setCount] = useState([]);
  const { cart, getCart, changeProductCount, deleteCartProducts } =
    useProducts();

  useEffect(() => {
    getCart();
  }, []);

  useEffect(() => {
    setCount();
  }, [cart]);

  const handleCountChange = (count, id) => {
    if (count <= 0) {
      count = 1;
      changeProductCount(count, id);
    } else {
      changeProductCount(count, id);
    }
  };

  return (
    <div className='container'>
      <div className='table-responsive'>
        <table className='table'>
          <thead>
            <tr>
              <th style={{ color: "black" }} className={classes.textStyle}>
                Image
              </th>
              <th style={{ color: "black" }} className={classes.textStyle}>
                Title
              </th>
              <th style={{ color: "black" }} className={classes.textStyle}>
                Price
              </th>
              <th style={{ color: "black" }} className={classes.textStyle}>
                Count
              </th>
              <th style={{ color: "black" }} className={classes.textStyle}>
                SubPrice
              </th>
              <th style={{ color: "black" }} className={classes.textStyle}>
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {cart?.products?.length > 0 &&
              cart.products.map((product) => (
                <tr key={product.item.id}>
                  <td>
                    <img
                      className={classes.tableCellImg}
                      src={product.item.img}
                      alt={product.item.title}
                    />
                  </td>

                  <td className={classes.textStyle}>{product.item.title}</td>
                  <td className={classes.textStyle}>{product.item.price} $</td>
                  <td className={classes.textStyle}>
                    <input
                      className={classes.number}
                      min='1'
                      max='1000'
                      placeholder='1000'
                      type='number'
                      value={product.count}
                      onChange={(e) =>
                        handleCountChange(e.target.value, product.item.id)
                      }
                    />
                  </td>
                  <td className={classes.textStyle}>{product.subPrice} $</td>
                  <td>
                    <Button onClick={() => deleteCartProducts(product.item.id)}>
                      <DeleteIcon />
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <h3 className={classes.textStyle} variant='h5'>
        Total: {cart.totalPrice} $
      </h3>
      <Button className={classes.button}>
        <MonetizationOnIcon style={{ marginRight: "20px" }} />
        BUY NOW
      </Button>
    </div>
  );
}
