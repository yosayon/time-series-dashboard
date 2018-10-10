import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './dashboard/theme'
import Dashboard from './dashboard/Dashboard'


class App extends Component {
  render(){
    return(
      <MuiThemeProvider theme={theme}>
        <Dashboard />
      </MuiThemeProvider>
    )
  }
}

export default App;
