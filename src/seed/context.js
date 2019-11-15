import React, { createContext, useState } from "react";

const SeedContext = createContext({
  gqlQueries: [],
  addGqlQuery: (data) => { },
  removeGqlQuery: (data) => { }
});

export default SeedContext;


export const SeedProvider = ({ children }) => {

  const addGqlQuery = (data) =>
  {
    let queries = cache.gqlQueries;
    let query = data.replace(/[\s,]+/g, " ").trim();
    if (!queries.includes(query)){
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

