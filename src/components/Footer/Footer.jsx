import React from "react";
import FooterStyles from "./Footer.styles";
import footerAdornment from "../../assets/Footer Adornment.svg";
import { Grid, Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Twitter from "../../assets/twitter.svg";

const Footer = () => {
  const classes = FooterStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          justifyContent="center"
          direction="row"
          container
          className={classes.gridContainer}
        >
          <Grid item>
            <Grid container className={classes.gridItem}>
              <Grid component={Link} to="/" item className={classes.Link}>
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              spacing={1}
              className={classes.gridItem}
            >
              <Grid
                component={Link}
                to="/services"
                item
                className={classes.Link}
              >
                Services
              </Grid>
              <Grid
                component={Link}
                to="/customsoftwares"
                item
                className={classes.Link}
              >
                Custom softwares
              </Grid>
              <Grid
                component={Link}
                to="/mobileapps"
                item
                className={classes.Link}
              >
                Mobile Apps
              </Grid>
              <Grid
                component={Link}
                to="/websites"
                item
                className={classes.Link}
              >
                Websites
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              spacing={1}
              className={classes.gridItem}
            >
              <Grid
                component={Link}
                to="/revolution"
                item
                className={classes.Link}
              >
                Revolution
              </Grid>
              <Grid
                component={Link}
                to="/revolution"
                item
                className={classes.Link}
              >
                Vision
              </Grid>
              <Grid
                component={Link}
                to="/revolution"
                item
                className={classes.Link}
              >
                Technology
              </Grid>
              <Grid
                component={Link}
                to="/revolution"
                item
                className={classes.Link}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              spacing={1}
              className={classes.gridItem}
            >
              <Grid component={Link} to="/about" item className={classes.Link}>
                About Us
              </Grid>
              <Grid component={Link} to="/about" item className={classes.Link}>
                History
              </Grid>
              <Grid component={Link} to="/about" item className={classes.Link}>
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              spacing={1}
              className={classes.gridItem}
            >
              <Grid
                component={Link}
                to="/contact"
                item
                className={classes.Link}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        alt="Footer Adonment"
        src={footerAdornment}
        className={classes.adornment}
      />
      <Grid
        justifyContent="flex-end"
        spacing={2}
        container
        className={classes.socialMediaIcons}
      >
        <Grid item>
          <img className={classes.socialLink} src={Facebook} alt="facebook" />
        </Grid>
        <Grid item>
          <img className={classes.socialLink} src={Twitter} alt="twitter" />
        </Grid>
        <Grid item>
          <img className={classes.socialLink} src={Instagram} alt="Instagram" />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
