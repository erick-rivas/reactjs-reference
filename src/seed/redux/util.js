/*
__Seed builder__v0.2.0
  (Read_only) Builder helper
*/

export const GET_LIST = "GET_LIST";
export const GET_DETAILS = "GET_DETAILS";
export const POST = "POST";
export const PUT = "PUT";
export const DELETE = "DELETE";
export const RESTART = "RESTART";

const find = (dataset, func) => {
  const item = dataset.find(func);
  return item ? item : {};
};

const get = (dataset, id) => {
  return find(dataset, (i) => i.id == id);
};

const filter = (dataset, filters) => {
  return dataset.filter((d) => {
    for (let filter in filters)
      if (filters[filter] != null &&
        d[filter] != filters[filter])
        return false;
    return true;
  });
};

export { find, get, filter };