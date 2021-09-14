import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import React from "react";
import ButtonArrow from "../../../ui/5.1 ButtonArrow";
import RevolutionBlockStyles from "./RevolutionBlock.styles";

const RevolutionBlock = () => {
  const classes = RevolutionBlockStyles();
  const theme = useTheme();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100em", overflow: "hidden" }}
    >
      <Card className={classes.card}>
        <CardContent>
          <Grid container direction="column" style={{ textAlign: "center" }}>
            <Typography
              gutterBottom
              variant="h3"
              style={{ overflow: "hidden" }}
            >
              The Revolution
            </Typography>
            <Typography variant="subtitle1">
              Visionary insights coupled with cutting-edge technology is a
              recipe for revolution.
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
        </CardContent>
      </Card>
      <div className={classes.background} />
    </Grid>
  );
};

export default RevolutionBlock;
