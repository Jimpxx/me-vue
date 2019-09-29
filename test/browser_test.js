/**
 * Test for getting started with Selenium.
 */
'use strict';

const assert = require('assert');
const test = require('selenium-webdriver/testing');
const webdriver = require('selenium-webdriver');
const By = webdriver.By;

let browser;

// Does not work with WSL!! Use cygwin

// Test suite
test.describe('Me-vue', function() {
    test.beforeEach(function(done) {
        this.timeout(20000);
        browser = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.firefox())
            .build();

        browser.get('http://localhost:8080/#/');
        done();
    });

    test.afterEach(function(done) {
        browser.quit();
        done();
    });

    function goToNavLink(target) {
        browser.findElement(By.linkText(target)).then(function(element) {
            element.click();
        });
    }

    // function matchUrl(target) {
    //     browser.getCurrentUrl().then(function(url) {
    //         assert.ok(url.endsWith('multipage/' + target));
    //     });
    // }

    function assertH1(target) {
        browser.findElement(By.css('h1')).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, target);
            });
        });
    }

    // Test case
    test.it('Test index', function(done) {
        let promise = browser.getTitle();

        promise.then(function(title) {
            assert.equal(title, 'me-vue');
        });

        // browser.getTitle().then(function(title) {
        //     assert.equal(title, 'me-vue');
        // });

        // assertH1('Me-page');
        // matchUrl('#!/');

        done();
    });

    test.it('Test go to Home', function(done) {
        // try use nav link
        goToNavLink('Me');

        assertH1('Me-page');
        // matchUrl('#!/');

        done();
    });

    test.it('Test go to Register', function(done) {
        // try use nav link
        goToNavLink('Register');

        assertH1('Register an account to write your weekly reports');
        // matchUrl('#!/');

        done();
    });

    test.it('Test go to Login', function(done) {
        // try use nav link
        goToNavLink('Login');

        assertH1('Login to write your weekly reports');
        // matchUrl('#!/');

        done();
    });

    // test.it("Test go to About", function(done) {
    //     goToNavLink("About");

    //     // get h1 text
    //     assertH1("About");
    //     matchUrl("#!/about");

    //     done();
    // });

    // test.it("Test go to Calculator", function(done) {
    //     goToNavLink("Calculator");

    //     // get h1 text
    //     assertH1("Calculator");
    //     matchUrl("#!/calculator");

    //     done();
    // });

    // test.it("Test color on Calculator", function(done) {
    //     goToNavLink("Calculator");

    //     // display element background color
    //     browser.findElement(By.id("display")).then(function(displayElement) {
    //         displayElement.getCssValue("background-color").then(function(bgColor) {
    //             assert.equal(bgColor, "rgb(221, 221, 221)");
    //         });
    //     });

    //     // operator buttons background color
    //     browser.findElements(By.className("operator")).then(function(operatorElements) {
    //         webdriver.promise.map(operatorElements, function(element) {
    //             return element.getCssValue('background-color');
    //         }).then(function(colors) {
    //             colors.forEach(function(color) {
    //                 assert.equal(color, "rgb(0, 31, 63)");
    //             });
    //         });
    //     });

    //     done();
    // });
});
