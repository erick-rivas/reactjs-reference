const IS_PROD = process.env.NODE_ENV === 'production';

// Default (Development)

let GRAPH_URL = "http://localhost:8008/graphql";
let API_URL = "http://localhost:8008/api";
let APP_URL = "http://localhost:3003";
let GA_KEY = "UA-000000000-0";

// Production

if (IS_PROD) {
  GRAPH_URL = "http://127.0.0.1:8008/graphql";
  API_URL = "http://127.0.0.1:8008/api";
  APP_URL = "http://localhost:3003";
  GA_KEY = "UA-000000000-0";
}

export { GRAPH_URL, API_URL, APP_URL, GA_KEY, IS_PROD };