import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import React from "react";
import WebsiteCardStyles from "./WebsiteCard.styles";

const WebsiteCard = ({ title, img, body, right }) => {
  const classes = WebsiteCardStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      item
      direction={matchesSM ? "column" : "row"}
      alignItems="center"
      className={classes.root}
      style={{
        marginLeft: !right && !matchesSM ? "5em" : 0,
        marginRight: right && !matchesSM ? "5em" : 0,
      }}
      justifyContent={right ? "flex-end" : "flex-start"}
    >
      <Grid item className={classes.imageContainer}>
        <Grid item>
          <Typography variant="h5">{title}</Typography>
        </Grid>
        <Grid item>
          <img className={classes.image} src={img} alt="Anylitics SVG" />
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="body2" className={classes.bodyText}>
          {body}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default WebsiteCard;
