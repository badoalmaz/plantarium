import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  commentBack: {
    backgroundColor: "black",
  },
}));

const Comments = () => {
  const classes = useStyles();
  return (
    <div className={classes.commentBack}>
      <h1>Comments: </h1>
    </div>
  );
};

export default Comments;
