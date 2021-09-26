import {
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import React from "react";
import CallToAction from "../CallToActions/CallToActions";
import ContactPageStyles from "./ContactPage.styles";
import { Call, Email, Send } from "@material-ui/icons";

const ContactPage = () => {
  const theme = useTheme();
  const classes = ContactPageStyles();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      direction={matchesMD ? "column" : "row"}
      className={classes.root}
    >
      <Grid
        item
        container
        lg={4}
        md={12}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item className={classes.contentContainer}>
          <Typography variant="h4">Contact Us</Typography>
          <Typography
            variant="body1"
            style={{ color: theme.palette.primary.main }}
          >
            We're Waiting
          </Typography>
          <div className={classes.numberEmailContainer}>
            <div className={classes.numberEmail}>
              <Call />
              <Typography
                style={{ color: theme.palette.primary.main, marginLeft: 10 }}
                variant="subtitle1"
              >
                +92 308 4211642
              </Typography>
            </div>
            <div className={classes.numberEmail}>
              <Email />
              <Typography
                style={{ color: theme.palette.primary.main, marginLeft: 10 }}
                variant="subtitle1"
              >
                ahsanshiekh94@gmail.com
              </Typography>
            </div>
          </div>

          <div className={classes.formContainer}>
            <TextField
              className={classes.textField}
              fullWidth
              variant="standard"
              label="Name"
            />
            <TextField
              className={classes.textField}
              fullWidth
              variant="standard"
              label="Email"
            />
            <TextField
              className={classes.textField}
              fullWidth
              variant="standard"
              label="Suject"
            />
            <TextField
              multiline
              rows={4}
              variant="standard"
              className={classes.msg}
              InputProps={{ disableUnderline: true }}
            />
            <Button
              className={classes.button}
              activeClassName={classes.activeEstimate}
              variant="contained"
              color="secondary"
            >
              Send Message
              <Send className={classes.sendIcon} />
            </Button>
          </div>
        </Grid>
      </Grid>
      <Grid item lg={8} md={12}>
        <CallToAction />
      </Grid>
    </Grid>
  );
};

export default ContactPage;
