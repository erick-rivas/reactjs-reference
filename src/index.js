import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles';
import { MuiTheme } from 'util/settings/MuiTheme';

import App from 'components/App';
import Worker from 'util/bin/Worker';
import Store from 'util/bin/Store';

import 'index.css';

const store = Store();
const muiTheme = MuiTheme();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={muiTheme}>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
Worker();