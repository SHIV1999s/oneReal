import { test, expect } from '@playwright/test';
import { boldRealpom } from '../pom/boldRealpom';

// https://bolt.playrealbrokerage.com
// sahilagent/P@ssw0rd
// test('bolt page automation', { tag: '@boltLoginSkip' }, async ({ browser }) => {
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto('https://bolt.playrealbrokerage.com/');
//     await page.pause();
//     await page.waitForTimeout(2000);
//     await context.storageState({ path: 'tests/boltStorageState.json' });
// });


test('automate all required cases total 3', { tag: '@automate3Cases' }, async ({ browser }) => {
    const context = await browser.newContext({ storageState: 'tests/boltStorageState.json' });
    const page = await context.newPage();
    const BoldRealpom = new boldRealpom(page, expect);
    await BoldRealpom.goToUrl();
    await BoldRealpom.goToCommisionPage();
    await BoldRealpom.test1();
    await BoldRealpom.test2();
    await BoldRealpom.test3();

})