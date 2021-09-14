import React, { useState, useEffect } from "react";
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
import { Link, withRouter } from "react-router-dom";

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
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
    width: "100vw",
    left: 0,
  },
  activeTab: {
    fontFamily: "Raleway",
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

const Navbar = ({
  history,
  activeTab,
  setactiveTab,
  activeService,
  setActiveService,
}) => {
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

  const handleChange = (e, value) => {
    setactiveTab(value);
  };

  const handleServicesClick = (event, index) => {
    setAnchorEl(null);
    setShowServicesMenu(false);
    setactiveTab(1);
    setActiveService(index);
  };

  // eslint-disable-next-line
  useEffect(() => {
    const currectPath = window.location.pathname;
    switch (currectPath) {
      case "/":
        if (activeTab !== 0) setactiveTab(0);
        break;
      case "/services":
        if (activeTab !== 1) {
          setactiveTab(1);
          setActiveService(0);
        }
        break;
      case "/customsoftwares":
        if (activeTab !== 1) {
          setactiveTab(1);
          setActiveService(1);
        }
        break;
      case "/mobileapps":
        if (activeTab !== 1) {
          setactiveTab(1);
          setActiveService(2);
        }
        break;
      case "/websites":
        if (activeTab !== 1) {
          setactiveTab(1);
          setActiveService(3);
        }
        break;
      case "/revolution":
        if (activeTab !== 2) setactiveTab(2);
        break;
      case "/about":
        if (activeTab !== 3) setactiveTab(3);
        break;
      case "/contact":
        if (activeTab !== 4) setactiveTab(4);
        break;
      case "/estimate":
        setactiveTab(8);
        break;
      default:
        break;
    } // eslint-disable-next-line
  }, [activeTab, activeService]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={activeTab}
        onChange={handleChange}
        className={classes.tabs}
        indicatorColor="primary"
      >
        <Tab
          component={Link}
          to="/"
          className={activeTab === 0 ? classes.activeTab : classes.tab}
          label="Home"
        />
        <Tab
          aria-owns={anchorEl ? "services-menu" : undefined}
          aria-haspopup={anchorEl ? true : undefined}
          component={Link}
          onMouseOver={openServicesManu}
          to="/services"
          className={activeTab === 1 ? classes.activeTab : classes.tab}
          label="Services"
        />
        <Tab
          component={Link}
          to="/revolution"
          className={activeTab === 2 ? classes.activeTab : classes.tab}
          label="The Revolution"
        />
        <Tab
          component={Link}
          to="/about"
          className={activeTab === 3 ? classes.activeTab : classes.tab}
          label="About Us"
        />
        <Tab
          component={Link}
          to="/contact"
          className={activeTab === 4 ? classes.activeTab : classes.tab}
          label="Contact Us"
        />
      </Tabs>
      <Button
        component={Link}
        to="/estimate"
        onClick={() => setactiveTab(6)}
        className={classes.button}
        variant="contained"
        color="secondary"
      >
        Free Estimate
      </Button>
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
            component={Link}
            to={service.url}
            key={index}
            classes={{ root: classes.serviceOption }}
            onClick={(e) => handleServicesClick(e, index)}
            selected={index === activeService && activeTab === 1}
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
                setactiveTab(0);
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
