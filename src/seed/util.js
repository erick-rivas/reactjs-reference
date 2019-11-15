const find = (dataset, func) =>
{
  const item = dataset.find(func);
  return item ? item : {};
};

const get = (dataset, id) =>
{
  return find(dataset, (i) => i.id == id);
};

const filter = (dataset, filters) =>
{
  return dataset.filter((d) =>
  {
    for (let filter in filters)
      if (filters[filter] != null &&
        d[filter] != filters[filter])
        return false;
    return true;
  });
};

export { find, get, filter };