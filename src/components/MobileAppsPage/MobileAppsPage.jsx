import { Grid, useMediaQuery } from "@material-ui/core";
import React from "react";
import ServiceInfo from "../ServiceInfo/ServiceInfo";
import integrationAnim from "../../animations/integrationAnimation/data.json";
import Lottie from "react-lottie";
import { useTheme } from "@material-ui/styles";
import MobileAppsPageStyles from "./MobileAppsPage.styles";
import swissKnife from "../../assets/swissKnife.svg";
import extendAccess from "../../assets/extendAccess.svg";
import increaseEngagement from "../../assets/increaseEngagement.svg";
import ServiceBadge from "../ServiceBadge/ServiceBadge";

const info = {
  title: "iOS/Android App Development",
  body1: "Mobile apps allow you to take your tools on the go",
  body2:
    "Whether you want an app for your customers, employees, or yourself, we can build cross-platform native solutions for any part of your business process. This opens you up to a whole new world of possibilities by taking advantage of phone features like the camera, GPS, push notifications, and more.",
  body3: "Convenience. Connection.",
};
const integration = {
  title: "Integration",
  body1:
    "Our technology enables an innate interconnection between web and mobile applications, putting everything you need right in one convenient place.",
  body2:
    "This allows you to extend your reach, reinvent interactions, and develop a stronger relationship with your users than ever before",
};
const platformSupport = {
  title: "Simultaneous Platform Support",
  body1:
    "Our cutting-edge development process allows us to create apps for iPhone, Android, and tablets — all at the same time.",
  body2:
    "This significantly reduces costs and creates a more unified brand experience across all devices.",
};
const animOptions = {
  loop: true,
  autoplay: true,
  animationData: integrationAnim,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const badges = [
  {
    title: "Extend Functionality",
    img: swissKnife,
  },
  {
    title: "Extend Access",
    img: extendAccess,
  },
  {
    title: "Increase Engagement",
    img: increaseEngagement,
  },
];

const MobileAppsPage = () => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const classes = MobileAppsPageStyles();

  return (
    <Grid container>
      <Grid item>
        <ServiceInfo
          title={info.title}
          body1={info.body1}
          body2={info.body2}
          body3={info.body3}
        />
      </Grid>
      <Grid
        item
        container
        justifyContent="space-around"
        alignItems="center"
        className={classes.rowContainer}
        direction={matchesMD ? "column" : "row"}
      >
        <Grid item>
          <ServiceInfo
            small
            width={matchesMD ? undefined : "30em"}
            title={integration.title}
            body1={integration.body1}
            body2={integration.body2}
            body3={integration.body3}
          />
        </Grid>
        <Grid item>
          <Lottie options={animOptions} width="15em" />
        </Grid>
        <Grid item>
          <ServiceInfo
            small
            right={matchesMD ? false : true}
            width={matchesMD ? undefined : "30em"}
            title={platformSupport.title}
            body1={platformSupport.body1}
            body2={platformSupport.body2}
            body3={platformSupport.body3}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        justifyContent="space-around"
        style={{ marginTop: "10em", marginBottom: "15em" }}
        direction={matchesMD ? "column" : "row"}
      >
        {badges.map((badge, i) => (
          <ServiceBadge key={i} large title={badge.title} img={badge.img} />
        ))}
      </Grid>
    </Grid>
  );
};

export default MobileAppsPage;
