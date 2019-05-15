const getItem = (dataSet, id) =>
{
  for (let data of dataSet)
    if (data.id == id) return data;
  return {};
}

export { getItem }