import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: '#b4514d',
    main: '#ea8079',
    light: '#ffb1a8'
  },
  secondary: {
    contrastText: white,
    dark: '#84b8e2',
    main: '#b7eaff',
    light: '#5288b0'
  },
  success: {
    contrastText: white,
    dark: '#348e87',
    main: '#68bfb7',
    light: '#9af2e9'
  },
  info: {
    contrastText: white,
    dark: '#84b8e2',
    main: '#b7eaff',
    light: '#5288b0'
  },
  warning: {
    contrastText: white,
    dark: '#c88823',
    main: '#ffb854',
    light: '#ffea84'
  },
  error: {
    contrastText: white,
    dark: '#a52b4d',
    main: '#db5d79',
    light: '#ff8ea8'
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600]
  },
  background: {
    default: '#F4F6F8',
    paper: white
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200]
};
