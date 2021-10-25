import { Builder, Capabilities } from "selenium-webdriver"

// This makes sure we can actually use the chromedriver that we just installed
const chromedriver = require('chromedriver')

// We're going to build our driver for chrome
// This code is the default, and won't change throughout the course
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// Let's write a jest test to open our browser to chrome
test("Opening Google", async () => {

    // This test will just open chrome to Google.com
    await driver.get("https://www.google.com/")

    // We don't close the window, so be sure to close it manually
})