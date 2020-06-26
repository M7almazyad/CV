import React from 'react';
import  {render} from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
const theme=createMuiTheme({
    palette:{
        primary:blue
    }
});

render(
    <MuiThemeProvider theme={theme}>
        <App/>
    </MuiThemeProvider>,
    document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
