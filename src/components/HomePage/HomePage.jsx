import { Grid } from "@material-ui/core";
import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard.jsx";
import HeroSection from "./HeroSection/HeroSection.jsx";
import HomePageStyles from "./HomePage.styles";
import CustomSoftwareDevelopementIcon from "../../assets/Custom Software Icon.svg";
import iosAndroidDevelopementIcon from "../../assets/mobileIcon.svg";
import WebsiteDevelopementIcon from "../../assets/websiteIcon.svg";
import RevolutionBlock from "./RevolutionBlock/RevolutionBlock.jsx";
import InfoBlock from "./InfoBlock/InfoBlock.jsx";
import CallToAction from "../CallToActions/CallToActions.jsx";

const services = [
  {
    title: "Custom Software Developement",
    subtitle1: "Save Energy, Save Time, Save Money",
    subtitle2: "Complete digital solutions, from investigation to",
    specialText: "celebration.",
    imgUrl: CustomSoftwareDevelopementIcon,
  },
  {
    title: "iOS/Android App Development",
    subtitle1: "Extend Functionality. Extend Access. Increase Engagement.",
    subtitle2: [
      "Integrate your web experience or create a standalone app",
      <br />,
      "with either mobile platform.",
    ],
    imgUrl: iosAndroidDevelopementIcon,
  },
  {
    title: "Website Development",
    subtitle1: "Reach More. Discover More. Sell More.",
    subtitle2: "Optimized for Search Engines, built for speed.",
    imgUrl: WebsiteDevelopementIcon,
  },
];

const HomePage = () => {
  const classes = HomePageStyles();

  return (
    <Grid container direction="column">
      <Grid item className={classes.heroContainer}>
        <HeroSection />
      </Grid>
      <Grid item className={classes.servicesContainer}>
        {services.map(
          ({ title, subtitle1, subtitle2, imgUrl, specialText }, i) => (
            <ServiceCard
              title={title}
              subtitle1={subtitle1}
              subtitle2={subtitle2}
              imgUrl={imgUrl}
              key={i}
              html={title === "iOS/Android App Development" ? true : false}
              right={title === "iOS/Android App Development" ? true : false}
              specialText={specialText}
            />
          )
        )}
      </Grid>
      <Grid item>
        <RevolutionBlock />
      </Grid>
      <Grid item>
        <InfoBlock />
      </Grid>
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
};

export default HomePage;
