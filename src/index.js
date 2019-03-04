import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Store from 'store';
import Worker from 'worker';
import { Theme } from 'components/util/Theme';

import Home from 'components/Home';
import Login from 'components/Login';
import Logout from 'components/Logout';

import 'styles/css/index.css'

const store = Store();
const theme = Theme();


ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='/logout' component={Logout} />
                    <Route path='/' component={Home} />
                </Switch>
            </Router>
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('container'));
Worker();


