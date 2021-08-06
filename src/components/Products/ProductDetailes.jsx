import React, { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import { useProducts } from "../../contexts/ProductContext";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  back: {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${"https://images.wallpaperscraft.com/image/leaf_plant_green_surface_119861_1400x1050.jpg"})`,
  },
  root: {
    flexGrow: 1,
    width: "100%",
  },
  paper: {
    backgroundColor: "rgba(255, 255, 255, .4)",
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "80%",
  },
  img: {
    marginTop: "4rem",
    margin: "auto",
    display: "block",
    height: "23rem",
    width: "23rem",
  },
  main_container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  detailsFont: {
    fontFamily: '"Merienda"',
  },
}));

const ProductDetails = () => {
  const { id } = useParams();
  const { getProductDetails, productDetails } = useProducts();
  const classes = useStyles();
  console.log(productDetails);

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  return (
    <div className={classes.back}>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid className={classes.main_container} container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={productDetails.img}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography
                    variant="h3"
                    component="h2"
                    className={classes.detailsFont}
                  >
                    {productDetails.title}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="h2"
                    className={classes.detailsFont}
                  >
                    Type: {productDetails.type}
                  </Typography>
                  {/* <Typography variant='body2' color='textSecondary'>
                    ID: {productDetails.id}
                  </Typography> */}
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    component="h2"
                    className={classes.detailsFont}
                  >
                    {productDetails.description}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="h3" component="h2">
                  {productDetails.price}$
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

export default ProductDetails;
