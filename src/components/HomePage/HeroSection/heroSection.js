import { makeStyles } from "@material-ui/core";

const HeroSectionStyles = makeStyles((theme) => ({
  heroSection: {
    height: "max-content",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2em",
    },
  },
  animation: {
    minWidth: "21em",
    maxWidth: "50em",
    marginLeft: "10%",
    paddingTop: 50,
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimateButton: {
    color: "white",
    backgroundColor: theme.palette.secondary.main,
    fontFamily: "Pacifico",
    fontSize: "1rem",
    textTransform: "none",
    borderRadius: 50,
    height: 45,
    width: 145,

    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  heroContent: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  learnMore: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  buttons: {
    marginTop: "2em",
  },
}));

export default HeroSectionStyles;
