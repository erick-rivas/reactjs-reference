import '@testing-library/jest-dom/extend-expect';
import SeleniumTest from "seed/selenium_test";
import assert from 'assert';
import { APP_URL } from 'settings';
import { assertModelCount, assertModel } from "seed/test_utils/assert_queries"; 

jest.setTimeout(30000);

test('test_players_list', async () => {

  const slt = new SeleniumTest();
  await slt.init({ fillDatabase: true, login: true });
  await slt.openAppUrl("/examples/players");

  const count = await slt.getElementCount("//*[@class='list-group-item']");
  await assertModelCount({
      model: "player",
      expected: count,
      token: slt.authToken
    });

  await slt.close({ clearDatabase: true });

});

test('test_players_list_invalid', async () => {

  const slt = new SeleniumTest();
  await slt.init({ fillDatabase: true, login: true });
  await slt.openAppUrl("/examples/players");

  const messageElement = await slt.findElement("//*[@class='not-found-class']");
  assert(messageElement != null);

  await slt.close();

});


test('test_players_create_normal', async () => {

  const slt = new SeleniumTest();
  await slt.init({ fillDatabase: true, login: true });
  await slt.testForm({
    model: "player",
    url: APP_URL + "/examples/players/create",
  });
  await slt.close({ clearDatabase: true });

});

test('test_players_edit_normal', async () => {

  const slt = new SeleniumTest();
  await slt.init({ fillDatabase: true, login: true });
  await slt.fillForm({
    model: "player",
    url: APP_URL + "/examples/players/1/edit",
    update: true,
    exists: true,
    values: {
      "name": "Player 1",
      "email": ""
    }
  });
  await slt.close({ clearDatabase: true });

});

test('test_players_edit_invalid_param', async () => {

  const slt = new SeleniumTest();
  await slt.init({ fillDatabase: true, login: true });
  await slt.testForm({
    model: "player",
    url: APP_URL + "/examples/players/2/edit",
    update: true,
    exists: false
  });
  await slt.close({ clearDatabase: true });

});

test('test_players_delete', async () => {

  const slt = new SeleniumTest();
  await slt.init({ fillDatabase: true, login: true });

  await slt.testDelete({
    model: "player",
    url: APP_URL + "/examples/players/1",
    buttonQuery: "//button[@class='btn btn-danger']",
    exists: true
  });

  // await slt.openUrl(APP_URL + "/examples/players/1");
  // const deleteButton = await slt.findElement("//button[@class='btn btn-danger']");
  // await slt.clickElement(deleteButton);

  await slt.close({ clearDatabase: true });

});

// npm test -- --testPathIgnorePatterns=src/seed/examples