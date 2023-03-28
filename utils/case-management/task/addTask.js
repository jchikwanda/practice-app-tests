/**
 * Adds a new task to a given page using the provided task name and notes.
 *
 * @async
 * @param {Page} page - The playwright page object to interact with.
 * @param {object} data - Data concerning the task { taskNotes, addCase }.
 * @param {string} taskNotes - Additional notes or description for the new task.
 * @returns {Promise<void>} - Resolves when the task is added successfully.
 */
const addTask = async ({ page, data }) => {
    /* Add A Task */
    const { taskNotes, addCase } = data;
    
    // Clicking Add Button
    await page.click("//li[@data-uid='case_tasks']//div[1]");
    await page.mainFrame().waitForSelector("//button[@aria-label='Add']");
    await page.click("//button[@aria-label='Add']");

    // Choosing task name
    await page.click("(//div[contains(@class,'e-float-input e-control-wrapper')])[1]");
    await page.getByRole('combobox', { name: 'Task Name' }).first().click();
    await page.getByRole('option', { name: 'Initial Appearance' }).click();

    // Choosing Priority
    await page.getByRole('combobox', { name: 'Priority' }).first().click();
    await page.getByRole('option', { name: 'Normal' }).click();

    // Choosing Staff for the Task
    await page.locator('.e-multi-select-wrapper > .e-input-group-icon').click();
    await page.getByRole('option', { name: 'Adam Plumer' }).click();
    await page.locator('.e-multi-select-wrapper > .e-input-group-icon').click();
    await page.getByRole('option', { name: 'Nicholas Wooldridge' }).click();

    // Choosing Due Date
    await page.getByLabel('Due Date', { exact: true }).click();
    await page.getByLabel('Due Date', { exact: true }).fill('3/27/2024');

    // Adding Note to Task
    await page.getByLabel('Notes', { exact: true }).click();
    await page.getByLabel('Notes', { exact: true }).fill(taskNotes);

    // Choosing related case
    if (!addCase) {
        await page.getByRole('combobox', { name: 'Case' }).first().click();
        await page.getByRole('option', { name: 'State of Nevada v. Christopher Olding' }).click();
    } else {
        await page.locator('label').filter({ hasText: 'Task is not related to case' }).locator('span').first().click();
    }

    // Submit Data
    await page.getByRole('button', { name: 'Save' }).click();
}

module.exports = addTask;