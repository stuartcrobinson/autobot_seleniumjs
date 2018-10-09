import { AbElement, options } from '../autobot';
import { loginPage } from '../object/wordsmith/page/login';
import { dashboardPage } from '../object/wordsmith/page/dashboard';
import { assert } from 'chai';



describe('Login', function () {

    it('with valid creds', async function () {

        console.log('here1')
        await loginPage.logIn(options.email, options.password + 'asdf', options.url);
        console.log('here2')
        await loginPage.logInButton.waitForNotExist();
        await dashboardPage.waitForLoad();
        console.log('here3')
        assert(await dashboardPage.isLoaded(), "Dashboard page should be loaded");

        console.log("await dashboardPage.isLoaded()");
        console.log(await dashboardPage.isLoaded());

    });
});
