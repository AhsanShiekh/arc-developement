import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import React from "react";
import AboutPageStyles from "./AboutPage.styles";
import history from "../../assets/history.svg";
import CallToAction from "../CallToActions/CallToActions";
import { useTheme } from "@material-ui/styles";

const AboutPage = () => {
  const classes = AboutPageStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h2" className={classes.title}>
          About us
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" className={classes.qoute}>
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. Arc Development will use that
          principle to provide fast, modern, inexpensive, and aesthetic software
          to the Midwest and beyond.
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item className={classes.content}>
          <Typography variant="h4">History</Typography>
          <Typography variant="body1">
            We're the new kid on the block
          </Typography>
          <br />
          <Typography variant="body1">
            Founded in 2019, we’re ready to get our hands on the world’s
            business problems.
          </Typography>
          <br />
          <Typography variant="body1">
            It all started with one question: Why aren’t all businesses using
            available technology? There are many different answers to that
            question: economic barriers, social barriers, educational barriers,
            and sometimes institutional barriers.
          </Typography>
          <br />
          <Typography variant="body1">
            We aim to be a powerful force in overcoming these obstacles. Recent
            developments in software engineering and computing power, compounded
            by the proliferation of smart phones, has opened up infinite worlds
            of possibility. Things that have always been done by hand can now be
            done digitally and automatically, and completely new methods of
            interaction are created daily. Taking full advantage of these
            advancements is the name of the game.
          </Typography>
          <br />
          <Typography variant="body1">
            All this change can be a lot to keep up with, and that’s where we
            come in.
          </Typography>
        </Grid>
        <Grid item>
          <img className={classes.image} src={history} alt="History SVG" />
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
};

export default AboutPage;
