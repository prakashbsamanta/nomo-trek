import { config } from "./wdio.shared.conf.js";

config.port = 4723
config.specs = [
    './../test/specs/**/*.feature'
],
    config.capabilities = [{
        platformName: 'Android',
        'appium:deviceName': process.env.DEVICE_NAME || 'Pixel 8',
        'appium:platformVersion': process.env.PLATFORM_VERSION || '15.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': process.env.APP_PATH || './resources/apps/android/Android.SauceLabs.app.2.7.1.apk',
        'appium:autoGrantPermissions': true,
        'appium:appWaitActivity': process.env.APP_WAIT_ACTIVITY || 'com.swaglabsmobileapp.MainActivity'
    }];

export { config };