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
    h4: {
      fontSize: "1.75rem",
      fontWeight: 700,
      color: arcBlue,
      fontFamily: "Raleway",
    },
    subtitle1: {
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
});
