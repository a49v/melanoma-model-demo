import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#ffb923',
    },
    secondary: {
      main: '#222',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
