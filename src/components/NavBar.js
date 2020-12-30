import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position={"static"}>
      <Toolbar>
        <IconButton edge="start" color="inherit" className={classes.menuButton}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Material Theme Designer
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
