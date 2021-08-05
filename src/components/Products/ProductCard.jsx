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

const useStyles = makeStyles((theme) => ({
  style: {
    width: 180,
    color: "white",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  root: {
    maxWidth: 200,
    background: "linear-gradient(to right, #134e5e, #71b280)",
    border: "3px solid gold",
    borderRadius: "25px",
    textAlign: "center",
    "& .appear-item": {
      backgroundColor: "black",
      paddingTop: "20px",
      height: "50px",
      width: "200px",
      opacity: 0.6,
      transform: "translateY(-20px)",
      transition: "0.4s",
      top: "50%",
      left: "0",
      fontSize: "25px",
      color: "white",
      position: "absolute",
      visibility: "hidden",
    },
    "&:hover .appear-item": {
      transform: "translateY(0)",
      visibility: "visible",
    },
  },
  button: {
    fontSize: "20px",
    cursor: "pointer",
    color: "gold",
    width: "140px",
    borderRadius: "8px",
    border: "2px solid gold",
  },
}));

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
    fontSize: "16px",
  },
})(Typography);

export default function ProductCard({ item }) {
  console.log(item);
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <div className={classes.figure}>
            <CardMedia component='img' image={item.img} />
            <div className='appear-item'>
              <span>{item.type}</span>
            </div>
          </div>
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
            <Typography variant='h6' component='h6'>
              {item.price}$
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Container>
            <Button className={classes.button} variant='outlined'>
              <EditIcon style={{ marginRight: "20px" }} />
              Edit
            </Button>
            <Button className={classes.button}>
              <DeleteIcon style={{ marginRight: "20px" }} />
              Delete
            </Button>
          </Container>
        </CardActions>
      </Card>
    </div>
  );
}
