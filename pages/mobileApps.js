import React from "react";
import Lottie from "react-lottie";
import Head from "next/head";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/hidden";

import integrationAnimation from "../src/animations/integrationAnimation/data.json";

import CallToAction from "../src/ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",

    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
}));

const MobileApps = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          iOS/Android App Design and Development | Baz Development
        </title>
        <meta
          name="desription"
          key="description"
          content="Mobile Apps Made Easy | Our cutting-edge mobile app development
           process lets us build beautifully designed, carefully crafted apps for both iOS and Android."
        />
        <meta
          key="og:title"
          property="og:title"
          content="Bringing West Cost Technology to the Midwest | iOS/Android App Development"
        />
        <meta key="og:url" property="og:url" content="baz.com/mobileapps" />
        <link rel="canonical" key="canonical" href="baz.com/mobileapps" />
      </Head>
      <Grid
        item
        container
        direction="row"
        justify={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? "3em" : "2em" }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1em", marginLeft: "-3.5em" }}
          >
            <IconButton
              component={Link}
              href="/customsoftware"
              style={{ backgroundColor: "transparent" }}
              onClick={() => setSelectedIndex(1)}
            >
              <img
                src="/assets/backArrow.svg"
                alt="Back to customsoftware Page"
              />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography
              variant="h2"
              align="center"
              style={{ lineHeight: matchesXS ? 1.1 : undefined }}
            >
              iOS/Android App Development
            </Typography>
          </Grid>
          <Grid item style={{ marginTop: matchesXS ? "2em" : undefined }}>
            <Typography variant="body1" align="center" paragraph>
              Mobile Apps allow you to take yor toold on the go.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Using regulat commercial software leaves you with a lot of stuff
              you do not need, without some of the tuff you do need, and
              ultimately controls that way to work.Without using any software at
              all you risk falling behind competitors and missing out on huge
              savings from increased efficiency
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Our custom solution are designed from the ground up with your
              need, wants, and goals at the core.This collaborative process
              produces finely tuned software that is much more effective at
              imroving your workflow and reducing costs then generalized options
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              We crete exactly what you want, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              component={Link}
              href="/websites"
              style={{ backgroundColor: "transparent" }}
              onClick={() => setSelectedIndex(3)}
            >
              <img
                src="/assets/forwardArrow.svg"
                alt="forward to website page"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
        style={{ marginTop: "4em", marginBottom: "4em" }}
      >
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesSM ? "center" : "left"}
            >
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesSM ? "center" : "left"}
            >
              Our technology enables an innate interconnection between web and
              mobile aplication, putting everything you need right one
              convenient place.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesSM ? "center" : "left"}
            >
              This allows you to extend your reach, reinvent interactionsm and
              develop a stronger relationship with your users than ever before
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie
            options={defaultOptions}
            style={{
              maxWidth: matchesMD ? "15em" : "20em",
              height: matchesMD ? "20em" : undefined,
            }}
          />
        </Grid>
        <Grid item container direction="column" md style={{ marginTop: "3em" }}>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesSM ? "center" : "right"}
            >
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesSM ? "center" : "right"}
            >
              Our cutting-edge development process allows us to create apps for
              iPhone, Android, and tablets - all at the same time.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesSM ? "center" : "right"}
            >
              This significantly reduces costs and creates a more unified brand
              expreience across all devices
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
      >
        <Grid item container direction="column" align="center" md>
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Extend functionality
            </Typography>
          </Grid>
          <Grid item>
            <img src="/assets/swissKnife.svg" alt="swiss image" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          align="center"
          md
          style={{ marginTop: "6em", marginBottom: "6em" }}
        >
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img
              src="/assets/extendAccess.svg"
              alt="access image"
              style={{ maxWidth: matchesXS ? "18em" : "28em" }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          align="center"
          md
          style={{ marginBottom: "6em" }}
        >
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img
              src="/assets/increaseEngagement.svg"
              alt="notification image"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
};

export default MobileApps;
