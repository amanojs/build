import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1976d2', // primary color
    },
    secondary: {
      main: '#dc004e', // secondary color
    },
    background: {
      default: '#fffafa', // 背景色
    },
  },
  typography: {
    //fontFamily: ['sans-serif'].join(','),
    /* fontSize: 16,
    h1: {
      fontSize: '1.75rem',
    },
    h2: {
      fontSize: '1.5rem',
    },
    h3: {
      fontSize: '1.25rem',
    },
    h4: {
      fontSize: '1.125rem',
    },
    h5: {
      fontSize: '1rem',
    },
    h6: {
      fontSize: '1rem',
    }, */
  },
});
