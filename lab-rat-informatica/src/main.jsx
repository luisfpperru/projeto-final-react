import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#076ba8',
      main: '#002135',
      dark: '#021019',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#ffffff',
      dark: '#ba000d',
      contrastText: '#000',
    },
    tertiary: {
      light: '#ff7961',
      main: '#f48fb1',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
