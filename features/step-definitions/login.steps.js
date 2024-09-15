import { When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import LoginScreen from '../screenobjects/login.screen';
import HomePage from '../screenobjects/home.screen';

let successfulLogin = false;

When(/^the user enters '([^']*)' and '([^']*)'$/, async (username, password) => {
    console.log("Username => ", username);
    console.log("Password => ", password);
    if (username) {
        await LoginScreen.usernameInput().setValue(username);
    }
    if (password) {
        await LoginScreen.passwordInput().setValue(password);
    }
});

When(/^the user taps on the login button$/, async () => {
    await LoginScreen.loginButton().click();
});

Then(/^the error message '([^']*)' should be displayed$/, async (errorMessage) => {
    if (errorMessage) {
        const errorElement = await LoginScreen.errorText(errorMessage);
        await expect(errorElement).toBeDisplayed();
        await expect(errorElement).toHaveText(errorMessage);
    } else {

        successfulLogin = true;
    }
});

Then(/^the user should be on the homepage if login is successful$/, async () => {
    if (successfulLogin) {
        // Wait for the product table to be displayed with a timeout
        const isProductsTableDisplayed = await HomePage.isProductsTableDisplayed({ timeout: 5000 });
        await expect(isProductsTableDisplayed).toBe(true);
        if (isProductsTableDisplayed) {
            await HomePage.menuIcon().click();
        }

        successfulLogin = false;
    }
});
