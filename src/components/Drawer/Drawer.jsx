import React, { useState, useEffect } from "react";
import {
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  Divider,
  ListItemText,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  icon: {
    height: 50,
    width: 50,
    opacity: 1,
    color: "black",

    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  iconContainer: {
    marginLeft: "auto",
    opacity: 1,
  },
  listItem: {
    color: "white",
    fontFamily: "Raleway",
  },
  divider: {
    color: "white",
  },
  marginToolbar: {
    ...theme.mixins.toolbar,
    marginTop: "2.2em",

    [theme.breakpoints.down("md")]: {
      marginTop: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "1.15em",
    },
  },
  estimate: {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    fontFamily: "Pacifico",

    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
}));

const options = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Services",
    url: "/services",
  },
  {
    text: "The Revolution",
    url: "/revolution",
  },
  {
    text: "About Us",
    url: "/about",
  },
  {
    text: "Contact Us",
    url: "/contact",
  },
  {
    text: "Free Estimate",
    url: "/estimate",
  },
];

const Drawer = ({ open, onOpen, onClose }) => {
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [activeDrawer, setActiveDrawer] = useState(0);

  const classes = useStyles();

  useEffect(() => {
    const currectPath = window.location.pathname;
    switch (currectPath) {
      case "/":
        if (activeDrawer !== 0) setActiveDrawer(0);
        break;
      case "/services":
        if (activeDrawer !== 1) {
          setActiveDrawer(1);
        }
        break;
      case "/revolution":
        if (activeDrawer !== 2) setActiveDrawer(2);
        break;
      case "/about":
        if (activeDrawer !== 3) setActiveDrawer(3);
        break;
      case "/contact":
        if (activeDrawer !== 4) setActiveDrawer(4);
        break;
      default:
        break;
    }
  }, [activeDrawer]);

  const handleClick = (i) => {
    onClose();
    setActiveDrawer(i);
  };

  return (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={open}
        onOpen={onOpen}
        onClose={onClose}
        classes={{ paper: classes.root }}
      >
        <div className={classes.marginToolbar} />
        <List disablePadding>
          {options.map((option, i) => (
            <ListItem
              component={Link}
              to={option.url}
              key={i}
              classes={{ root: i === 5 ? classes.estimate : classes.listItem }}
              button
              selected={i === activeDrawer}
              onClick={() => handleClick(i)}
            >
              <ListItemText disableTypography>{option.text}</ListItemText>
              <Divider style={{ background: "black" }} variant="middle" />
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.iconContainer}
        disableRipple
        onClick={onOpen}
      >
        <Menu className={classes.icon} />
      </IconButton>
    </>
  );
};

export default Drawer;
