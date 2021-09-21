import { makeStyles } from "@material-ui/core";

const MobileAppsPageStyles = makeStyles((theme) => ({
  rowContainer: {
    marginTop: "10em",
    marginBottom: "10em",

    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
}));

export default MobileAppsPageStyles;
