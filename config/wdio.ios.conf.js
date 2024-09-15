// wdio.ios.conf.js
import { config } from './wdio.shared.conf.js';

config.capabilities = [{
    platformName: 'iOS',
    'appium:deviceName': 'iPhone 12',
    'appium:platformVersion': '14.4',
    'appium:automationName': 'XCUITest',
    'appium:app': './resources/apps/ios/SauceLabs.app.zip',
    'appium:autoGrantPermissions': true
}];

config.services = ['appium'];

export { config };