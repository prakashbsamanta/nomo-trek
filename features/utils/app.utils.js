import { driver } from '@wdio/globals';

/**
 * 
 * @param {string} [activityName] - The name of the activity to start. If not provided, starts the default activity.
 */
export const startActivity = async (activityName = '') => {
    const appPackage = process.env.APP_PACKAGE;
    const defaultActivity = process.env.DEFAULT_ACTIVITY;

    const fullActivity = activityName ? `${appPackage}.${activityName}` : `${appPackage}${defaultActivity}`;

    await driver.startActivity(appPackage, fullActivity);
};