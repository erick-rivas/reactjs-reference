const gql = require('seed/gql');

test('gql-normalizeQuery', () => {

  const input_01 = "{    player{  \n name \n team{id  } } }"
  const output_01 = gql.normalizeQuery(input_01);
  const expected_01 = "{ player { id name team { id id } } }"
  expect(output_01).toBe(expected_01);

  const input_02 = "{player{ name team{id}}}"
  const output_02 = gql.normalizeQuery(input_02);
  const expected_02 = "{ player { id name team { id id } } }"
  expect(output_02).toBe(expected_02);

  const input_03 = "{    A{  \n name \n B{id C{ } D {}  } E{ }}   } }"
  const output_03 = gql.normalizeQuery(input_03);
  const expected_03 = "{ A { id name B { id id C { id } D { id } } E { id } } } }"
  expect(output_03).toBe(expected_03);

  const input_04 = "{    A(...){  \n name \n B{id C{ } D {}  } E{ }}   } }"
  const output_04 = gql.normalizeQuery(input_04);
  const expected_04 = "{ A(...) { id name B { id id C { id } D { id } } E { id } } } }"
  expect(output_04).toBe(expected_04);

  const input_05 = "mutation Set(...){    A(...){  } }"
  const output_05 = gql.normalizeQuery(input_05);
  const expected_05 = "{ A(...) { id } }"
  expect(output_05).toBe(expected_05);

});

test('gql-getHeaderNames', () => {
  const input_01 = "{ A { id name B { id id C { id } D { id } } E { id } } } }"
  const output_01 = gql.getHeaderNames(input_01);
  const expected_01 = ["A", "B", "C", "D", "E"]
  expect(JSON.stringify(output_01)).toBe(JSON.stringify(expected_01));

  const input_02 = "{ A(..) { } }"
  const output_02 = gql.getHeaderNames(input_02);
  const expected_02 = ["A"]
  expect(JSON.stringify(output_02)).toBe(JSON.stringify(expected_02));
});

/*
test('gql-getModelNames', () => {
  const input_01 = "{ savePlayerPosition { id name player { id id matches { id } playerPositions { id } } user { id } } } }"
  const output_01 = gql.getModelNames(input_01);
  const expected_01 = ["playerPosition", "player", "match", "playerPosition", "user"]
  expect(JSON.stringify(output_01)).toBe(JSON.stringify(expected_01));

  const input_02 = "{ userPagination(..) { } }"
  const output_02 = gql.getModelNames(input_02);
  const expected_02 = ["user"]
  expect(JSON.stringify(output_02)).toBe(JSON.stringify(expected_02));
});
*/