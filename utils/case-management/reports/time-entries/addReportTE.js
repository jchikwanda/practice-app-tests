/**
 * Adds a new task to a given page using the provided task name and notes.
 *
 * @async
 * @param {Page} page - The playwright page object to interact with.
 * @returns {Promise<void>} - Resolves when the task is added successfully.
 */
const addReportTE = async ({ page }) => {

    await page.getByRole('button', { name: 'Add' }).click();
    await page.locator('div').filter({ hasText: /^Entry Date$/ }).locator('span').nth(2).click();
    await page.getByRole('button', { name: 'Today' }).click();
    await page.getByRole('combobox', { name: 'Activity' }).first().click();
    await page.getByRole('option', { name: 'Arraignment' }).click();
    await page.getByRole('combobox', { name: 'Case' }).first().click();
    await page.getByRole('option', { name: 'State of Nevada v. Christopher Olding' }).click();
    await page.getByRole('combobox', { name: 'Staff' }).first().click();
    await page.getByRole('option', { name: 'Adam Plumer' }).click();
    await page.getByLabel('Description', { exact: true }).click();
    await page.getByLabel('Description', { exact: true }).fill('Playwright time entry');
    await page.getByLabel('Rate', { exact: true }).click();
    await page.getByLabel('Rate', { exact: true }).fill('1');
    await page.getByLabel('Duration (hours)', { exact: true }).click();
    await page.getByLabel('Duration (hours)', { exact: true }).fill('5');
    await page.getByRole('button', { name: 'Save' }).click();
}

module.exports = addReportTE;