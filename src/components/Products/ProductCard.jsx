import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Box, Container, Grid, IconButton } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useAuth } from "../../contexts/AuthContext";
import { ADMIN } from "../../helpers/consts";
import { JSON_API_PRODUCTS } from "../../helpers/consts";
import axios from "axios";
import { useState } from "react";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

const useStyles = makeStyles((theme) => ({
  style: {
    width: 250,
    color: "white",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },

  root: {
    maxWidth: 300,
    fontFamily: '"Merienda"',
    backgroundImage: `url(${"https://cdn.shopify.com/s/files/1/2930/2308/products/abstract-green-dark-green-texture-photography-backdrop-j-0622_800x.jpg?v=1535714168"})`,
    border: "3px solid white",
    borderRadius: "25px",
    textAlign: "center",
    marginBottom: "20px",
    "& .appear-item": {
      backgroundColor: "black",
      paddingTop: "20px",
      height: "100px",
      width: "100%",

      opacity: 0.6,
      transform: "translateY(-20px)",
      transition: "0.4s",
      top: "30%",
      left: "0",
      fontSize: "20px",
      color: "white",
      position: "absolute",
      visibility: "hidden",
    },
    "&:hover .appear-item": {
      transform: "translateY(0)",
      visibility: "visible",
    },
  },
  price: {
    color: "#eebb4f",
    borderRadius: "20px",
    fontSize: "20px",
  },
}));

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
    fontSize: "25px",
  },
})(Typography);

export default function ProductCard({ item }) {
  const classes = useStyles();
  const [likeCount, setLikeCount] = useState(item.likes.length);
  const [like, setLike] = useState(false);
  const {
    user: { email },
  } = useAuth();
  const {
    deleteProduct,
    history,
    addProductToCart,
    cart,
    favs,
    checkProductInCart,
    addProductToFavs,
    checkProductInFavs,
  } = useProducts();

  const addUserLike = async (email, id) => {
    const { data } = await axios(`${JSON_API_PRODUCTS}/${id}`);
    let emailToFind = data.likes.filter((user) => user === email);
    if (emailToFind.length == 0) {
      data.likes.push(email);
    } else {
      data.likes = data.likes.filter((item) => item !== email);
    }
    await axios.patch(`${JSON_API_PRODUCTS}/${id}`, data);
    setLikeCount(data.likes.length);
    checkUserLike(email, id);
  };

  const checkUserLike = async (email, id) => {
    const { data } = await axios(`${JSON_API_PRODUCTS}/${id}`);
    console.log(data);
    let found = data.likes.filter((user) => email === user);
    console.log(found);
    return found.length > 0 ? setLike(true) : setLike(false);
  };

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <NavLink to={`/details/${item.id}`}>
            <div className={classes.figure}>
              <CardMedia component='img' image={item.img} />
              <div className='appear-item'>
                <span>{item.type}</span>
              </div>
            </div>
          </NavLink>
          <CardContent>
            <WhiteTextTypography
              gutterBottom
              variant='contained'
              component='h3'
            >
              {item.title}
            </WhiteTextTypography>
            <Typography
              className={classes.style}
              variant='body2'
              component='h2'
            >
              {item.description}
            </Typography>
            <Typography variant='h6' component='h6' className={classes.price}>
              Price: {item.price}$
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Container>
            {email === ADMIN ? (
              <>
                <Button
                  onClick={() => history.push(`/edit/${item.id}`)}
                  className={classes.button}
                  variant='outlined'
                  style={{
                    backgroundColor: "rgba(1, 1, 1, .5",
                    borderRadius: "10px",
                    color: "white",
                    borderColor: "#eebb4f",
                    fontFamily: '"Merienda"',
                    margin: "8px",
                    height: "6vh",
                  }}
                >
                  <EditIcon />
                  Edit
                </Button>
                <Button
                  className={classes.button}
                  onClick={() => deleteProduct(item.id)}
                  style={{
                    backgroundColor: "rgba(1, 1, 1, .5",
                    borderRadius: "10px",
                    color: "white",
                    borderColor: "#eebb4f",
                    fontFamily: '"Merienda"',
                    margin: "8px",
                    height: "6vh",
                  }}
                >
                  <DeleteIcon />
                  Delete
                </Button>
              </>
            ) : (
              <>
                <IconButton
                  color={checkProductInCart(item.id) ? "secondary" : ""}
                  onClick={() => addProductToCart(item)}
                  aria-label='add to cart'
                >
                  <AddShoppingCartIcon />
                </IconButton>

                <IconButton
                  color={checkProductInFavs(item.id) ? "secondary" : ""}
                  onClick={() => addProductToFavs(item)}
                  aria-label='add to favs'
                >
                  <FavoriteIcon />
                </IconButton>
                <IconButton
                  color={like ? "secondary" : ""}
                  onClick={() => addUserLike(email, item.id)}
                >
                  <ThumbUpAltIcon />
                  {likeCount}
                </IconButton>
              </>
            )}
          </Container>
        </CardActions>
      </Card>
    </div>
  );
}
