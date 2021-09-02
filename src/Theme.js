import { createTheme } from "@material-ui/core";

const arcBlue = "#0b72b9";
const arcOrange = "#FFBA60";

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
      fontWeight: 100,
    },
  },
});
