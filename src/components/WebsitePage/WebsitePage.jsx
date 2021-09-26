import { Grid } from "@material-ui/core";
import React from "react";
import ServiceInfo from "../ServiceInfo/ServiceInfo";
import WebsiteCard from "../WebsiteCard/WebsiteCard";
import WebsitePageStyles from "./WebsitePage.styles";
import analytics from "../../assets/analytics.svg";
import eCommerse from "../../assets/ecommerce.svg";
import outReach from "../../assets/outreach.svg";
import seo from "../../assets/seo.svg";
import CallToAction from "../CallToActions/CallToActions";

const info = {
  title: "Website Development",
  body1:
    "Having a website is a necessity in today’s business world. They give you one central, public location to let people know who you are, what you do, and why you’re the best at it.",
  body2:
    "From simply having your hours posted to having a full fledged online store, making yourself as accessible as possible to users online drives growth and enables you to reach new customers.",
};

const cardsData = [
  {
    title: "Analytics",
    body: "Knowledge is power, and data is 21st Century gold. Analyzing this data can reveal hidden patterns and trends in your business, empowering you to make smarter decisions with measurable effects.",
    img: analytics,
  },
  {
    title: "E-Commerce",
    body: `It’s no secret that people like to shop online.

        In 2017 over $2.3 trillion was spent in e-commerce, and it’s time for your slice of that pie.`,
    img: eCommerse,
    right: true,
  },
  {
    title: "Outreach",
    body: `Draw people in with a dazzling website. Showing off your products online is a great way to help customers decide what’s right for them before visiting in person.`,
    img: outReach,
  },
  {
    title: "Search Engine Optimization",
    body: `How often have you ever been to the second page of Google results?

        If you’re like us, probably never.
        
        Customers don’t go there either, so we make sure your website is designed to end up on top.`,
    img: seo,
    right: true,
  },
];

const WebsitePage = () => {
  const classes = WebsitePageStyles();

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item>
        <ServiceInfo title={info.title} body1={info.body1} body2={info.body2} />
      </Grid>
      <Grid item container direction="column" className={classes.cards}>
        {cardsData.map((card) => (
          <WebsiteCard
            right={card.right}
            title={card.title}
            body={card.body}
            img={card.img}
          />
        ))}
      </Grid>
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
};

export default WebsitePage;
