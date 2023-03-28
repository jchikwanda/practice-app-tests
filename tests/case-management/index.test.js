const { test, expect } = require("../../fixtures/data.fixture");
const { taskData, editData } = require("../../test-data");
const { addTask, editTask, deleteTask, searchTask } = require("../../utils/case-management/task");
const { handleLogin } = require('../../utils/misc');

test.describe("Case Management Test Suite", () => {

    let page;
    
    test.beforeAll(async ({browser, data}) => {
        const context = await browser.newContext();
        page = await context.newPage();
        await handleLogin({ page, data, expect });
        await page.getByRole('menuitem', { name: 'Case Management' }).click();
    })
    
    test.afterAll(async ({browser}) => {
        browser.close()
    })
    
    test("Run Add, Delete, Edit & Search Tests on Tasks Section", async () => {
        await page.getByRole('treeitem', { name: 'Tasks' }).locator('div').first().click();
        
        /* Add Task */
        await addTask({ page, data: taskData[0] });

        // /* Delete Task */
        await deleteTask({ page });

        /* Edit Task */
        await editTask({ page, data: editData[0] });

        /* Search Task */
        await searchTask({ page });
    })
    
})