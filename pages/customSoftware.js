import React from "react";
import Lottie from "react-lottie";
import Head from "next/head";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";

import documentAnimation from "../src/animations/documentsAnimation/data";
import scaleAnimation from "../src/animations/scaleAnimation/data";
import automationAnimation from "../src/animations/automationAnimation/data.json";
import uxAnimation from "../src/animations/uxAnimation/data";

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
  itemContainer: {
    maxWidth: "40em",
  },
}));

const CustomSoftware = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          Custom Software Development and Design -Free Estimate
        </title>
        <meta
          name="desription"
          key="description"
          content="Cutting-edge custom soft with gorgeous designs from scratch - let us optimize your business, solving problems instead create new ones"
        />
        <meta
          key="og:title"
          property="og:title"
          content="Bringing West Cost Technology to the Midwest | Custom Software Developemnt"
        />
        <meta key="og:url" property="og:url" content="baz.com/customsoftware" />
        <link rel="canonical" key="canonical" href="baz.com/customsoftware" />
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
              href="/servicesPage"
              style={{ backgroundColor: "transparent" }}
              onClick={() => setSelectedIndex(0)}
            >
              <img src="/assets/backArrow.svg" alt="Back to Services Page" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2" align="center">
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" align="center" paragraph>
              Whether we' re replacing old software or inventig new solutions,
              Arc Development is here to help your business tackle technology
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
              href="/mobileApps"
              style={{ backgroundColor: "transparent" }}
              onClick={() => setSelectedIndex(2)}
            >
              <img
                src="/assets/forwardArrow.svg"
                alt="forward to ios/android app dev page"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        style={{
          marginTop: "7em",
          marginBottom: "7em",
        }}
        alignItems="center"
      >
        <Grid
          item
          container
          md
          direction="column"
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src="/assets/bulb.svg" alt="lightBulb" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          md
          direction="column"
          alignItems="center"
          style={{ maxWidth: "40em", margin: matchesSM ? "4em 0 4em 0 " : 0 }}
        >
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src="/assets/stopWatch.svg" alt="lightBulb" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          md
          direction="column"
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item>
            <img src="/assets/cash.svg" alt="lightBulb" />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems={matchesMD ? "center" : undefined}
        direction={matchesMD ? "column" : "row"}
        justify="space-between"
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesMD ? "column" : "row"}
          md
          style={{ marginBottom: matchesMD ? "5em" : 0 }}
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : undefined}>
                Digital Documents & Data
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : undefined}
                paragraph
              >
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : "left"}
                paragraph
              >
                Billons are spent annually on the purchasing, printing, and
                distribution of paper.On top of the massive environmental imact
                this has, it causes harm to your bottom line as well.
              </Typography>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : undefined}
                paragraph
              >
                By utilizing digital forms and documents you cand remove these
                absolute expenses, accelerate you communication, acnd help the
                Earth
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentsOptions}
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          md
          direction={matchesMD ? "column" : "row"}
        >
          <Grid item md style={{ marginTop: matchesSM ? "5em" : undefined }}>
            <Lottie
              options={scaleOptions}
              style={{ maxHeight: 265, maxWidth: 280 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography
                variant="h4"
                align={matchesSM ? "center" : "right"}
                style={{ marginTop: matchesSM ? "1em" : undefined }}
              >
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : "right"}
                paragraph
              >
                Billons are spent annually on the purchasing, printing, and
                distribution of paper.On top of the massive environmental imact
                this has, it causes harm to your bottom line as well.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        style={{
          marginTop: matchesSM ? "6em" : "5em",
          marginBottom: matchesSM ? "6em" : "5em",
        }}
      >
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <img
              src="/assets/root.svg"
              alt="tree with roots extending out"
              height={matchesSM ? "350em" : "450em"}
              width={matchesSM ? "350em" : "450em"}
            />
          </Grid>
          <Grid
            item
            className={classes.itemContainer}
            style={{ marginTop: matchesMD ? "2em" : undefined }}
          >
            <Typography variant="h4" align="center" gutterBottom>
              Root-Cause Analysis
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Many problems are marely symptms of larger, underlying issues.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              We can help you throughly examine all areas of your business to
              develop a holistic plan for the most effective implementation of
              technology.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        justify="space-between"
        style={{ marginBottom: "2em" }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesMD ? "column" : "row"}
          md
          style={{ marginBottom: matchesMD ? "5em" : 0 }}
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : "left"}>
                Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : "left"}
                style={{ marginTop: matchesSM ? "0.5em" : undefined }}
              >
                Why west time when you dont't have to?
              </Typography>
              <Typography variant="body1" align={matchesSM ? "center" : "left"}>
                We can help ypu identify processes with time or event bassed
                actions which can now easily be automated.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : "left"}
              >
                Increase efficiency increases profits, leaving you more time to
                focus on your business, not busywork.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md style={{ marginBottom: matchesSM ? "2em" : undefined }}>
            <Lottie
              options={automationOptions}
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          md
          direction={matchesMD ? "column" : "row"}
          style={{ marginBottom: "3em" }}
        >
          <Grid item md style={{ marginBottom: matchesSM ? "2em" : undefined }}>
            <Lottie
              options={uxOptions}
              style={{ maxHeight: 365, maxWidth: 180 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography
                variant="h4"
                align="right"
                align={matchesSM ? "center" : "right"}
              >
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align="right"
                paragraph
                align={matchesSM ? "center" : "right"}
              >
                A good design that isn't usable isn't a good design.
              </Typography>
              <Typography
                variant="body1"
                align="right"
                paragraph
                align={matchesSM ? "center" : "right"}
              >
                So why are so many pieces of software complicated, confusing,
                and frustrating?
              </Typography>
              <Typography
                variant="body1"
                align="right"
                paragraph
                align={matchesSM ? "center" : "right"}
              >
                Be prioritizing users and the real ways the interact with
                technology we' re able to develop unique, personable experiences
                that solve problems rather than create new ones
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;
