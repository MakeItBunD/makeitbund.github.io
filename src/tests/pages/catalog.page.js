const Page = require('./page');

   /* global $ $$ */

class CatalogPage extends Page {

    get loginBtn () {
        return $('[data-testid="login-btn"]');
    }

    get loginInput () {
        return $('[data-testid="login-input"]');
    }

    get loginModalBtn () {
        return $('[data-testid="login-modal-btn"]');
    }

    get showFormBtn () {
        return $('[data-testid="show-form-btn"]');
    }

    get logOutBtn () {
        return $('[data-testid="log-out-btn"]');
    }

    get formInputs () {
        return $$('.form__input')
    }

    get createForm () {
        return $('[data-testid="create-form"]')
    }

    get createProductBtn () {
        return $('[data-testid="create-product-btn"]')
    }

    async login (password) {
        await this.loginModalBtn.click();
        await this.loginInput.setValue(password);
        await this.loginBtn.click();
    }

    async loginOut () {
        await this.logOutBtn.click();
    }

    async showCreateForm () {
        await this.showFormBtn.click()
    }

    async createProduct (value) {
        await this.formInputs.forEach(input => {
            input.setValue(value)
        })
        await this.createProductBtn.click()
        await this.createProductBtn.click()
        await this.createProductBtn.click()
    }

    open () {
        return super.open('/catalog');
    }
}

module.exports = new CatalogPage();
