import { Given, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import { startActivity } from '../utils/app.utils';
import LoginScreen from '../screenobjects/login.screen';

Given(/^the user launches the app$/, async () => {
    await startActivity();
});

Then(/^the Swag Labs Icon should be displayed$/, async () => {
    const isImageViewDisplayed = await LoginScreen.swagLabsIcon().isDisplayed();
    await expect(isImageViewDisplayed).toBe(true);
});

Then(/^the robot graphic should be displayed$/, async () => {
    const isRobotImageDisplayed = await LoginScreen.robotImage().isDisplayed();
    await expect(isRobotImageDisplayed).toBe(true);
});
