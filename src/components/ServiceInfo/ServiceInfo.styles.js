import { makeStyles } from "@material-ui/core";

const ServiceInfoStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2em",
  },
  arrow: {
    height: 25,
    width: 25,
    marginLeft: "0.8em",
  },
  content: {
    width: "40em",
    marginLeft: "0.8em",

    [theme.breakpoints.down("sm")]: {
      width: "40em",
    },

    [theme.breakpoints.down("sm")]: {
      width: "95vw",
      marginRight: "2.5vw",
      marginLeft: "2.5vw",
      textAlign: "center",
    },
  },
}));

export default ServiceInfoStyles;
