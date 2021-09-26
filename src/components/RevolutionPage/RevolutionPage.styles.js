import { makeStyles } from "@material-ui/core";

const RevolutionPageStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
  },
  title: {
    fontFamily: "Pacifico",
    marginTop: "1em",
    marginBottom: "1em",
    overflow: "hidden",
    marginLeft: "2em",

    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      textAlign: "center",
    },
  },
  visionImage: {
    maxWidth: "35em",
    [theme.breakpoints.down("md")]: {
      maxWidth: "20em",
      marginTop: "2em",
      marginBottom: "3em",
    },
  },
  visionText: {
    width: "40%",
    textAlign: "right",

    [theme.breakpoints.down("md")]: {
      width: "95%",
      textAlign: "center",
    },
  },
  technologyText: {
    width: "40%",
    marginLeft: "5em",
    [theme.breakpoints.down("md")]: {
      width: "95%",
      textAlign: "center",
      marginLeft: 0,
      marginTop: "7em",
    },
  },
}));

export default RevolutionPageStyles;
