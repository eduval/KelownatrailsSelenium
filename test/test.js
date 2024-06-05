const { By, Key, Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

async function test_case() {
    // Set Chrome options
    let options = new chrome.Options();
    options.addArguments('headless');
    options.addArguments('disable-gpu');
    options.setChromeBinaryPath('/usr/bin/google-chrome');

    // Create a driver
    let driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();

    try {
        // Send driver to website
        await driver.get("https://devops-proj-testing.web.app/");

        // Grab an element from the page
        await driver.findElement(By.id("generate")).click();

        // Check the result
        let resultText = await driver.findElement(By.id('result')).getText();
        if (resultText !== "CLICK GENERATE") {
            console.log('Testing Success');
        } else {
            console.log('Testing Failed');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        // Ensure the driver quits
        await driver.quit();
    }
}

test_case();
