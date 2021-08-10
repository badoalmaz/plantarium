import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useProducts } from "../../contexts/ProductContext";
import { handleInp } from "../../helpers/functions";
import {
  Button,
  Container,
  Paper,
  TextField,
  makeStyles,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(5),
    maxWidth: 1000,
    height: "700px",
    backgroundColor: "rgba(255, 255, 255, .4)",
    fontSize: "50px",
    fontFamily: '"Merienda"',
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    textAlign: "center",
    color: "white",
    marginTop: "3rem",
    marginLeft: "auto",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    color: "black",
    size: "5rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "35rem",
    margin: "2rem",
  },
  textfield: {
    marginTop: "2rem",
    color: "white",
  },

  addProductParalax: {
    backgroundImage: `url(${"https://i.pinimg.com/originals/f0/a9/0c/f0a90c2bc63dfa352e39c28dfff16d1f.jpg"})`,
    minHeight: "800px",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  addImage: {
    marginTop: "4rem",
    maxWidth: "24rem",
    maxHeight: "24rem",
  },
}));

const EditProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    type: "",
    image: "",
    description: "",
    price: 0,
  });
  const classes = useStyles();
  const { getProductDetails, productDetails, history, saveEditedProduct } =
    useProducts();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  return (
    <div className={classes.addProductParalax}>
      <Paper elevation={3} className={classes.paper}>
        <h1 className={classes.title}>Edit Plant</h1>
        <Container className={classes.container}>
          <img className={classes.addImage} src={product.img} />

          <form className={classes.form} noValidate autoComplete='off'>
            <TextField
              name='title'
              variant='outlined'
              label='Title'
              value={product.title}
              onChange={(e) => handleInp(e, product, setProduct)}
              className={classes.textfield}
              color='secondary'
            />
            <TextField
              name='type'
              variant='outlined'
              label='Type'
              value={product.type}
              onChange={(e) => handleInp(e, product, setProduct)}
              className={classes.textfield}
              color='secondary'
            />
            <TextField
              name='image'
              variant='outlined'
              value={product.img}
              label='Image URL'
              onChange={(e) => handleInp(e, product, setProduct)}
              className={classes.textfield}
              color='secondary'
            />
            <TextField
              name='price'
              variant='outlined'
              label='Price'
              value={product.price}
              onChange={(e) => handleInp(e, product, setProduct)}
              className={classes.textfield}
              color='secondary'
            />
            <TextField
              name='description'
              variant='outlined'
              label='Description'
              value={product.description}
              onChange={(e) => handleInp(e, product, setProduct)}
              className={classes.textfield}
              color='secondary'
            />
            <Container>
              <Button onClick={() => saveEditedProduct(product.id, product)}>
                <SaveIcon />
              </Button>
              <Button onClick={() => history.push("/catalogue")}>
                <CancelIcon />
              </Button>
            </Container>
          </form>
        </Container>
      </Paper>
    </div>
  );
};

export default EditProductPage;
