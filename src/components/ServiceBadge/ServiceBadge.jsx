import React from "react";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import ServiceBadgeStyles from "./ServiceBadge.styles";
import { useTheme } from "@material-ui/styles";

const ServiceBadge = ({ title, img, large }) => {
  const classes = ServiceBadgeStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
      style={{
        height: large ? "20em" : "12em",
        width: large ? "max-content" : "12em",
      }}
      className={classes.root}
    >
      <Grid item>
        <Typography variant={matchesSM && large ? "h6" : "h5"}>
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <img
          src={img}
          style={matchesSM && large ? { maxWidth: "20em" } : undefined}
          alt="light bulb"
        />
      </Grid>
    </Grid>
  );
};

export default ServiceBadge;
