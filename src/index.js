/*
__Seed builder__
  AUTO_GENERATED (Read only)
  Modify via builder
*/

import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import * as React from "react";
import * as Sentry from "@sentry/react";
import { createRoot } from 'react-dom/client';

import { GRAPH_URL, APP_URL, IS_PROD } from "settings";
import { SENTRY_DSN, SENTRY_SAMPLE_RATE } from "settings";

import App from "components/App";
import { ApolloClient } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache, createHttpLink } from "@apollo/client";
import { SeedProvider } from "seed/context";
import { setContext } from '@apollo/client/link/context';

import { Route } from 'react-router';
import { BrowserRouter } from "react-router-dom";

import "styles/index.css";

/* Graphql setup */

const cache = new InMemoryCache();
const httpLink = createHttpLink({ uri: GRAPH_URL });
const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Token ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache
});

Sentry.init({
  dsn: SENTRY_DSN,
  integrations: [
    new Sentry.BrowserTracing({
      tracePropagationTargets: [`${APP_URL}/api`],
    }),
    new Sentry.Replay(),
  ],
  environment: IS_PROD ? "production" : "development",
  tracesSampleRate: SENTRY_SAMPLE_RATE,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <SeedProvider>
    <ApolloProvider client={client}>
      <BrowserRouter >
        <Route render={({ history }) => <App history={history} />} />
      </BrowserRouter>
    </ApolloProvider>
  </SeedProvider>,
);
start();

/*  Worker setup  */

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
  window.location.hostname === "[::1]" ||
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
);

function registerValidSW(swUrl) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        installingWorker.onstatechange = () => {
          if (installingWorker.state === "installed") {
            if (navigator.serviceWorker.controller) {
              console.log("New content is available; please refresh.");
            } else {
              console.log("Content is cached for offline use.");
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error("Error during service worker registration:", error);
    });
}

function checkValidServiceWorker(swUrl) {
  fetch(swUrl)
    .then((response) => {
      if (
        response.status === 404 ||
        response.headers.get("content-type").indexOf("javascript") === -1
      ) {
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        registerValidSW(swUrl);
      }
    })
    .catch(() => {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    });
}

function register() {
  if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
    if (publicUrl.origin !== window.location.origin) {
      return;
    }

    window.addEventListener("load", () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
      if (isLocalhost) {
        checkValidServiceWorker(swUrl);
        navigator.serviceWorker.ready.then(() => {
          console.log(
            "This web app is being served cache-first by a service " +
            "worker. To learn more, visit https://goo.gl/SC7cgQ"
          );
        });
      } else {
        registerValidSW(swUrl);
      }
    });
  }
}

function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    });
  }
}

function start(){
    register();
    unregister();
}