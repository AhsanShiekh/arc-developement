import { makeStyles } from "@material-ui/core";

const AboutPageStyles = makeStyles((theme) => ({
  title: {
    marginTop: "1em",
    marginLeft: "2em",

    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      textAlign: "center",
    },
  },
  qoute: {
    color: theme.palette.primary.main,
    textAlign: "center",
    padding: "2em",
    fontSize: "1.6em",
    fontWeight: 500,
    fontStyle: "Italic",
  },
  content: {
    width: "40%",
    paddingBottom: "5em",
    [theme.breakpoints.down("md")]: {
      width: "75%",
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      width: "95%",
      textAlign: "center",
    },
  },

  image: {
    maxWidth: "30em",

    [theme.breakpoints.down("md")]: {
      paddingBottom: "5em",
    },

    [theme.breakpoints.down("sm")]: {
      maxWidth: "20em",
    },
  },
}));

export default AboutPageStyles;
