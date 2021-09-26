import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import {
  makeStyles,
  Toolbar,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
} from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { NavLink, withRouter } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import Drawer from "../Drawer/Drawer";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  marginToolbar: {
    ...theme.mixins.toolbar,
    marginBottom: "2em",

    [theme.breakpoints.down("md")]: {
      marginBottom: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1em",
    },
  },
  logo: {
    height: "6em",
    cursor: "pointer",
    top: 0,
    bottom: 0,

    [theme.breakpoints.down("md")]: {
      height: "5em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "4.8em",
    },
  },
  tabs: {
    marginLeft: "auto",
  },
  tab: {
    fontFamily: "Raleway",
    opacity: 1,
  },
  button: {
    borderRadius: "50px",
    marginRight: 25,
    marginLeft: 40,
    fontFamily: "Pacifico",
    textTransform: "none",
    fontSize: "1rem",
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
    width: "100vw",
    left: 0,
  },
  activeTab: {
    opacity: 1,
    fontWeight: "bold",
  },
  servicesMenu: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    borderRadius: 0,
  },
  serviceOption: {
    fontFamily: "Raleway",
    color: "white",
    fontSize: "1.2rem",

    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  activeService: {
    fontWeight: "bold",
    backgroundColor: theme.palette.primary.dark,
  },
  activeEstimate: {
    fontWeight: "bold",
    backgroundColor: theme.palette.secondary.light,
  },
}));

const servicesOptions = [
  {
    text: "Services",
    url: "/services",
  },
  {
    text: "Custom Softwares",
    url: "/customsoftwares",
  },
  {
    text: "Mobile Apps",
    url: "/mobileapps",
  },
  {
    text: "Websites",
    url: "/websites",
  },
];

const Navbar = ({ history, activeService, setActiveService }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);

  const openServicesManu = (e) => {
    setAnchorEl(e.currentTarget);
    setShowServicesMenu(true);
  };

  const closeServicesMenu = () => {
    setAnchorEl(null);
    setShowServicesMenu(false);
  };

  const tabs = (
    <React.Fragment>
      <Tabs value={0} className={classes.tabs} indicatorColor="primary">
        <Tab
          component={NavLink}
          to="/"
          isActive={(match) => {
            if (match.url === "/") {
              return true;
            }
          }}
          activeClassName={classes.activeTab}
          className={classes.tab}
          label="Home"
        />
        <Tab
          aria-owns={anchorEl ? "services-menu" : undefined}
          aria-haspopup={anchorEl ? true : undefined}
          component={NavLink}
          onMouseOver={openServicesManu}
          activeClassName={classes.activeTab}
          to="/services"
          className={classes.tab}
          label="Services"
        />
        <Tab
          component={NavLink}
          to="/revolution"
          className={classes.tab}
          activeClassName={classes.activeTab}
          label="The Revolution"
        />
        <Tab
          component={NavLink}
          to="/about"
          className={classes.tab}
          activeClassName={classes.activeTab}
          label="About Us"
        />
        <Tab
          component={NavLink}
          to="/contact"
          className={classes.tab}
          activeClassName={classes.activeTab}
          label="Contact Us"
        />
      </Tabs>
      <Menu
        id="services-menu"
        anchorEl={anchorEl}
        open={showServicesMenu}
        onClose={closeServicesMenu}
        classes={{ paper: classes.servicesMenu }}
        style={{ zIndex: 1302 }}
        elevation={0}
        MenuListProps={{ onMouseLeave: closeServicesMenu }}
      >
        {servicesOptions.map((service, index) => (
          <MenuItem
            component={NavLink}
            to={service.url}
            key={index}
            classes={{ root: classes.serviceOption }}
            activeClassName={classes.activeService}
          >
            {service.text}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar className={classes.appBar}>
          <Toolbar disableGutters>
            <Logo
              onClick={() => {
                history.push("/");
              }}
              className={classes.logo}
            />
            {matches ? (
              <Drawer
                open={openDrawer}
                onOpen={() => setOpenDrawer(true)}
                onClose={() => setOpenDrawer(false)}
              />
            ) : (
              tabs
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.marginToolbar} />
    </>
  );
};

export default withRouter(Navbar);
