import '@testing-library/jest-dom/extend-expect';
import SeleniumTest from "seed/selenium_test";
import assert from 'assert';
import { APP_URL } from 'settings';
import { API_URL } from 'settings';

jest.setTimeout(30000);

test('test_login', async () => {

    const loginUrl = APP_URL + "/examples/login";
    const slt = new SeleniumTest();
    await slt.init({ fillDatabase: true });
    await slt.login({
        email: "email@test.com",
        password: "123",
        loginUrl
    });

    const currentUrl = await slt.getCurrentUrl();
    assert.notEqual(currentUrl, loginUrl);

    const logs = await slt.findLogs("key", 200, API_URL);
    const key = logs[0].body.key;
    assert.notEqual(key, null);

    await slt.close({ clearDatabase: true });

});

test('test_login_invalid', async () => {

    const loginUrl = APP_URL + "/examples/login";
    const slt = new SeleniumTest();
    await slt.init({ fillDatabase: true });
    await slt.login({
        email: "email@test.comx",
        password: "1234",
        loginUrl
    });

    const currentUrl = await slt.getCurrentUrl();
    assert.equal(currentUrl, loginUrl);

    await slt.close({ clearDatabase: true });

});

test('test_login_valid_session_saved', async () => {

    const loginUrl = APP_URL + "/examples/login";
    const slt = new SeleniumTest();
    await slt.init({ fillDatabase: true });
    
    await slt.login({
        email: "email@test.com",
        password: "123",
        remember: true,
    });

    const currentUrl = await slt.getCurrentUrl();
    assert.notEqual(currentUrl, loginUrl);

    const logs = await slt.findLogs("key", 200, API_URL);
    const key = logs[0].body.key;
    assert.notEqual(key, null);

    const authToken = await slt.executeScript("return window.sessionStorage.getItem('token');");
    assert.equal(authToken, key);

    await slt.openAppUrl("/other_url");


    await slt.close({ clearDatabase: true });

});

test('test_login_invalid_session_saved', async () => {

    const slt = new SeleniumTest();
    await slt.init({ fillDatabase: true });
    await slt.openAppUrl("");

    await slt.setupSessionStorage({
        "key": "invalidToken",
        "id": "1",
    });

    await slt.openAppUrl("/other_url");

    const currentUrl = await slt.getCurrentUrl();
    assert(currentUrl == APP_URL + "/examples/login");

    await slt.close({ clearDatabase: true });

});