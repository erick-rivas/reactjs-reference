import { createMuiTheme } from '@material-ui/core/styles';


const Theme = () =>
{
  return createMuiTheme(
    {
      palette: {
        primary: {
          main: '#00a7df',
          dark: '#0290d1',
          contrastText: '#fff'
        }
      },
      overrides: {
        MuiButtonBase: {
          root: {
            color: 'rgba(0,10,20,0.08)'
          }
        }
      },
    });
}

const checkboxStyle = {
  root: {
    color: '#ccc',
    '&$checked': {
      color: '#92D050',
    },
  },
  checked: {},
  sizeIcon: {
    fontSize: 24,
  }
};


export { Theme, checkboxStyle }