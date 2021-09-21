import { makeStyles } from "@material-ui/core";

const ServiceAnimationStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    padding: "2em",

    [theme.breakpoints.down("md")]: {
      width: "70%",
      padding: "0.5em",
      marginTop: "5em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "98%",
      padding: "0.5em",
    },
  },
}));

export default ServiceAnimationStyles;
