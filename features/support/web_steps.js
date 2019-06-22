import { By, until, Key } from 'selenium-webdriver'
import { Given, When, Then } from 'cucumber'
import {expect} from 'chai'


Given("I navigate to the url {string}", function(url) {
    return this.driver.get(url)
});

When('I do a search for {string}', function(searchText) {
    const world = this;

    return world.driver.findElement(By.xpath('//input[@title="Search"]')).then(searchInput => {
        return world.driver.wait(until.elementIsVisible(searchInput)).then(() => {
            return searchInput.sendKeys(searchText).then(() => {
                return searchInput.sendKeys(Key.ENTER)
            })
        })
    })
});

Then('I should see more than {int} results', async function(expectedResults) {
    const world = this;

    let resultStats = await world.driver.findElement(By.id('resultStats'))
    let resultStatsText = await resultStats.getText();
    let resultStatsArray = resultStatsText.replace(/,/g,'').split(' ');
    let nrOfResults = parseInt(resultStatsArray[1]);
    expect(nrOfResults).to.be.above(expectedResults);
});

Then('I should see the text {string}', function (text) {
    const driver = this.driver;
    const xpath = '//*[contains(text(),"' + text + '")]';
    return driver.wait(until.elementLocated(By.xpath(xpath))).then(el => {
        return driver.wait(until.elementIsVisible(el))
    })
});
