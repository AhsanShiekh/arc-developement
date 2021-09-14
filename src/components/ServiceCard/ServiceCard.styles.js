import { makeStyles } from "@material-ui/core";

const ServiceCardStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50,
    marginBottom: 50,
  },
  learnMore: {
    ...theme.typography.learnButton,
    height: 35,
    fontSize: "0.7em",
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  right: {
    marginRight: "2em",
    [theme.breakpoints.down("xs")]: {
      marginRight: 0,
    },
  },
  specialText: {
    color: theme.palette.secondary.main,
    fontFamily: "Pacifico",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      marginBottom: 45,
    },
  },
  textContainer: {
    paddingRight: 10,
    paddingLeft: 10,
    marginLeft: "5em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      textAlign: "center",
    },
  },
}));

export default ServiceCardStyles;
