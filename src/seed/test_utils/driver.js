import "chromedriver";
import CDPConnection from "seed/test_utils/cdp_connection";
import { Builder, By, until, logging } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';

const waitForComponent = async (driver, component, timeLimit = 5000) =>
  await driver.wait(until.elementLocated(By.xpath(component)), timeLimit);

const timeout = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

const getDriver = async () => {

  const prefs = new logging.Preferences();
  const options = new chrome.Options();

  prefs.setLevel(logging.Type.PERFORMANCE, logging.Level.ALL);
  options.setLoggingPrefs(prefs);

  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  const connection = await driver.createCDPConnection('page');
  await connection.execute('Network.enable', {}, null);
  await connection.execute('Network.setCacheDisabled', { cacheDisabled: true }, null);

  return driver;

}

const getNetworkLogs = async (driver) => {

  const logs = await driver.manage().logs().get(logging.Type.PERFORMANCE);
  const cdpConnection = new CDPConnection(driver);
  const statusLogs = [];

  for(let i = 0; i < logs.length; i++) {

    const message = JSON.parse(logs[i].message).message;

    if(message.method == "Network.responseReceived") {

      const requestId = message.params.requestId;
      const statusCode = message.params.response.status;
      const url = message.params.response.url;

      try {
        let { _, body } = await cdpConnection.execute('Network.getResponseBody', { requestId });
        try {
          body = JSON.parse(body);
        }
        finally {
          statusLogs.push({ statusCode, url, body });
        }
      }
      catch (e) {
      }
        
    }

  }

  return statusLogs;

}

const findInNetworkLogs = async (driver, statusCode, hasBody = false, bodyKey = null, url = "") => {

  const logs = await getNetworkLogs(driver);
  const filteredLogs = logs.filter(log => log.statusCode == statusCode && log.url.includes(url));

  if(hasBody) {
    return filteredLogs.filter(log => {
        
      let logBody = log.body;

      if(logBody == null) {
        return false;
      }
      else if((typeof logBody) != "object") {
        try {
          logBody = JSON.parse(logBody);
        }
        catch (e) {
          return false;
        }
      }

      if(bodyKey != null) 
        return Object.keys(logBody.data ? logBody.data : logBody).map(key => key).includes(bodyKey);

      return true;
        
    });
  }

  return filteredLogs;

}

export { getDriver, waitForComponent, timeout, getNetworkLogs, findInNetworkLogs };