import { makeStyles } from "@material-ui/core";

const FooterStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    zIndex: 1302,
    position: "relative",
  },
  Link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  socialLink: {
    height: "4em",
    widows: "4em",
    color: "white",
    cursor: "pointer",

    [theme.breakpoints.down("md")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
  adornment: {
    width: "25em",
    verticalAlign: "Bottom",

    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "15em",
    },
  },
  gridContainer: {
    position: "absolute",
  },
  socialMediaIcons: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",

    [theme.breakpoints.down("md")]: {
      right: "0.6em",
    },
  },
  gridItem: {
    margin: "3em",
  },
}));

export default FooterStyles;
