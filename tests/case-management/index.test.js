const { test, expect } = require("../../fixtures/data.fixture");
const { handleLogin } = require("../../utils");

test.describe("Case Management Test Suite", () => {

    let page;
    
    test.beforeAll(async ({browser, data}) => {
        const context = await browser.newContext();
        page = await context.newPage();
        await handleLogin({ page, data, expect });
        await page.click("//li[@aria-label='Case Management']");
    })
    
    test.afterAll(async ({browser}) => {
        browser.close()
    })
    
    test("Testing Tasks Section", async () => {
        await page.click("//li[@data-uid='case_tasks']//div[1]");
    })
    
})