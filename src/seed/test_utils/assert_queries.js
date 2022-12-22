import { normalizeQuery, getHeaderNames } from "seed/gql";
import assert from 'assert';
import { fetchQuery } from "./fetch";
const queries = require("seed/gql/queries");

const getCountQuery = (model) => {
  const gqlQuery = `{
    ${model}Count {
      count
    }
  }`;
  return gqlQuery;
}

const getDetailQuery = (model) => {

  let gqlQuery = "";

  for(let queryName in queries) 
    if(queryName.toLocaleLowerCase() == model.toLocaleLowerCase()) {
      gqlQuery = queries[queryName];
      break;
    }

  return gqlQuery;

}

const dotNotate = (obj, target, prefix) => {

  target = target || {};
  prefix = prefix || "";

  Object.keys(obj).forEach(function(key) {
    if(typeof(obj[key]) == "object" && obj[key] != null)
      dotNotate(obj[key],target,prefix + key + ".");
    else
      return target[prefix + key] = obj[key];
  });

  return target;

}

const assertModel = async ({
  model = null,
  id = null,
  expected = {},
  token = null,
  assertEmpty = false,
  query = null
}) => {

  model = model.toLocaleLowerCase();

  if(query == null) {

    const gqlQuery = getDetailQuery(model);

    if(gqlQuery == "") throw new Error(`Query of ${model} not found`);

    const normalizedQuery = normalizeQuery(gqlQuery);
    const queryName = getHeaderNames(normalizedQuery)[0];
    const wrapper = `${queryName}(id: ${id})`;
    query = normalizedQuery.replace(queryName, wrapper);

  }

  let data = await fetchQuery({ query, token });

  if(!assertEmpty) {
    data = dotNotate(data[model]);
    for(let key in expected)
      assert.equal(data[key], expected[key]);
  }
  else {
    assert.equal(data[model], expected);
  }

}

const assertModelCount = async ({
  model = null,
  query = null,
  expected = 0,
  token = null
}) => {

  model = model.toLocaleLowerCase();
  if(query == null) query = getCountQuery(model);

  let data = await fetchQuery({ query, token });
  let count = data[`${model}Count`].count;
  
  assert.equal(count, expected);

}

export { assertModel, assertModelCount };