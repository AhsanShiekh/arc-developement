import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import React from "react";
import ServiceBadge from "../ServiceBadge/ServiceBadge";
import bulb from "../../assets/bulb.svg";
import watch from "../../assets/stopwatch.svg";
import ServiceInfo from "../ServiceInfo/ServiceInfo";
import cash from "../../assets/cash.svg";
import CustomSoftwaresPageStyles from "./CustomSoftwaresPage.styles";
import { useTheme } from "@material-ui/styles";
import ServiceAnimation from "../ServiceAnimation/ServiceAnimation";
import digitalMarketingAnimation from "../../animations/documentsAnimation/data";
import scaleAnimation from "../../animations/scaleAnimation/data.json";
import CallToAction from "../CallToActions/CallToActions";
import root from "../../assets/root.svg";
import automationAnimation from "../../animations/automationAnimation/data.json";
import userDesignAnimation from "../../animations/uxAnimation/data";

const getAnimData = (animation) => {
  return {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
};

const serviceData = {
  title: "Custom Software Development",
  body1:
    "Whether we’re replacing old software or inventing new solutions, Arc Development is here to help your business tackle technology.",
  body2:
    "Using regular commercial software leaves you with a lot of stuff you don’t need, without some of the stuff you do need, and ultimately controls the way you work. Without using any software at all you risk falling behind competitors and missing out on huge savings from increased efficiency.",
  body3:
    "Our custom solutions are designed from the ground up with your needs, wants, and goals at the core. This collaborative process produces finely tuned software that is much more effective at improving your workflow and reducing costs than generalized options.",
  body4: "We create exactly what you what, exactly how you want it.",
};
const badges = [
  {
    title: "Save Energy",
    img: bulb,
  },
  {
    title: "Save Time",
    img: watch,
  },
  {
    title: "Save Money",
    img: cash,
  },
];
const firstAnimRow = [
  {
    title: "Digital Documents & Data",
    body1: "Reduce Errors. Reduce Waste. Reduce Costs.",
    body2:
      "Billions are spent annually on the purchasing, printing, and distribution of paper. On top of the massive environmental impact this has, it causes harm to your bottom line as well.",
    body3:
      "By utilizing digital forms and documents you can remove these obsolete expenses, accelerate your communication, and help the Earth. Scale Whether you’re a large brand, just getting started, or taking off right now, our application architecture ensures pain-free growth and reliability.",
    animation: getAnimData(digitalMarketingAnimation),
  },
  {
    title: "Scale",
    body1:
      "Whether you’re a large brand, just getting started, or taking off right now, our application architecture ensures pain-free growth and reliability",
    animation: getAnimData(scaleAnimation),
    reverse: true,
  },
];
const secondAnimRow = [
  {
    title: "Automation",
    body1: "Why waste time when you don’t have to?",
    body2:
      "We can help you identify processes with time or event based actions which can now easily be automated.",
    body3:
      "Increasing efficiency increases profits, leaving you more time to focus on your business, not busywork.",
    animation: getAnimData(automationAnimation),
  },
  {
    title: "User Experience Design",
    body1: "A good design that isn’t usable isn’t a good design.",
    body2:
      "So why are so many pieces of software complicated, confusing, and frustrating?",
    body3:
      "By prioritizing users and the real ways they interact with technology we’re able to develop unique, personable experiences that solve problems rather than create new ones.",
    animation: getAnimData(userDesignAnimation),
    reverse: true,
  },
];

const CustomSoftwaresPage = () => {
  const classes = CustomSoftwaresPageStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const { title, body1, body2, body3, body4 } = serviceData;
  return (
    <Grid container direction="column">
      <Grid item>
        <ServiceInfo
          title={title}
          body1={body1}
          body2={body2}
          body3={body3}
          body4={body4}
        />
      </Grid>
      <Grid
        item
        justifyContent="space-around"
        alignItems="center"
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.badges}
      >
        {badges.map((badge, i) => (
          <ServiceBadge key={i} title={badge.title} img={badge.img} />
        ))}
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        style={{ width: "100vw" }}
        alignItems={matchesMD ? "center" : undefined}
      >
        {firstAnimRow.map((data, i) => (
          <ServiceAnimation key={i} data={data} />
        ))}
      </Grid>
      <Grid
        item
        container
        className={classes.rootCause}
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          item
          container
          direction="column"
          className={classes.rootCauseContent}
        >
          <Grid item className={classes.rootImageContainer}>
            <img
              height={matchesXS ? "300px" : "450em"}
              width={matchesXS ? "300px" : "450em"}
              src={root}
              alt="Root Tree"
            />
          </Grid>
          <Grid
            item
            container
            direction="column"
            style={{ marginTop: "1.5em" }}
          >
            <Typography variant="h4" className={classes.text}>
              Root Cause Analysis
            </Typography>
            <Typography variant="body1" className={classes.text}>
              Many problems are merely symptoms of larger, underlying issues.
            </Typography>
            <br />
            <Typography variant="body1" className={classes.text}>
              We can help you thoroughly examine all areas of your business to
              develop a holistic plan for the most effective implementation of
              technology.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        style={{ width: "100vw" }}
        alignItems={matchesMD ? "center" : undefined}
      >
        {secondAnimRow.map((data, i) => (
          <ServiceAnimation
            smallAnim={data.title === "User Experience Design" ? true : false}
            key={i}
            data={data}
          />
        ))}
      </Grid>
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
};

export default CustomSoftwaresPage;
