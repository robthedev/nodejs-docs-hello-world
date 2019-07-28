import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

const DefaultTheme = createMuiTheme({
  overrides: {},
  palette: {
    primary: {
      main: '#f00',
      light: '#464558',
      dark: '#000006'
    },
    secondary: {
      main: '#1d8cf8',
      light: '#6ebcff',
      dark: '#3358f4'
    },
    warning: {
      main: '#ffc071',
      dark: '#ffb25e'
    },
    error: {
      xLight: red[50],
      main: red[500],
      dark: red[700]
    },
    success: {
      xLight: green[50],
      dark: green[700]
    },
    background: {
      default: red
    },
    typography: {
      fontFamily: "'Roboto Condensed', sans-serif",
      fontSize: 14,
      fontWeightLight: 300, // Work Sans
      fontWeightRegular: 400, // Work Sans
      fontWeightMedium: 700, // Roboto Condensed
      fontFamilySecondary: "'Work Sans', sans-serif",
      useNextVariants: true
    }
  }
});

export default DefaultTheme;
