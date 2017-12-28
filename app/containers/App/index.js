import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: '#72a0c7',
    primary1Color: "#4680b3"
  },
  flatButton: {
    fontWeight: 600
  }
});

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          {React.Children.toArray(this.props.children)}
        </div>
      </MuiThemeProvider>
    );
  }
}
