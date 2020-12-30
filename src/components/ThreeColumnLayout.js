import React from "react";
import { Container, Grid } from "@material-ui/core";

function ThreeColumnLayout() {
  return (
    <Grid
      container
      alignItems={"stretch"}
      style={{ position: "relative", flexGrow: 1 }}
    >
      <Grid item xs={3} style={{ border: "5px solid green" }}>
        Hello
      </Grid>
      <Grid item xs={6} style={{ border: "5px solid green" }}>
        Hello
      </Grid>
      <Grid item xs={3} style={{ border: "5px solid green" }}>
        Hello
      </Grid>
    </Grid>
  );
}

export default ThreeColumnLayout;
