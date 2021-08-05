import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { makeStyles } from "@material-ui/core/styles";

const ProductDetails = () => {
  const { id } = useParams();
  const { getProductDetails, productDetails } = useProducts();
  const classes = useStyles();

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  useEffect(() => {
    console.log(productDetails);
  }, [productDetails]);

  return (
    <>
      {productDetails && productDetails.image ? (
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid className={classes.main_container} container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt='complex'
                    src={productDetails.image}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction='column' spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant='subtitle1'>
                      {productDetails.title}
                    </Typography>
                    <Typography variant='body2' gutterBottom>
                      {productDetails.type}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      ID: {productDetails.id}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant='p'>
                      {productDetails.description}
                    </Typography>
                    <Typography variant='body2' style={{ cursor: "pointer" }}>
                      Remove
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant='subtitle1'>
                    {productDetails.price}$
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default ProductDetails;
