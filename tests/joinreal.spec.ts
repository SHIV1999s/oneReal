import { expect, test } from '@playwright/test'
import { OneRealPom } from './../pom/OneRealPom'

test('Join Real Signup Form Automate', { tag: '@joinReal' }, async ({ browser }) => {
    // function makeid(length) {
    //     var result = '';
    //     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //     var charactersLength = characters.length;
    //     for (var i = 0; i < length; i++) {
    //         result += characters.charAt(Math.floor(Math.random() * charactersLength));
    //     }
    //     return result;
    // }
    // console.log(makeid(5));
    const context = await browser.newContext();
    const page = await context.newPage();
    const onereal = new OneRealPom(page);
    await onereal.goToUrl();
    await onereal.errorValidation(expect);
    await onereal.completeFormJourney();
    await onereal.verifyFinalPage();

})