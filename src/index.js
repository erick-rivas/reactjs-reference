import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Theme } from 'util/Theme';

import App from 'components/App';
import Worker from 'util/Worker';
import Store from 'util/Store';

import 'styles/css/index.css';

const store = Store();
const theme = Theme();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
Worker();
