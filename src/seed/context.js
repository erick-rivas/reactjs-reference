import React, { createContext, useState } from "react";
import PropTypes from 'prop-types';

const SeedContext = createContext({
  gqlQueries: [],
  addGqlQuery: (data) => { },
  removeGqlQuery: (data) => { }
});

export default SeedContext;


export const SeedProvider = ({ children }) => {

  // Include gql queries to cache
  const addGqlQuery = (query) => {
    let queries = cache.gqlQueries;
    if (!queries.includes(query)) {
      queries.push(query);
      setCache((prevState) => ({ ...prevState, gqlQueries: queries }));
    }
  };

  const removeGqlQuery = (data) => { };

  const cacheState = {
    gqlQueries: [],
    addGqlQuery,
    removeGqlQuery
  };

  const [cache, setCache] = useState(cacheState);

  return (
    <SeedContext.Provider value={cache}>
      {children}
    </SeedContext.Provider>
  );
};

SeedProvider.propTypes = {
  children: PropTypes.any
};