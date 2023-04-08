module.exports = class Page {
    /**
    * @param path 
    */
   /* global browser */

    open (path) {

        return browser.url(`http://localhost:3000/shop/${path}`)
    }
}
