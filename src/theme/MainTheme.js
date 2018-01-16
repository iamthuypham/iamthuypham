import { createMuiTheme } from 'material-ui/styles';
import breakpoints from './breakpoints';

export default createMuiTheme({
  "direction": "ltr",
  palette: {
    primary: {
      main: "#388e3c",
      dark: "#00600f",
      light: "#6abf69"
    },
    accent:{
      main: "#ec407a",
      dark: "#b4004e",
      light: "#ff77a9"
    },
    error: {
      dark: "",
      light: ""
    },
    common: {
      text: "#333"
    }
  },
  typography: {
    display4: {},
    display3: {},
    display2: {
      color: '#333',
      fontSize: '1.1em',
      fontFamily: "\"Open Sans\", sans-serif",
      lineHeight: 1.4
    },
    display1: {
      color: '#333',
      fontSize: '1em',
      fontWeight: 600,
      fontFamily: "\"Open Sans\", sans-serif",
      lineHeight: 1.2
    },
    headline: {},
    title: {
      fontSize: '1.3em',
      fontWeight: 600,
      fontFamily: "\"Open Sans\", sans-serif",
      lineHeight: 1.2
    },
    subheading: {},
    body1: {
      color: 'rgba(0,0,0,0.7)',
      fontSize: '0.9em',
      fontWeight: 400,
      fontFamily: "\"Open Sans\", sans-serif",
      lineHeight: 1.4
    },
    body2: {
      color: 'rgba(0,0,0,0.7)',
      fontSize: '0.8em',
      fontWeight: 200,
      fontFamily: "\"Open Sans\", sans-serif",
      lineHeight: 1.4
    },
    caption: {},
    button: {}
  },
  breakpoints: {
    keys: Object.keys(breakpoints),
    values: breakpoints,
  },
  spacing: 8,
  custom: {},
  overrides: {}
})