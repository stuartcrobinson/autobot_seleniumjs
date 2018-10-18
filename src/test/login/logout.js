import { assert } from 'chai';
import { options } from '../../../autobot_framework/autobot';
import { sidebar } from '../../support/wordsmith/component/sideBar';
import { dashboardPage, loginPage } from '../../support/wordsmith/pages';

describe('Login', function () {

    it('then logout should return to login page', async function () {
        await loginPage.logIn(options.email, options.password, options.url);
        await loginPage.logInButton.waitForNotExist();
        await dashboardPage.waitForLoad();
        await sidebar.settingsLink.hover();
        await sidebar.settingsMenu.signOutLink.click();
        await loginPage.toaster_signedOutSuccessfully.waitForExist();
        await loginPage.toaster_signedOutSuccessfully.close();
        await loginPage.toaster_signedOutSuccessfully.waitForNotExist();
        assert(await loginPage.isLoaded(), "Login page should be loaded.");
    });
});
