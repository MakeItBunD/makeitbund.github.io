const CatalogPage = require('../pages/catalog.page')

describe('LOGIN TESTS', () => {
    beforeEach(async () => {
        await CatalogPage.open()
    })

    it('should login with valid password', async () => {
        // act
        await CatalogPage.login('admin')

        // assert
        await expect(CatalogPage.logOutBtn).toBeExisting()
        await expect(CatalogPage.showFormBtn).toBeExisting()

        // act
        await CatalogPage.loginOut()
    })

    it('should not login with invalid password', async () => {
        // act
        await CatalogPage.login('ivalidPassword')

        // assert
        await expect(CatalogPage.logOutBtn).not.toBeExisting()
        await expect(CatalogPage.showFormBtn).not.toBeExisting()
    })
})


