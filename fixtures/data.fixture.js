require('../dotenv');
const base = require('@playwright/test');

exports.test = base.test.extend({
    data: async ({}, use) => {

        const email = process.env.EMAIL;
        const password = process.env.PASSWORD;
        const url = process.env.APPURL;

        base.expect(email).toBeTruthy();
        base.expect(password).toBeTruthy();
        base.expect(url).toBeTruthy();

        await use({ email, password, url });
    }
})

exports.expect = base.expect;