import React, { useState } from "react";
import {
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  Divider,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import { ExpandLess, ExpandMore, Menu } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    width: "20em",

    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
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
      backgroundColor: theme.palette.secondary.light,
    },
  },
  activeTab: {
    fontWeight: "bold",
    backgroundColor: theme.palette.primary.dark,
  },
  activeEstimate: {
    fontWeight: "bold",
    backgroundColor: theme.palette.secondary.light,
  },
}));

const options = [
  {
    text: "Home",
    url: "/",
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
];

const Drawer = ({ open, onOpen, onClose }) => {
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [collapse, setCollapse] = useState(false);

  const classes = useStyles();

  const handleClick = (i) => {
    onClose();
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
              component={NavLink}
              to={option.url}
              isActive={
                i === 0
                  ? (match) => {
                      if (match.url === "/") {
                        return true;
                      }
                    }
                  : undefined
              }
              key={i}
              activeClassName={
                i === 5 ? classes.activeEstimate : classes.activeTab
              }
              classes={{ root: i === 5 ? classes.estimate : classes.listItem }}
              button
              onClick={() => handleClick(i)}
            >
              <ListItemText disableTypography>{option.text}</ListItemText>
              <Divider style={{ background: "black" }} variant="middle" />
            </ListItem>
          ))}
          <ListItem
            activeClassName={classes.activeTab}
            component={NavLink}
            to="/services"
            classes={{ root: classes.listItem }}
          >
            <ListItemText disableTypography>Services</ListItemText>
            <Divider style={{ background: "black" }} variant="middle" />
            {collapse ? (
              <ExpandLess onClick={() => setCollapse(false)} />
            ) : (
              <ExpandMore onClick={() => setCollapse(true)} />
            )}
          </ListItem>
          <Collapse in={collapse} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                activeClassName={classes.activeTab}
                component={NavLink}
                to="/customsoftwares"
                classes={{ root: classes.listItem }}
              >
                <ListItemText disableTypography>Custom Softwares</ListItemText>
                <Divider style={{ background: "black" }} variant="middle" />
              </ListItem>
              <ListItem
                activeClassName={classes.activeTab}
                component={NavLink}
                to="/mobileapps"
                classes={{ root: classes.listItem }}
              >
                <ListItemText disableTypography>Mobile Apps</ListItemText>
                <Divider style={{ background: "black" }} variant="middle" />
              </ListItem>
              <ListItem
                activeClassName={classes.activeTab}
                component={NavLink}
                to="/websites"
                classes={{ root: classes.listItem }}
              >
                <ListItemText disableTypography>Websites</ListItemText>
                <Divider style={{ background: "black" }} variant="middle" />
              </ListItem>
            </List>
          </Collapse>
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
