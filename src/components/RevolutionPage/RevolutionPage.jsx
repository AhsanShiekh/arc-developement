import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import React from "react";
import RevolutionPageStyles from "./RevolutionPage.styles";
import vision from "../../assets/vision.svg";
import technologyAnim from "../../animations/technologyAnimation/data.json";
import Lottie from "react-lottie";
import { useTheme } from "@material-ui/styles";
import CallToAction from "../CallToActions/CallToActions";

const animOptions = {
  loop: true,
  autoplay: true,
  animationData: technologyAnim,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const RevolutionPage = () => {
  const classes = RevolutionPageStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item>
        <Typography variant="h2" className={classes.title}>
          The Revolution
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        justifyContent="space-around"
      >
        <Grid item>
          <img src={vision} className={classes.visionImage} alt="Vision SVG" />
        </Grid>
        <Grid item className={classes.visionText}>
          <Typography variant="h2">Vision</Typography>
          <Typography variant="body1">
            The rise of computers, and subsequently the Internet, has completely
            altered every aspect of human life. This has increased our comfort,
            broadened our connections, and reshaped how we view the world.
          </Typography>
          <br />
          <Typography variant="body1">
            What once was confined to huge rooms and teams of engineers now
            resides in every single one of our hands. Harnessing this unlimited
            potential by using it to solve problems and better lives is at the
            heart of everything we do.
          </Typography>
          <br />
          <Typography variant="body1">
            We want to help businesses capitalize on the latest and greatest
            technology. The best way to predict the future is to be the one
            building it, and we want to help guide the world into this next
            chapter of technological expansion, exploration, and innovation.
          </Typography>
          <br />
          <Typography variant="body1">
            By holding ourselves to rigorous standards and pristine quality, we
            can ensure you have the absolute best tools necessary to thrive in
            this new frontier.
          </Typography>
          <br />
          <Typography variant="body1">
            We see a future where every individual has personalized software
            custom tailored to their lifestyle, culture, and interests, helping
            them overcome life’s obstacles. Each project is a step towards that
            goal.
          </Typography>
          <br />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item className={classes.technologyText}>
          <Typography variant="h2">Technology</Typography>
          <Typography variant="body1">
            In 2013, Facebook invented a new way of building websites. This new
            system, React.js, completely revolutionizes the process and practice
            of website development.
          </Typography>
          <br />
          <Typography variant="body1">
            Instead of chaining together long individual pages, like traditional
            websites, React websites are built with little chunks of code called
            components. These components are faster, easier to maintain, and are
            easily reused and customized, each serving a singular purpose.
          </Typography>
          <br />
          <Typography variant="body1">
            Two years later they shocked the world by releasing a similar
            system, React Native, for producing iOS and Android apps. Instead of
            having to master two completely separate development platforms, you
            can leverage the knowledge you already possessed from building
            websites and reapply it directly! This was a huge leap forward.
          </Typography>
          <br />
          <Typography variant="body1">
            This technology is now being used by companies like AirBnB,
            Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when
            Facebook purchased Instagram large portions of it were even rebuilt
            using React.
          </Typography>
          <br />
          <Typography variant="body1">
            Developers have since built on top of these systems by automating
            project setup and deployment, allowing creators to focus as much as
            possible on their work itself.
          </Typography>
          <br />
          <Typography variant="body1">
            These technical advancements translate into savings by significantly
            reducing the workload and streamlining the workflow for developing
            new pieces of software, while also lowering the barrier to entry for
            mobile app development.
          </Typography>
          <br />
          <Typography variant="body1">
            This puts personalization in your pocket — faster, better, and more
            affordable than ever before.
          </Typography>
          <br />
        </Grid>
        <Grid item>
          <Lottie
            options={animOptions}
            height={matchesMD ? "90%" : "100%"}
            width={matchesMD ? "90%" : "40em"}
          />
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
};

export default RevolutionPage;
