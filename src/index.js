import * as React from "react";
import * as ReactDOM from "react-dom";

import { GRAPH_URL } from "settings/Config";
import { Provider } from "react-redux";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { MuiTheme } from "settings/MuiTheme";

import App from "components/App";
import Popup from "react-popup";
import Worker from "settings/bin/Worker";
import Store from "settings/bin/Store";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { SeedProvider } from "seed/context";

import "index.css";

const store = Store();
const muiTheme = MuiTheme();
const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: GRAPH_URL,
  request: (operation) => {
    operation.setContext({
      headers: {
        authorization: `Token ${sessionStorage.getItem("token")}`
      }
    })
  },
  cache
});

ReactDOM.render(
    <SeedProvider>
      <Provider store={store}>
          <ApolloProvider client={client}>
            <MuiThemeProvider theme={muiTheme}>
                <Popup />
                <App />
            </MuiThemeProvider>
          </ApolloProvider>
      </Provider>
    </SeedProvider>,
    document.getElementById("root")
);
Worker();