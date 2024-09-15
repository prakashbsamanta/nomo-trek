import { $ } from '@wdio/globals';

export const LoginScreen = {

    swagLabsIcon: () => $('android=new UiSelector().className("android.widget.ImageView").instance(0)'),
    robotImage: () => $('android=new UiSelector().className("android.widget.ImageView").instance(1)'),

    usernameInput: () => $('~test-Username'),
    passwordInput: () => $('~test-Password'),
    loginButton: () => $('~test-LOGIN'),
    errorText: (text) => $(`android=new UiSelector().text("${text}")`)
};

export default LoginScreen;
