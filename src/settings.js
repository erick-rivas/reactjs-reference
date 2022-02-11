const IS_PROD = process.env.NODE_ENV === 'production' || process.env.REACT_APP_IS_PROD== "true"

// Default (Development)

let APP_URL = "http://localhost:3003";
let SERVER_URL = "http://localhost:8008"
let GRAPH_URL = SERVER_URL + "/graphql";
let API_URL = SERVER_URL + "/api";
let GA_KEY = "UA-000000000-0";

// Production

if (IS_PROD) {
  APP_URL = "http://localhost:3003";
  SERVER_URL = "http://localhost:8008"
  GRAPH_URL = SERVER_URL + "/graphql";
  API_URL = SERVER_URL + "/api";
  GA_KEY = "UA-000000000-0";
}

export { GRAPH_URL, API_URL, APP_URL, GA_KEY, IS_PROD };