import '@testing-library/jest-dom/extend-expect';
import SeleniumTest from "seed/selenium_test";
import assert from 'assert';
import { APP_URL } from 'settings';
import { assertModelCount, assertModel } from "seed/test_utils/assert_queries"; 

jest.setTimeout(30000);

test('test_teams_list', async () => {

    const slt = new SeleniumTest();
    await slt.init({ fillDatabase: true, login: true });
    await slt.openAppUrl("/examples/teams");

    const count = await slt.getElementCount("//*[@class='list-group-item']");
    await assertModelCount({
      model: "team",
      expected: count,
      token: slt.authToken
    });

    await slt.close({ clearDatabase: true });

});

test('test_teams_list_invalid', async () => {

    const slt = new SeleniumTest();
    await slt.init({ fillDatabase: false, login: true });
    await slt.openAppUrl("/examples/teams");

    const messageElement = await slt.findElement("//*[@class='not-found-class']");
    assert(messageElement != null);

    await slt.close();

});

test('test_teams_create_normal', async () => {

  const prevValues = {
    "name": "Team Test",
    "logo": __filename,
    "description": "Team Test Description",
    "marketValue": 1,
    "rival.id": 1
  };

  const slt = new SeleniumTest();
  await slt.init({ fillDatabase: true, login: true });
  await slt.openAppUrl("/examples/teams/create");
  await slt.fillForm({
    formQuery: "//form",
    autoGen: false,
    values: prevValues
  });

  const submitButton = await slt.findElement("//button[@type='submit']");
  await slt.clickElement(submitButton);

  const logs = await slt.findLogs("saveTeam");
  assert.equal(logs.length, 1);

  const id = logs[0].body.data.saveTeam.team.id;
  
  delete prevValues["logo"];
  await assertModel({
    id, 
    model: "team", 
    expected: prevValues,
    token: slt.authToken
  });

  const currentUrl = await slt.getCurrentUrl();
  assert.equal(currentUrl, APP_URL + "/examples/teams/");

  await slt.close({ clearDatabase: true });
  
});

test('test_teams_edit_normal', async () => {

  const prevValues = {
    "name": "Team Test 2",
    "logo": __filename,
    "description": "Team Test Description 2",
    "marketValue": 2,
    "rival.id": 1
  };

  const slt = new SeleniumTest();
  await slt.init({ fillDatabase: true, login: true });
  await slt.openAppUrl("/examples/teams/1/edit");
  await slt.fillForm({
    formQuery: "//form",
    autoGen: false,
    values: prevValues
  });

  const submitButton = await slt.findElement("//button[@type='submit']");
  await slt.clickElement(submitButton);

  const logs = await slt.findLogs("setTeam");
  assert.equal(logs.length, 1);

  const id = logs[0].body.data.setTeam.team.id;
  
  delete prevValues["logo"];
  await assertModel({
    id, 
    model: "team", 
    expected: prevValues,
    token: slt.authToken
  });

  const currentUrl = await slt.getCurrentUrl();
  assert.equal(currentUrl, APP_URL + "/examples/teams/");

  await slt.close({ clearDatabase: true });

});

test('test_teams_edit_invalid_param', async () => {

  const slt = new SeleniumTest();
  await slt.init({ fillDatabase: false, login: true });
  await slt.openAppUrl("/examples/teams/1/edit");

  const currentUrl = await slt.getCurrentUrl();
  assert.notEqual(currentUrl, APP_URL + "/examples/teams/1/edit");

  await slt.close({ clearDatabase: true });

});

test('test_players_delete', async () => {

  const slt = new SeleniumTest();
  await slt.init({ fillDatabase: false, login: true });
  await slt.openAppUrl("/examples/teams/1");
  const deleteButton = await slt.findElement("//button[@class='btn btn-danger']");
  await slt.clickElement(deleteButton);

  const currentUrl = await slt.getCurrentUrl();
  assert.notEqual(currentUrl, APP_URL + "/examples/teams/1");

  await slt.close({ clearDatabase: true });

});