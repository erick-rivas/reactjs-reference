import * as React from 'react';
import * as ReactDOM from 'react-dom';


import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles';
import { MuiTheme } from 'settings/MuiTheme';

import App from 'components/App';
import Popup from 'react-popup';
import Worker from 'settings/bin/Worker';
import Store from 'settings/bin/Store';

import 'index.css';

const store = Store();
const muiTheme = MuiTheme();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={muiTheme}>
            <Popup />
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
Worker();