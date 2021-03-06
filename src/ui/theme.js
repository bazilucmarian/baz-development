import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
      color: "white",
      textDecoration: "none",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
    h2: {
      fontFamily: "Raleway",
      fontSize: "2.5rem",
      color: `${arcBlue}`,
      fontWeight: 700,
      lineHeight: "1.5em",
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: arcBlue,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: `${arcBlue}`,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: "300",
      color: arcGrey,
    },
    subtitle2: {
      color: "white",
      fontSize: "1.25rem",
      fontWeight: "300",
    },
    body1: {
      fontSize: "1.25rem",
      color: arcGrey,
      fontWeight: 300,
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Raleway",
      color: arcBlue,
      lineHeight: "1",
    },
    learnButton: {
      borderColor: arcBlue,
      borderWidth: "2",
      color: arcBlue,
      textTransform: "none",
      borderRadius: "50px",
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
    body1: {
      fontSize: "1.25rem",
      color: arcGrey,
      fontWeight: 300,
    },
    caption: {
      color: arcGrey,
      fontWeight: 300,
      fontSize: "1rem",
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: arcBlue,
        fontSize: "1rem",
      },
    },
    MuiInput: {
      root: {
        color: arcGrey,
        fontSize: "1rem",
        fontWeight: 300,
      },
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
