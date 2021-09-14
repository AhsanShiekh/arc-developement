import { makeStyles } from "@material-ui/core";
import InfoBackground from "../../../assets/infoBackground.svg";

const InfoBlockStyles = makeStyles((theme) => ({
  infoBackground: {
    backgroundImage: `url(${InfoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  learnMore: {
    ...theme.typography.learnButton,
    color: "white",
    marginTop: "0.6em",
    borderColor: "white",
  },
}));

export default InfoBlockStyles;
