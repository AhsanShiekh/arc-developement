import { makeStyles } from "@material-ui/styles";
import CTABackground from "../../assets/background.jpg";
import MobileCTABackground from "../../assets/mobileBackground.jpg";

const CallToActionStyles = makeStyles((theme) => ({
  learnMore: {
    ...theme.typography.learnButton,
    height: 35,
    fontSize: "0.7em",
    padding: 5,
    width: 140,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  background: {
    backgroundImage: `url(${CTABackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "85vh",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${MobileCTABackground})`,
    },
  },
  freeEstimate: {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    fontFamily: "Pacifico",
    height: 80,
    width: 205,
    borderRadius: 50,

    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

export default CallToActionStyles;
