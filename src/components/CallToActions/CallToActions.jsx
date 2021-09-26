import { Button, Grid, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import React from "react";
import { NavLink } from "react-router-dom";
import ButtonArrow from "../../ui/5.1 ButtonArrow";
import CallToActionStyles from "./CallToActions.styles";

const CallToAction = () => {
  const classes = CallToActionStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      className={classes.background}
      alignItems="center"
      justifyContent={matchesSM ? "center" : "space-between"}
      direction={matchesSM ? "column" : "row"}
    >
      <Grid
        item
        style={{
          overflow: "visible",
          marginLeft: matchesSM ? 0 : "5em",
          textAlign: matchesSM ? "center" : "inherit",
        }}
      >
        <Grid container direction="column">
          <Typography variant="h2">
            Simple Software. <br /> Revolutionary Results.
          </Typography>
          <Typography
            variant="subtitle2"
            style={{ marginTop: 10, marginBottom: 10 }}
          >
            Take advantage of the 21st century.
          </Typography>
          <Grid
            item
            container
            justifyContent={matchesSM ? "center" : undefined}
          >
            <Button
              component={NavLink}
              to="/revolution"
              variant="outlined"
              className={classes.learnMore}
            >
              <span style={{ marginRight: 5 }}>Learn More </span>
              <ButtonArrow
                height={15}
                width={15}
                fill={theme.palette.primary.main}
              />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        style={{
          marginRight: matchesSM ? 0 : "5em",
          marginLeft: matchesSM ? 0 : "2em",
        }}
      >
        <Button
          component={NavLink}
          to="/revolution"
          className={classes.freeEstimate}
          variant="contained"
        >
          Revolution
        </Button>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
