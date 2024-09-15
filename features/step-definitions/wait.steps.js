import { Then } from '@wdio/cucumber-framework';

Then(/^I wait for (\d+) milliseconds$/, async (waitTime) => {
    await driver.pause(parseInt(waitTime, 10));
});