import { createTheme } from "@material-ui/core";

const arcBlue = "#0b72b9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";

export default createTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
      white: "#fff",
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    subtitle1: {
      fontSize: "1.25rem",
      fontFamily: "Raleway",
      fontWeight: 300,
      color: arcGrey,
    },
    body1: {
      fontSize: "1.35rem",
      fontFamily: "Raleway",
      fontWeight: 300,
      color: arcGrey,
    },
    body2: {
      fontSize: "1.25rem",
      fontFamily: "Raleway",
      fontWeight: 300,
      color: arcGrey,
    },
    subtitle2: {
      color: "white",
      fontSize: "1.25rem",
      fontWeight: 400,
      fontFamily: "Raleway",
    },
    h3: {
      fontSize: "2.5rem",
      fontWeight: 500,
      color: arcBlue,
      fontFamily: "Pacifico",
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "2.5rem",
      fontWeight: 700,
      color: `${arcBlue}`,
      lineSpacing: 3,
    },
    h5: {
      fontFamily: "Raleway",
      fontSize: "2rem",
      fontWeight: 600,
      color: `${arcBlue}`,
      lineSpacing: 3,
    },
    h6: {
      fontFamily: "Raleway",
      fontSize: "1.5rem",
      fontWeight: 600,
      color: `${arcBlue}`,
      lineSpacing: 3,
    },
    h2: {
      fontFamily: "Raleway",
      fontSize: "2.5rem",
      fontWeight: 700,
      color: `${arcBlue}`,
      lineSpacing: 3,
    },
    learnButton: {
      borderColor: arcBlue,
      color: arcBlue,
      borderWidth: 2,
      textTransform: "none",
      fontFamily: "Roboto",
      borderRadius: 50,
      fontWeight: "bold",
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        overflow: "hidden",
        color: arcBlue,
        fontSize: "1rem",
      },
    },
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: `2px solid ${arcBlue}`,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${arcBlue}`,
        },
      },
    },
  },
});
