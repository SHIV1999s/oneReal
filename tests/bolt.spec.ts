import { test, expect } from '@playwright/test';
// https://bolt.playrealbrokerage.com
// sahilagent/P@ssw0rd
test('bolt page automation', { tag: '@boltLoginSkip' }, async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://bolt.playrealbrokerage.com/');
    await page.pause();
    await page.waitForTimeout(2000);
    await context.storageState({ path: 'tests/boltStorageState.json' });
});


test('automate all required cases total 3', { tag: '@automate3Cases' }, async ({ browser }) => {
    const context = await browser.newContext({ storageState: 'tests/boltStorageState.json' });
    const page = await context.newPage()
    await page.goto('https://bolt.playrealbrokerage.com/');
    await page.waitForLoadState('domcontentloaded')
    // await page.waitForTimeout(2000)
    // await 
    await page.locator('text=KJ1-T94-26Y-23O').click({ force: true })
    // await page.locator('[href*="Onboardings"] [type="button"]').first().click();
    const details = page.locator('[class="relative"] [class*="px-4 flex flex-row"]').locator('text=Details')
    await details.scrollIntoViewIfNeeded();
    await details.click();
    await page.locator('text="Adjust Commission (%) / splits"').scrollIntoViewIfNeeded();
    await page.locator('text="Adjust Commission (%) / splits"').click();
    const togglesPage = page.locator('[title="sidebar-form"]');
    const toggle = await togglesPage.locator('[data-testid="toggle-switch-button"]');
   //test 1
    await toggle.first().click();
    await toggle.nth(1).click();
    await page.locator('[class*="p-4 border-b"] [name*="money.amount"]').first().fill('50000');
    await page.locator('[class*="p-4 border-b"] [name*="money.amount"]').nth(1).fill('50000');
    const total = await page.locator('[class="font-inter text-sm font-medium"]').textContent();
    console.log(total);
    await page.pause()

    //pay in % test 2
    for (let i = 0; i < 4; i++) {
        await toggle.nth(i).click();
        await page.getByTestId(`commissionParticipant[${i}].percent.value`).fill('25')
    }
    //    await page.pause();
    console.log(total);
    await page.pause()

    //test 3 1st 2 paid in$  2nd 2 paid in %
    for (let i = 0; i < 2; i++) {
        await toggle.nth(i).click();
        await page.locator('[class*="p-4 border-b"] [name*="money.amount"]').nth(i).fill('50000');
    };

    for (let i = 2; i < 4; i++) {
        await page.getByTestId(`commissionParticipant[${i}].percent.value`).fill('50')
    }
    console.log(total);
    await page.pause()

})