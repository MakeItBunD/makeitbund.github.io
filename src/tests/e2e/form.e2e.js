const CatalogPage = require('../pages/catalog.page')

describe('FORM TESTS', () => {
    it('should create with valid values', async () => {
        // act
        await CatalogPage.open()
        await CatalogPage.login('admin')
        await CatalogPage.showCreateForm()
        await CatalogPage.createProduct(1010101)

        // assert
        await expect(CatalogPage.createForm).not.toBeExisting()
    })

    it('should not create with empty values', async () => {
        // act
        await CatalogPage.open()
        await CatalogPage.showCreateForm()
        await CatalogPage.createProduct('')

        // assert
        await expect(CatalogPage.createForm).toBeExisting()
    })
})


