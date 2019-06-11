const getItem = (dataSet, id) =>
{
  for (let data of dataSet)
    if (data.id == id) return data;
  return {};
}

const filter = (dataset, filters) =>
{
  console.log(dataset);
  console.log(filters);
  return dataset.filter(d =>
  {
    for (let filter in filters)
      if (filters[filter] != null &&
        d[filter] != filters[filter])
        return false;
    return true;
  })
}

export { getItem, filter }