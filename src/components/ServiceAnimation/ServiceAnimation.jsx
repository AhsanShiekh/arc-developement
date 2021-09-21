import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import Lottie from "react-lottie";
import ServiceInfo from "../ServiceInfo/ServiceInfo";
import ServiceAnimationStyles from "./ServiceAnimation.styles";

const ServiceAnimation = ({ data, smallAnim }) => {
  const classes = ServiceAnimationStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      item
      direction={
        matchesSM
          ? data.reverse
            ? "column-reverse"
            : "column"
          : data.reverse
          ? "row-reverse"
          : "row"
      }
      style={{ textAlign: data.reverse ? "right" : "inherit" }}
      alignItems="center"
      className={classes.root}
      justifyContent="center"
    >
      <Grid item md={6} sm={12}>
        <ServiceInfo
          small
          fromAnim
          title={data.title}
          body1={data.body1}
          body2={data.body2}
          body3={data.body3}
        />
      </Grid>
      <Grid item md={6} sm={12}>
        <Lottie
          style={{
            maxWidth: !smallAnim
              ? matchesSM
                ? "70%"
                : "100%"
              : matchesSM
              ? "60%"
              : "60%",
          }}
          options={data.animation}
          height="100%"
          width="100%"
        />
      </Grid>
    </Grid>
  );
};

export default ServiceAnimation;
