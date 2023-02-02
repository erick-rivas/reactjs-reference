import { GRAPH_URL, API_URL } from "settings";
import nodeFetch from 'node-fetch';

const fetch = async (body, token, url, method) => {

  try {

    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json",
      'Authorization': `Token ${token}` 
    };

    if(token == null) delete headers['Authorization'];

    const request = {
      method,
      headers,
      body
    };

    if(method == "GET") delete request.body;

    const response = await nodeFetch(url, request);
    const json = await response.json();
    
    return json.data;
      
  } 
  catch (e) {
    return null;
  }

};

const fetchQuery = async ({
  query = "", 
  token = null, 
  method = "POST"
}) => {
  const data = await fetch(JSON.stringify({ query }), token, GRAPH_URL, method);
  return data;
};

const fetchApi = async ({
  body = {},
  token = null,
  method = "POST",
  endpoint = ""
}) => {
  const data = await fetch(JSON.stringify({ body }), token, API_URL + endpoint, method);
  return data;
};

export { fetchQuery, fetchApi };