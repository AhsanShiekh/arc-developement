import {
  Grid,
  IconButton,
  Typography,
  Hidden,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";
import ServiceInfoStyles from "./ServiceInfo.styles";
import backArrow from "../../assets/backArrow.svg";
import forwardArrow from "../../assets/forwardArrow.svg";
import { useTheme } from "@material-ui/styles";

const ServiceInfo = ({
  title,
  body1,
  body2,
  body3,
  body4,
  small,
  width,
  right,
  fromAnim,
}) => {
  const classes = ServiceInfoStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      style={{ textAlign: right ? "right" : "inherit" }}
      alignItems="flex-start"
      direction="row"
      className={classes.root}
    >
      {!small && (
        <Grid item component={Hidden} smDown>
          <IconButton>
            <img className={classes.arrow} src={backArrow} alt="Back Arrow" />
          </IconButton>
        </Grid>
      )}
      <Grid
        item
        container
        direction="column"
        className={classes.content}
        style={
          (fromAnim ? { padding: 0 } : undefined,
          width ? { width: width } : undefined)
        }
      >
        <Typography variant={small ? "h5" : "h4"}>{title}</Typography>
        <br />
        <Typography variant={small ? "body2" : "body1"}>{body1}</Typography>
        <br />
        <Typography variant={small ? "body2" : "body1"}>{body2}</Typography>
        <br />
        {body3 ? (
          <>
            {" "}
            <Typography variant={small ? "body2" : "body1"}>{body3}</Typography>
            <br />{" "}
          </>
        ) : null}
        {body4 ? (
          <>
            {" "}
            <Typography variant={small ? "body2" : "body1"}>{body4}</Typography>
            <br />{" "}
          </>
        ) : null}
      </Grid>
      {!small && (
        <Grid item component={Hidden} smDown>
          <IconButton>
            <img
              className={classes.arrow}
              src={forwardArrow}
              alt="Forward Arrow"
            />
          </IconButton>
        </Grid>
      )}
    </Grid>
  );
};

export default ServiceInfo;
