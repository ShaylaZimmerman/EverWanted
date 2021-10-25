import { By, until, WebDriver } from "selenium-webdriver";

export class EwPage {
  /** the page's driver object */
  driver: WebDriver;
  /** https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.htmls */
  url: string = "https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html";
  submitButton: By = By.id("saveBtn");
  clearButton: By = By.id("clearBtn");
  header: By = By.css('[class="cake"]');
  errorList: By = By.id("errorList");
  /** input fields with partitions */
  headerInput: By = By.name("hdrInput");
  mkeInput: By = By.name("mkeInput");
  nameInput: By = By.name("namInput");
  weightInput: By = By.name("wgtInput");
  hairInput: By = By.name("haiInput");
  offenseInput: By = By.name("offInput");
  DLnameInput: By = By.name("olnInput");
  LPInput: By = By.name("licInput");
  /** other input fields */
  oaiInput: By = By.name("oriInput");
  sexInput: By = By.name("sexInput");
  raceInput: By = By.name("racInput");
  heightInput: By = By.name("hgtInput");
  DLstateInput: By = By.name("olsInput");
  DLexpInput: By = By.name("olyInput");
  LSInput: By = By.name("lisInput");
  LYInput: By = By.name("liyInput")
  dowInput: By = By.name("dowInput");
  
  /**
   * @param {WebDriver} driver - the driver object the page object should interact with
   * @example
   * const page = EwPage(driver);
   */
  constructor(driver: WebDriver) {
    this.driver = driver;
  }
  /**
   * Will navigate to https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html
   * @example
   * await page.navigate();
   */
  async navigate() {
    await this.driver.get(this.url);
    await this.driver.wait(until.elementLocated(this.header));
    await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(this.header))
    );
  }
/**
 * This sendKeys command types a key sequence on the DOM element 
 * represented by this instance.
 * @param elementBy for our purposes this will used when entering
 * any value into any of the input fields
 * @param keys 
 * @returns 
 */
 async sendKeys(elementBy: By, keys) {
  await this.driver.wait(until.elementLocated(elementBy));
  return this.driver.findElement(elementBy).sendKeys(keys);
}
async addHeader(text: string) {
  return this.sendKeys(this.headerInput, `${text}\n`);
}
async addMKE(text: string) {
  return this.sendKeys(this.mkeInput, `${text}\n`);
}
async addName(text: string) {
  return this.sendKeys(this.nameInput, `${text}\n`);
}
async addWgt(text: string) {
  return this.sendKeys(this.weightInput, `${text}\n`);
}
async addHair(text: string) {
  return this.sendKeys(this.hairInput, `${text}\n`);
}
async addOffense(text: string) {
  return this.sendKeys(this.offenseInput, `${text}\n`);
}
async addDL(text: string) {
  return this.sendKeys(this.DLnameInput, `${text}\n`);
}
async addLicensePlate(text: string) {
  return this.sendKeys(this.LPInput, `${text}\n`);
}

/**
* This get text command will pull our results. 
* For the purposes of the get results function 
* text will be pulled from 
* @param elementBy the results field.
* @returns 
*/   
async getText(elementBy: By) {
  await this.driver.wait(until.elementLocated(elementBy));
  return (await this.driver.findElement(elementBy)).getText();
}

async getErrors() {
  return this.getText(this.errorList);
}

async submit(){
  await this.driver.wait(until.elementLocated(By.id('saveBtn')));
  return (await this.driver.findElement(By.id('saveBtn'))).click();
}
}



