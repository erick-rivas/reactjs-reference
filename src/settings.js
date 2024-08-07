const IS_PROD = process.env.NODE_ENV === "production" || process.env.REACT_APP_IS_PROD== "true"

// Default (Development)

let APP_URL = "http://localhost:3003";
let SERVER_URL = "http://localhost:8008";
let GA_KEY = "G-0000000000";
let SENTRY_DSN = "";
let SENTRY_SAMPLE_RATE = 0.25;

// Production

if (IS_PROD) {
  APP_URL = "http://localhost:3003";
  SERVER_URL = "http://localhost:8008";
  GA_KEY = "G-0000000000";
  SENTRY_DSN = "";
  SENTRY_SAMPLE_RATE = 0.25;
}

let GRAPH_URL = SERVER_URL + "/graphql";
let API_URL = SERVER_URL + "/api";
let WS_URL = (new URL(SERVER_URL).protocol == "https:" ? "wss:" : "ws:") + "//" +  new URL(SERVER_URL).host + "/ws";

export { APP_URL, SERVER_URL, GRAPH_URL, API_URL, WS_URL, GA_KEY, SENTRY_DSN, SENTRY_SAMPLE_RATE, IS_PROD };