import '@testing-library/jest-dom/extend-expect';
import SeleniumTest from "seed/selenium_test";
import assert from 'assert';
import { assertModelCount, assertModel } from "seed/test_utils/assert_queries"; 
import { APP_URL } from 'settings';

jest.setTimeout(30000);

test('test_matches_list', async () => {

    const slt = new SeleniumTest();
    await slt.init({ fillDatabase: true, login: true });
    await slt.openAppUrl("/examples/matches");

    const count = await slt.getElementCount("//*[@class='list-group-item']");
    await assertModelCount({
      model: "match",
      expected: count,
      token: slt.authToken
    });

    await slt.close({ clearDatabase: true });

});

test('test_matches_list_invalid', async () => {

    const slt = new SeleniumTest();
    await slt.init({ fillDatabase: false, login: true });
    await slt.openAppUrl("/examples/matches");

    const messageElement = await slt.findElement("//*[@class='not-found-class']");
    assert(messageElement != null);

    await slt.close();

});

test('test_matches_create_normal', async () => {

  const prevValues = {
    "date": "2020-01-01",
    "type": "FRIENDSHIP",
    "local.id": 1,
    "visitor.id": 1
  };

  const slt = new SeleniumTest();
  await slt.init({ fillDatabase: true, login: true });
  await slt.openAppUrl("/examples/matches/create");
  await slt.fillForm({
    formQuery: "//form",
    autoGen: false,
    values: prevValues
  });

  const submitButton = await slt.findElement("//button[@type='submit']");
  await slt.clickElement(submitButton);

  const logs = await slt.findLogs("saveMatch");
  assert.equal(logs.length, 1);

  const id = logs[0].body.data.saveMatch.match.id;
  
  await assertModel({
    id, 
    model: "match", 
    expected: prevValues,
    token: slt.authToken
  });

  const currentUrl = await slt.getCurrentUrl();
  assert.equal(currentUrl, APP_URL + "/examples/matches/");

  await slt.close({ clearDatabase: true });
  
});

test('test_matches_edit_normal', async () => {

  const prevValues = {
    "date": "2020-01-02",
    "type": "LEAGUE",
    "local.id": 1,
    "visitor.id": 1
  };

  const slt = new SeleniumTest();
  await slt.init({ fillDatabase: true, login: true });
  await slt.openAppUrl("/examples/matches/1/edit");
  await slt.fillForm({
    formQuery: "//form",
    autoGen: false,
    values: prevValues
  });

  const submitButton = await slt.findElement("//button[@type='submit']");
  await slt.clickElement(submitButton);

  const logs = await slt.findLogs("setMatch");
  assert.equal(logs.length, 1);

  const id = logs[0].body.data.setMatch.team.id;
  
  await assertModel({
    id, 
    model: "match", 
    expected: prevValues,
    token: slt.authToken
  });

  const currentUrl = await slt.getCurrentUrl();
  assert.equal(currentUrl, APP_URL + "/examples/matches/");

  await slt.close({ clearDatabase: true });

});

test('test_matches_edit_invalid_param', async () => {

  const slt = new SeleniumTest();
  await slt.init({ fillDatabase: false, login: true });
  await slt.openAppUrl("/examples/matches/1/edit");

  const currentUrl = await slt.getCurrentUrl();
  assert.notEqual(currentUrl, APP_URL + "/examples/matches/1/edit");

  await slt.close({ clearDatabase: true });

});

test('test_matches_delete', async () => {

  const slt = new SeleniumTest();
  await slt.init({ fillDatabase: false, login: true });
  await slt.openAppUrl("/examples/matches/1");
  const deleteButton = await slt.findElement("//button[@class='btn btn-danger']");
  await slt.clickElement(deleteButton);

  const currentUrl = await slt.getCurrentUrl();
  assert.notEqual(currentUrl, APP_URL + "/examples/matches/1");

  await slt.close({ clearDatabase: true });

});