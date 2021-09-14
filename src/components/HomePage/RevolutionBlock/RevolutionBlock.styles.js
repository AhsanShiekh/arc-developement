import { makeStyles } from "@material-ui/core";
import revolution from "../../../assets/repeatingBackground.svg";

const RevolutionBlockStyles = makeStyles((theme) => ({
  learnMore: {
    ...theme.typography.learnButton,
    height: 35,
    width: 150,
    fontSize: "0.7em",
    margin: "auto",
    padding: 5,
    marginTop: 15,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  background: {
    backgroundImage: `url(${revolution})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginTop: "4em",
    height: "100%",
    width: "100%",
  },
  card: {
    position: "absolute",
    padding: "10em",
    overflow: "hidden",
    boxShadow: theme.shadows[10],
    borderRadius: 20,
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%",
    },
  },
}));

export default RevolutionBlockStyles;
