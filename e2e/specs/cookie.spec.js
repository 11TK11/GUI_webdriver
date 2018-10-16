const SingIn = require('../pages/SignIn');
const CookieManager = require('../cookies/CookieManager');
let username = 'hapsneeze';
let password = 'test12345';
describe('pivotal tracker verify user cookie', () => {
    before(() => {
        SingIn.loginAs(username, password);
    });

    it('should singin a distinc user cookies', () => {
        let newusername = 'elianor8313@gmail.com';
        let newpassword = 'Control123';
        SingIn.newCredentials(newusername, newpassword);
    });
});
