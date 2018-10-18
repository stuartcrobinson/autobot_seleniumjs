import { assert } from 'chai';
import { options } from '../../../autobot_framework/autobot';
import { loginPage } from '../../support/wordsmith/pages';

describe('Login', function () {

    it('with invalid creds should display warning', async function () {
        await loginPage.logIn(options.email, options.password + 'invalid', options.url);
        await loginPage.toaster_invalidEmailOrPwd.waitForExist();
        await loginPage.toaster_invalidEmailOrPwd.close();
        await loginPage.toaster_invalidEmailOrPwd.waitForNotExist();
        assert(await loginPage.isLoaded(), "Login page should be loaded.");
    });

});
