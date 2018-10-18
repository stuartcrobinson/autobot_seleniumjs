import { assert } from 'chai';
import { options } from '../../../autobot_framework/autobot';
import { dashboardPage, loginPage } from '../../support/wordsmith/pages';
// require('longjohn');
// global.Promise=require('bluebird');
describe('Login', function () {

    it('with valid creds should load the dashboard', async function () {
        await loginPage.logIn(options.email, options.password, options.url);
        await loginPage.logInButton.waitForNotExist();

        await dashboardPage.waitForLoad();
        assert(await dashboardPage.isLoaded(), "Dashboard page should be loaded.");
    });

});
