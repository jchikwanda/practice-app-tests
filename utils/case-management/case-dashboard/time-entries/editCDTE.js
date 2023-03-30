/**
 * Edits a task on the current page.
 *
 * @async
 * @param {Page} page - The playwright page object to interact with.
 * @param {object} data - Data concerning the task { taskNotes, addCase }.
 * @param {string} taskNotes - Additional notes or description for the new task.
 * @returns {Promise<void>} - Resolves when the task is added successfully.
 */
const editTask = async ({ page, data }) => {
    /* Add A Task */
    const { taskNotes, addCase } = data;
    const row = await page.locator('.e-row:first-child');

    if (row) {
        await page.locator('.e-row:first-child').click();
        await page.getByRole('button', { name: 'Edit' }).click();


        // Updating task name
        await page.click("(//div[contains(@class,'e-float-input e-control-wrapper')])[1]");
        await page.getByRole('combobox', { name: 'Task Name' }).first().click();
        await page.getByRole('option', { name: 'Initial Appearance' }).click();
    
        // Updating Priority
        await page.getByRole('combobox', { name: 'Priority' }).first().click();
        await page.getByRole('option', { name: 'Normal' }).click();
    
        // Updating Staff for the Task
        await page.locator('span:nth-child(4)').first().click();
        await page.locator('.e-multi-select-wrapper > .e-input-group-icon').click();
        await page.getByRole('option', { name: 'Adam Plumer' }).click();
        await page.locator('.e-multi-select-wrapper > .e-input-group-icon').click();
        await page.getByRole('option', { name: 'Nicholas Wooldridge' }).click();
    
        // Updating Due Date
        await page.getByLabel('Due Date', { exact: true }).click();
        await page.getByLabel('Due Date', { exact: true }).fill('3/27/2024');
    
        // Updating Note to Task
        await page.getByLabel('Notes', { exact: true }).click();
        await page.getByLabel('Notes', { exact: true }).fill(taskNotes);
    
        // Updating related case
        if (!addCase) {
            await page.getByRole('combobox', { name: 'Case' }).first().click();
            await page.getByRole('option', { name: 'State of Nevada v. Christopher Olding' }).click();
        } else {
            await page.locator('label').filter({ hasText: 'Task is not related to case' }).locator('span').first().click();
        }
    
        // Submit Data
        await page.getByRole('button', { name: 'Save' }).click({ timeout: 10000 });
        // await page.locator('li:nth-child(3) > div').first().click();
        // await page.locator('li:nth-child(2) > .e-fullrow').first().click();
        // await page.locator('.e-row:first-child').click();
        // await page.getByRole('button', { name: 'Edit' }).click();
    } else {
        console.log("No row to update");
    }
}

module.exports = editTask