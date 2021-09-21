import { makeStyles } from "@material-ui/styles";

const ServicesPageStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "2em",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  title: {
    marginLeft: "2em",
    marginBottom: "1em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  cards: {
    paddingBottom: "5em",
  },
}));

export default ServicesPageStyles;
