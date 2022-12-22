import "chromedriver";
import assert from 'assert';
import { By, Key } from 'selenium-webdriver';
import { APP_URL }  from "settings";
import { assertModel } from "seed/test_utils/assert_queries";
import { getDriver, waitForComponent, timeout, findInNetworkLogs } from "seed/test_utils/driver";
import { fetchApi } from "seed/test_utils/fetch";
import { GRAPH_URL } from "settings";
import { API_URL } from "settings";

class SeleniumTest {

  constructor(){
    this.driver = null;
    this.authToken = null;
  }

  async init({ login, fillDatabase }) {

    this.driver = await getDriver();
    if(fillDatabase) await this.fillDatabase();
    if(login) await this.login({});

  }

  async close({ clearDatabase }) {
    
    await this.driver.quit();
    if(clearDatabase) await this.clearDatabase();

  }

  async fillDatabase() {
    await fetchApi({
      endpoint: "/users/fill_test_database/",
      method: "GET"
    });
  }

  async clearDatabase() {
    await fetchApi({
      endpoint: "/users/clear_test_database/",
      method: "GET"
    });
  }

  async executeScript(script) {
    return await this.driver.executeScript(script);
  }

  async setupSessionStorage(variables) {

    let keys = Object.keys(variables);

    for(let keyIdx in keys) {

      let key = keys[keyIdx];
      let value = variables[key];

      await this.executeScript(`sessionStorage.setItem("${key}", "${value}");`);

    }

  }

  async fillForm({ formQuery = "", autoGen = true, values = {}, update = false }) {
    
    await waitForComponent(this.driver, formQuery);
      
    const form = await this.findElement(formQuery);
    assert.notEqual(form, null);

    const fields = await this.driver.findElements(By.xpath("//*[string-length(@name)>0]"));
    const expected = {};
    
    for(let i = 0; i < fields.length; i++) {

      const field = fields[i];
      const tag = await field.getTagName();
      const type = await field.getAttribute("type");
      const name = await field.getAttribute("name");

      if(name == "viewport" || name == "theme-color") continue;

      if(!autoGen && values != null && values[name] != null) {
        await field.sendKeys(values[name]);
        expected[name] = values[name];
      }
      else {
  
        const answer = await this.getAnswer({ tag, type, field, update });
        
        // TODO: Remove when fixed
        if(type != "file")
          expected[name] = answer;

      }
        
    }

    return expected;

  }

  async findLogs(arg = "", status = 200, includeUrl = GRAPH_URL) {
    return await findInNetworkLogs(this.driver, status, true, arg, includeUrl);    
  }

  async login({
    email = "email@test.com", 
    password = "123", 
    remember = true, 
    fill = true, 
    loginUrl = APP_URL + "/login"
  }) {

    await this.driver.get(loginUrl);
    await waitForComponent(this.driver, "//form");

    if(fill) {

      const emailField = await this.driver.findElement(By.name("email"));
      assert.notEqual(emailField, null);

      const passwordField = await this.driver.findElement(By.name("password"));
      assert.notEqual(passwordField, null);

      await emailField.sendKeys(email);
      await passwordField.sendKeys(password);

      if(remember) {

        const rememberMe = await this.driver.findElement(By.name("rememberMe"));
        assert.notEqual(rememberMe, null);

        await this.clickElement(rememberMe);

      }

    }

    await this.driver.findElement(By.xpath("//button")).click();
    await timeout(2000);

  }

  async testForm({
    model = "",
    url = "",
    update = false, 
    id = null, 
    exists = false,
    values = null
  }) {

    model = model.toLowerCase();
    model = model.charAt(0).toUpperCase() + model.slice(1);

    const expected = {};
    
    await this.openUrl(url);

    if(update && !exists) {

      await timeout(2000);

      const expectedUrl = url.split("/").slice(0, -2).join("/");
      const currentUrl = await this.driver.getCurrentUrl();

      assert.equal(currentUrl, expectedUrl);

    }
    else {

      await waitForComponent(this.driver, "//form");
      
      const form = await this.driver.findElement(By.xpath("//form"));
      assert.notEqual(form, null);

      const fields = await this.driver.findElements(By.xpath("//*[string-length(@name)>0]"));
      
      for(let i = 0; i < fields.length; i++) {

          const field = fields[i];
          const tag = await field.getTagName();
          const type = await field.getAttribute("type");
          const name = await field.getAttribute("name");

          if(name == "viewport" || name == "theme-color") continue;

          if(values != null && values[name] != null) {
            await field.sendKeys(values[name]);
            expected[name] = values[name];
          }
          else {
      
            const answer = await this.getAnswer({ tag, type, field, update });
            
            // TODO: Remove when fixed
            if(type != "file")
                expected[name] = answer;

          }
          
      }

      const submitButton = await this.driver.findElement(By.xpath("//button[@type='submit']"));
      assert.notEqual(submitButton, null);

      await this.clickElement(this.driver, submitButton);
      await timeout(2000);

      const operation = (update ? "set" : "save") + model;
      const logs = await findInNetworkLogs(this.driver, 200, true, operation);

      assert.equal(logs.length, 1);

      const response = logs[0].body;
      id = id??response.data[operation][model.toLowerCase()].id;

      await assertModel({
        model, 
        id, 
        expected, 
        token: this.authToken
      });

      const expectedUrl = url.split("/").slice(0, -1).join("/");
      const currentUrl = await this.driver.getCurrentUrl();

      assert.equal(currentUrl, expectedUrl);

    }

  }

