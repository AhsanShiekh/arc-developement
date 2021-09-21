import { makeStyles } from "@material-ui/core";

const CustomSoftwaresPageStyles = makeStyles((theme) => ({
  badges: {
    width: "100vw",
    height: "40em",
    [theme.breakpoints.down("sm")]: {
      height: "55em",
    },
  },
  rootCause: {
    height: "70em",
    textAlign: "center",
    width: "100vw",
  },
  rootImage: {
    width: "98%",
    marginBottom: "30%",
    height: "max-content",
  },
  rootImageContainer: {
    height: "max-content",
    overflow: "hidden",
  },
  text: {
    margin: "auto",
    width: "40%",
    height: "max-content",
    [theme.breakpoints.down("md")]: {
      width: "45%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
}));

export default CustomSoftwaresPageStyles;
