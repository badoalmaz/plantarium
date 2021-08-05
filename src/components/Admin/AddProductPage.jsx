import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper, TextField } from "@material-ui/core";
// import { useFlexLayout } from "react-table";
import { useState } from "react";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useProducts } from "../../contexts/ProductContext";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(5),
    // margin: "40px auto",
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
    maxWidth: "500px",
    maxHeight: "500px",
  },
}));

const AddProductPage = () => {
  const classes = useStyles();
  const { addProduct, history } = useProducts();

  const handleClick = async (product) => {
    const data = await addProduct(product);
    history.push("/catalogue");
  };

  const [product, setProduct] = useState({
    title: "",
    type: "",
    img: "",
    price: 0,
    description: "",
    status: false,
  });

  const handleInp = (e) => {
    console.log(product);
    console.log(e.target.name);
    if (e.target.name == "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <div className={classes.addProductParalax}>
      <Paper elevation={3} className={classes.paper}>
        <h1 className={classes.title}>Add New Plant</h1>
        <Container className={classes.container}>
          <img
            className={classes.addImage}
            src={
              product.image
                ? product.image
                : "https://i.pinimg.com/originals/2e/26/27/2e26273f9467493f1e5045f2856daeef.png"
            }
          />

          <form className={classes.form} noValidate autoComplete="off">
            <TextField
              name="title"
              variant="outlined"
              label="Title"
              onChange={handleInp}
              className={classes.textfield}
              color="secondary"
            />
            <TextField
              name="type"
              variant="outlined"
              label="Type"
              onChange={handleInp}
              className={classes.textfield}
              color="secondary"
            />
            <TextField
              name="img"
              variant="outlined"
              label="Image URL"
              onChange={handleInp}
              className={classes.textfield}
              color="secondary"
            />
            <TextField
              name="price"
              variant="outlined"
              label="Price"
              onChange={handleInp}
              className={classes.textfield}
              color="secondary"
            />
            <TextField
              name="description"
              variant="outlined"
              label="Description"
              onChange={handleInp}
              className={classes.textfield}
              color="secondary"
            />
            <Container>
              <Button onClick={() => handleClick(product)}>
                <SaveAltIcon />
              </Button>
              <Button onClick={() => history.push("/catalogue")}>
                <CloseIcon />
              </Button>
            </Container>
          </form>
        </Container>
      </Paper>
    </div>
  );
};

export default AddProductPage;
