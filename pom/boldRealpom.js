export class boldRealpom {
    constructor(page, expect) {
        this.page = page;
        this.expect = expect;

        this.url = 'https://bolt.playrealbrokerage.com/';
        this.transaction = page.locator('text=KJ1-T94-26Y-23O');
        this.details = page.locator('[class="relative"] [class*="px-4 flex flex-row"]').locator('text=Details');
        this.commision = page.locator('text="Adjust Commission (%) / splits"');
        this.togglePage = '.mb-28 section'
        this.perTextBox = page.locator('[placeholder="Percentage"]:visible');
        this.amtTextBox = page.locator('[placeholder="Amount"]:visible')
        this.toggleBtn = 'button[data-testid*="toggle"]';
        this.perToggle = page.locator(this.togglePage).filter({ has: this.perTextBox }).locator(this.toggleBtn);
        this.verifyTotalAmt = page.locator('[class="flex justify-end"]');
        this.perAmt = '$200,000 (100.00%) / $200,000';
        this.amount = '$200,000 / $200,000';
        this.amtToggle = page.locator(this.togglePage).filter({ has: this.amtTextBox }).locator(this.toggleBtn);
    }
    async goToUrl() {
        await this.page.goto(this.url);
        await this.page.waitForLoadState('domcontentloaded')
    }
    async goToCommisionPage() {
        await this.transaction.click({ force: true })
        await this.details.scrollIntoViewIfNeeded();
        await this.details.click();
        await this.commision.scrollIntoViewIfNeeded();
        await this.commision.click();
    };
    async test1() {
        const disableTogglePer =await this.disableTogglePer();
        // test 1 all use split into $
        for (let i = 0; i < (await disableTogglePer).length; i++) {
            await (await disableTogglePer)[0].click();
            await this.amtTextBox.nth(i).fill("50000");
        }
        await this.expect(this.verifyTotalAmt).toHaveText(this.perAmt);
        await this.expect(this.verifyTotalAmt).toContainText(this.perAmt);
        this.expect(await this.verifyTotalAmt.textContent()).toMatch(/^.{17,}$/);
        // await this.page.pause();
    }
    async disableToggleAmt() {
        return this.amtToggle.all()
    }
    async disableTogglePer() {
        return this.perToggle.all()
    }
    async test2() {
        // test 2 all use split into %
        const disableToggleAmt =await this.disableToggleAmt();
        for (let i = 0; i < disableToggleAmt.length; i++) {
            // console.log((await this.disableToggleAmt()).length);
            
            await disableToggleAmt[0].click();
            await this.perTextBox.nth(i).fill("25");
        };
        await this.expect(this.verifyTotalAmt).toHaveText(this.amount);
        await this.expect(this.verifyTotalAmt).toContainText(this.amount);
        this.expect(await this.verifyTotalAmt.textContent()).toMatch(/^[0-9$/, ]{19,}$/);
        // await this.page.pause();

    }
    async test3() {
        // test 3 all use split into % and & 2:2 ratio;
        const disableTogglePer =await this.disableTogglePer();
        for (let i = 0; i < 2; i++) {
            console.log(i);
            await disableTogglePer[0].click();
            await this.amtTextBox.nth(i).fill("50000");
        }
        for (let i = 0; i < (await this.perTextBox.all()).length; i++) {
            await this.perTextBox.nth(i).fill("50");
        };
        await this.expect(this.verifyTotalAmt).toHaveText(this.amount);
        await this.expect(this.verifyTotalAmt).toContainText(this.amount);
        this.expect(await this.verifyTotalAmt.textContent()).toMatch(/^[0-9$/, ]{19,}$/);
    }
}



