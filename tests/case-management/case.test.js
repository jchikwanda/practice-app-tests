const { test, expect } = require("../../fixtures/data.fixture");
const { handleLogin } = require("../../utils");

test.describe("Case Management Test Suite", () => {

    let page;
    
    test.beforeAll(async ({browser, data}) => {
        const context = await browser.newContext();
        page = await context.newPage();
        await handleLogin({ page, data, expect })
    })
    
    test.afterAll(async ({browser}) => {
        browser.close()
    })
    
    test("Test 1", async ({ page, data, browser }) => {
        console.log("Running tests")
    })
    
})