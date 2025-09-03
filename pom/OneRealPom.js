export class OneRealPom {
    constructor(page) {
        this.page = page;
        this.randomClick = page.locator('[alt="lanyard"]');
        this.firstName = page.locator('[name="firstName"]');
        this.lastName = page.locator('[name="lastName"]');
        this.userName = page.locator('[name="username"]');
        this.email = page.locator('[name="emailAddress"]');
        this.country = page.locator('[data-testid="country"]');
        this.selectCountry = page.locator('text="United States"')
        this.password = page.locator('[name="password"]');
        this.cpassword = page.locator('[name="confirmPassword"]');
        this.iagree = page.locator('[name="terms"]');
        this.iagreePrivacy = page.locator('[name="permission"]');
        this.createAcc = page.locator('[type="submit"]');
//      Error Validations
        this.eFName = page.locator('.mantine-TextInput-root').filter({ hasText: 'First Name' }).locator('.mantine-TextInput-error');
        this.eLName = page.locator('.mantine-TextInput-root').filter({ hasText: 'Last Name' }).locator('.mantine-TextInput-error');
        this.eUName = page.locator('.mantine-TextInput-root').filter({ hasText: 'Username' }).locator('.mantine-TextInput-error');
        this.eEName = page.locator('.mantine-TextInput-root').filter({ hasText: 'Email' }).locator('.mantine-TextInput-error');
        this.ePName = page.locator('.mantine-TextInput-root').filter({ hasText: 'Password' }).locator('.mantine-TextInput-error');
        this.eCPName = page.locator('.mantine-TextInput-root').filter({ hasText: 'Password Confirmation' }).locator('.mantine-TextInput-error');

    }
    makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    async goToUrl() {
        await this.page.goto('https://bolt.playrealbrokerage.com/login');
        await this.page.locator('text="Join Real"').click();
        await this.page.waitForURL('https://bolt.playrealbrokerage.com/register');
    }

    async errorValidation(expect) {
        await this.firstName.click()
        await this.lastName.click()
        await this.userName.click()
        await this.email.click()
        await this.country.click()
        await this.selectCountry.click()
        await this.password.click()
        await this.cpassword.click()
        await this.iagree.click()
        await expect(this.eFName).toContainText('First name is required')
        await expect(this.eLName).toContainText('Last name is required')
        await expect(this.eUName).toContainText('Username is required')
        await expect(this.eEName).toContainText('Email is required')
        await expect(this.ePName.first()).toContainText('Password is required')
        await expect(this.eCPName).toContainText('Please re-enter your password')
    }
    async completeFormJourney() {
        //valid inputs
        await this.firstName.fill('Shivpratap');
        await this.lastName.fill('Singh');
        await this.userName.fill(`S${this.makeid(12)}`);
        await this.email.fill(`Shiv@${this.makeid(12)}.com`);
        await this.country.click();
        await this.selectCountry.click();
        await this.password.fill('Shiv@123456789');
        await this.cpassword.fill('Shiv@123456789');
        await this.iagree.check();
        await this.iagreePrivacy.check();
        await this.createAcc.click();
    }
    async verifyFinalPage() {
        await this.page.getByText('Hi, Shivpratap Singh 👋*').waitFor();
    }
}