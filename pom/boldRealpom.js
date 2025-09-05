// export class boldRealpom {
//     constructor(page) {
//         this.page = page;
//         // await page.waitForTimeout(2000)
//         // await 
//         this.clickTransaction = page.locator('text=KJ1-T94-26Y-23O').click({ force: true })
//         // await page.locator('[href*="Onboardings"] [type="button"]').first().click();
//         this.details = page.locator('[class="relative"] [class*="px-4 flex flex-row"]').locator('text=Details')
//         this.clickTransaction = this.details.scrollIntoViewIfNeeded();
//         await details.click();
//         await page.locator('text="Adjust Commission (%) / splits"').scrollIntoViewIfNeeded();
//         await page.locator('text="Adjust Commission (%) / splits"').click();
//     }
//     async goToUrl() {
//         await page.goto('https://bolt.playrealbrokerage.com/');
//         await page.waitForLoadState('domcontentloaded')
//     };
//     async goToTogglePage() {
//         // await page.waitForTimeout(2000)
//         // await 
//         await page.locator('text=KJ1-T94-26Y-23O').click({ force: true })
//         // await page.locator('[href*="Onboardings"] [type="button"]').first().click();
//         const details = page.locator('[class="relative"] [class*="px-4 flex flex-row"]').locator('text=Details')
//         await details.scrollIntoViewIfNeeded();
//         await details.click();
//         await page.locator('text="Adjust Commission (%) / splits"').scrollIntoViewIfNeeded();
//         await page.locator('text="Adjust Commission (%) / splits"').click();

//     };
//     async test1() {
//         const togglesPage = page.locator('[title="sidebar-form"]');
//         const toggle = await togglesPage.locator('[data-testid="toggle-switch-button"]');
//         await toggle.first().click();
//         await toggle.nth(1).click();
//         await page.locator('[class*="p-4 border-b"] [name*="money.amount"]').first().fill('50000');
//         await page.locator('[class*="p-4 border-b"] [name*="money.amount"]').nth(1).fill('50000');
//         const total = await page.locator('[class="font-inter text-sm font-medium"]').textContent();
//         console.log(total);
//     }
//     async test2() {
//         //pay in % test 2
//         for (let i = 0; i < 4; i++) {
//             await toggle.nth(i).click();
//             await page.getByTestId(`commissionParticipant[${i}].percent.value`).fill('25')
//         }
//         //    await page.pause();
//         console.log(total);

//     }
//     async test3() {
//         //test 3 1st 2 paid in$  2nd 2 paid in %
//         for (let i = 0; i < 2; i++) {
//             await toggle.nth(i).click();
//             await page.locator('[class*="p-4 border-b"] [name*="money.amount"]').nth(i).fill('50000');
//         };

//         for (let i = 2; i < 4; i++) {
//             await page.getByTestId(`commissionParticipant[${i}].percent.value`).fill('50')
//         }
//         console.log(total);
//         await page.pause()
//     }
// }