  async testDelete({ 
    model = null, 
    url = null, 
    buttonQuery = null,
    id = null, 
    exists = false 
  }) {

    model = model.toLowerCase();
    model = model.charAt(0).toUpperCase() + model.slice(1);

    await this.openUrl(url);

    if(exists) {

      const button = await this.findElement(buttonQuery);
      assert.notEqual(button, null);

      await this.clickElement(button);
      await timeout(2000);

      const logs = await findInNetworkLogs(this.driver, 200, true, "delete" + model);
      assert.equal(logs.length, 1);

      const response = logs[0].body;
      id = id??response.data["delete" + model].id;

      await assertModel({
        model, 
        id, 
        expected: null, 
        token: this.authToken, 
        assertEmpty: true
      });

      const expectedUrl = url.split("/").slice(0, -1).join("/");
      const currentUrl = await this.driver.getCurrentUrl();

      assert.equal(currentUrl, expectedUrl);

    }
    else {

      const button = await this.driver.findElement(By.xpath(buttonQuery));
      assert.equal(button, null);

    }

  }

  async getAnswer({
    tag = null,
    type = null,
    field = null,
    update = false,
    value = null
  }) {

    try {
      await field.sendKeys(Key.CONTROL + "a");
      await field.sendKeys(Key.DELETE);
    }
    catch(e) {}

    let currentValue = value;

    if(tag == "input") {

      // TODO: Check if file was uploaded and which id

      if(type == "radio") {
        
        if(value != null) {
          let currentValue = await field.getAttribute("value");
          if(currentValue != value) await this.clickElement(this.driver, field);
        }
        else await this.clickElement(this.driver, field);

        return (await field.getAttribute("value")) == "true";

      }
      else if(type == "checkbox") {

        if(value != null) {
          let currentValue = await field.getAttribute("value");
          if(currentValue != value) await this.clickElement(this.driver, field);
        }
        else await this.clickElement(this.driver, field);

        return (await field.getAttribute("value")) == "true";

      }
      else if(value == null) {

        if(type == "text") currentValue = update ? "Test2" : "Test";
        else if(type == "email") currentValue = update ? "test2@test.com" : "test@test.com";
        else if(type == "password") currentValue = update ? "1234" : "123";
        else if(type == "number") currentValue = update ? 1234 : 123;
        else if(type == "date") currentValue = update ? "2021-01-02T06:00:00+00:00" : "2021-01-01T06:00:00+00:00";
        else if(type == "time") currentValue = update ? "12:01" : "12:00";
        else if(type == "file") currentValue = __filename;

      }

    }
    else if(tag == "select") {
      
      if(value == null) {

        let options = await field.findElements(By.xpath("./option"));

        if(options.length > 1) {

            let firstOption = await options[1];
            let firstOptionValue = await firstOption.getAttribute("value");
            firstOptionValue = isNaN(parseInt(firstOptionValue)) ? firstOptionValue : parseInt(firstOptionValue);

            currentValue = firstOptionValue;

        }
        
        // TODO: Check int id graphql error

      }

    }
    else if(tag == "textarea") {
      if(value == null) currentValue = update ? "Test2" : "Test";
    }

    await field.sendKeys(currentValue);
    return currentValue;

  }

  async openUrl(url) {
    await this.driver.get(url);
    await timeout(2000);
  }

  async openAppUrl(url) {
    await this.openUrl(APP_URL + url);
    await timeout(2000);
  }

  async getCurrentUrl() {
    return await this.driver.getCurrentUrl();
  }

  async findElements(query) {
    return await this.driver.findElements(By.xpath(query));
  }

  async findElement(query) {
    return await this.driver.findElement(By.xpath(query));
  }

  async getElementCount(query) {
    const elements = await this.findElements(query);
    return elements.length;
  }

  async clickElement(element) {
    await this.driver.executeScript("arguments[0].click();", element);
    await timeout(2000);
  }

}

export default SeleniumTest;