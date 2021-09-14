import { Button, Grid, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import React from "react";

import ButtonArrow from "../../../ui/5.1 ButtonArrow";
import InfoBlockStyles from "./InfoBlock.styles";

const InfoBlock = () => {
  const classes = InfoBlockStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid
      container
      alignItems="center"
      style={{ height: "80em", overflow: "hidden" }}
    >
      <Grid
        item
        container
        spacing={10}
        style={{
          position: "absolute",
          height: "70%",
          textAlign: matchesXS ? "center" : "inherit",
        }}
        direction={matchesSM ? "column" : "row"}
      >
        <Grid
          item
          sm
          style={{
            marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em",
            textAlign: matchesXS ? "center" : "left",
          }}
        >
          <Typography variant="h2" style={{ color: "white" }}>
            About Us
          </Typography>
          <Typography variant="subtitle2">Let's Get Personal.</Typography>
          <Grid item>
            <Button variant="outlined" className={classes.learnMore}>
              <span style={{ marginRight: 5 }}>Learn More </span>
              <ButtonArrow height={15} width={15} fill="white" />
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          sm
          className={classes.item}
          style={{
            marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
            textAlign: matchesXS ? "center" : "right",
          }}
        >
          <Typography variant="h2" style={{ color: "white" }}>
            Contact Us
          </Typography>
          <Typography variant="subtitle2">Say Hello 🙋</Typography>
          <Grid item>
            <Button variant="outlined" className={classes.learnMore}>
              <span style={{ marginRight: 5 }}>Learn More </span>
              <ButtonArrow height={15} width={15} fill="white" />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.infoBackground} />
    </Grid>
  );
};

export default InfoBlock;
