import { EwPage } from "./EwPage";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
const page = new EwPage(driver);

test("InvalidHeader", async () => {
  await page.navigate();
  await page.addHeader("This header is way too long to be valid!");
  await page.submit();
  expect(await page.getErrors()).toContain("field should be between 9 and 19 characters long.");
});

afterAll(async () => {
  await driver.quit();
});