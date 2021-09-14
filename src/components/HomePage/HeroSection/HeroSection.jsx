import React from "react";
import Lottie from "react-lottie";
import HeroSectionStyles from "./heroSection";
import animationData from "../../../animations/landinganimation/data";
import { Button, Grid, Typography } from "@material-ui/core";
import ButtonArrow from "../../../ui/5.1 ButtonArrow";
import { useTheme } from "@material-ui/styles";

const HeroSection = () => {
  const classes = HeroSectionStyles();
  const theme = useTheme();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid
      className={classes.heroSection}
      container
      justifyContent="flex-end"
      alignItems="center"
    >
      <Grid sm item className={classes.heroContent}>
        <Typography variant="h2" style={{ textAlign: "center" }}>
          Bringing West Coast Technology <br />
          to the MidWest
        </Typography>
        <Grid
          container
          justifyContent="space-evenly"
          className={classes.buttons}
        >
          <Grid item>
            <Button className={classes.estimateButton} variant="contained">
              Free Estimate
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" className={classes.learnMore}>
              <span style={{ marginRight: 8 }}>Learn More </span>
              <ButtonArrow
                height={15}
                style={{ marginLeft: "6px" }}
                width={15}
                fill={theme.palette.primary.main}
              />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid sm item className={classes.animation}>
        <Lottie options={defaultOptions} height="100%" width="100%" />
      </Grid>
    </Grid>
  );
};

export default HeroSection;
