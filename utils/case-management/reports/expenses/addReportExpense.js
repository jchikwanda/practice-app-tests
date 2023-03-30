/**
 * Adds a new task to a given page using the provided task name and notes.
 *
 * @async
 * @param {Page} page - The playwright page object to interact with.
 * @returns {Promise<void>} - Resolves when the task is added successfully.
 */
const addReportExpense = async ({ page }) => {
    
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByLabel('Date', { exact: true }).click();
    await page.getByRole('dialog', { name: 'Close Add Expense Date close select Description 0 Amount Reduction 1 Quantity  Billable Receipt Invoice Browse... Or drop files here Save Cancel' }).locator('div').filter({ hasText: /^Date$/ }).locator('span').nth(2).click();
    await page.getByRole('button', { name: 'Today' }).click();
    await page.getByRole('combobox', { name: 'Activity' }).first().click();
    await page.getByRole('option', { name: 'Arraignment' }).click();
    await page.getByRole('combobox', { name: 'Staff' }).first().click();
    await page.getByRole('option', { name: 'Adam Plumer' }).click();
    await page.getByRole('combobox', { name: 'Case' }).first().click();
    await page.getByRole('option', { name: 'State of Nevada v. Christopher Olding' }).click();
    await page.getByLabel('Description', { exact: true }).click();
    await page.getByLabel('Description', { exact: true }).fill('Playwright Expense');
    await page.getByRole('button', { name: 'Save' }).click();
}

module.exports = addReportExpense;