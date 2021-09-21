import { makeStyles } from "@material-ui/core";

const WebsiteCardStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10em",
    marginBottom: "10em",
    marginRight: "5em",
    marginLeft: "5em",
  },
  bodyText: {
    width: "25em",
    marginLeft: "1em",
    margin: 0,

    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "auto",
      width: "95%",
      textAlign: "center",
    },
  },
  imageContainer: {
    textAlign: "center",
  },
  image: {},
}));

export default WebsiteCardStyles;
