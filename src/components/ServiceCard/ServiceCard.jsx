import { Button, Grid, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import React from "react";
import ButtonArrow from "../../ui/5.1 ButtonArrow";
import ServiceCardStyles from "./ServiceCard.styles";

const ServiceCard = ({
  title,
  subtitle1,
  subtitle2,
  imgUrl,
  specialText,
  html,
  right,
}) => {
  const theme = useTheme();
  const classes = ServiceCardStyles();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      alignItems="center"
      className={right ? classes.root : null}
      justifyContent={matchesSM ? "center" : right ? "flex-end" : undefined}
    >
      <Grid item className={classes.textContainer}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="subtitle1">{subtitle1}</Typography>
        <br />
        <Typography variant="subtitle1">
          {subtitle2}
          {specialText ? (
            <span className={classes.specialText}>{specialText}</span>
          ) : null}
        </Typography>
        <Button variant="outlined" className={classes.learnMore}>
          <span style={{ marginRight: 5 }}>Learn More </span>
          <ButtonArrow
            height={15}
            width={15}
            fill={theme.palette.primary.main}
          />
        </Button>
      </Grid>
      <Grid item>
        <img
          className={right ? classes.right : classes.icon}
          src={imgUrl}
          alt="Custom Software Developement"
        />
      </Grid>
    </Grid>
  );
};

export default ServiceCard;
