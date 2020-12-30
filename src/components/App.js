import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import NavBar from "./NavBar";
import ThreeColumnLayout from "./ThreeColumnLayout";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <ThreeColumnLayout />
    </div>
  );
}

export default App;
