/**
 * Adds a new task to a given page using the provided task name and notes.
 *
 * @async
 * @param {Page} page - The playwright page object to interact with.
 * @returns {Promise<void>} - Resolves when the task is added successfully.
 */
const addReportPayment = async ({ page }) => {
    
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByRole('combobox', { name: 'Bank Account' }).first().click();
    await page.getByRole('option', { name: '[object Object]' }).click();
    await page.getByRole('combobox', { name: 'Payment Method' }).first().click();
    await page.getByRole('option', { name: 'Card' }).click();
    await page.getByRole('dialog', { name: 'Close Add Payment Amount Payment Time select  Save Cancel' }).locator('div').filter({ hasText: /^Payment Time$/ }).locator('span').nth(2).click();
    await page.getByRole('button', { name: 'Today' }).click();
    await page.getByLabel('Amount', { exact: true }).click();
    await page.getByLabel('Amount', { exact: true }).fill('100');
    await page.getByRole('combobox', { name: 'Case' }).first().click();
    await page.getByRole('option', { name: 'State of Nevada v. Christopher Olding' }).click();
    await page.getByRole('combobox', { name: 'Invoice' }).first().click();
    await page.getByRole('combobox', { name: 'Status' }).first().click();
    await page.getByRole('option', { name: 'Card' }).click();
    await page.getByRole('button', { name: 'Save' }).click();
}

module.exports = addReportPayment;