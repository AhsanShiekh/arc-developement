import { makeStyles } from "@material-ui/core";

const ContactPageStyles = makeStyles((theme) => ({
  root: {
    height: "85vh",

    [theme.breakpoints.down("md")]: {
      height: "max-content",
    },
  },
  numberEmailContainer: {
    marginTop: "1em",
    marginBottom: "1em",
    textAlign: "center",
  },
  contentContainer: {
    width: "80%",
    [theme.breakpoints.down("md")]: {
      width: "55%",
      paddingTop: "3em",
      paddingBottom: "3em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  numberEmail: {
    display: "flex",
    alignItems: "center",
    color: theme.palette.primary.main,
  },
  textField: {
    marginTop: "0.5em",
    marginBottom: "0.5em",
  },
  formContainer: {
    textAlign: "center",
  },
  msg: {
    border: `2px solid ${theme.palette.primary.main}`,
    width: "99%",
    marginTop: "0.5em",
    marginBottom: "0.5em",
  },
  sendIcon: {
    marginLeft: 15,
  },
  button: {
    borderRadius: "50px",
    marginTop: "0.5em",
    marginBottom: "0.5em",
    fontFamily: "Raleway",
    fontWeight: 500,
    textTransform: "none",
    fontSize: "1rem",
    padding: 10,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

export default ContactPageStyles;
