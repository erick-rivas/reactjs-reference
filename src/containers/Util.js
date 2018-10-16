const search = (dataSet, search, val) =>
{
  for (let data of dataSet)
    if (search(data) == val) return data;
  return {};
}

const filter = (dataSet, filter, val) =>
{
  const res = [];
  for (let data of dataSet)
    if (filter(data) == val) res.push(data);
  return res;
}

const sort = (dataSet, compare) =>
{
  return dataSet.sort((a, b) =>
  {
    return compare(a) - compare(b)
  });
}

const str2hash = str =>
{
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var character = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + character;
    hash = hash & hash;
  }
  return hash;
}

export { search, filter, sort, str2hash };