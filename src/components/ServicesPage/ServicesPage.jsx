import { Grid, Typography } from "@material-ui/core";
import React from "react";
import ServicesPageStyles from "./ServicesPage.styles";
import { services } from "../HomePage/HomePage";
import ServiceCard from "../ServiceCard/ServiceCard";
import CallToAction from "../CallToActions/CallToActions";

const ServicesPage = () => {
  const classes = ServicesPageStyles();

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item>
        <Typography className={classes.title} variant="h2">
          Services
        </Typography>
      </Grid>
      <Grid item className={classes.cards}>
        {services.map(
          ({ title, subtitle1, subtitle2, imgUrl, specialText, to }, i) => (
            <ServiceCard
              title={title}
              subtitle1={subtitle1}
              subtitle2={subtitle2}
              imgUrl={imgUrl}
              to={to}
              key={i}
              html={title === "iOS/Android App Development" ? true : false}
              right={title === "iOS/Android App Development" ? true : false}
              specialText={specialText}
            />
          )
        )}
      </Grid>
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
};

export default ServicesPage;
