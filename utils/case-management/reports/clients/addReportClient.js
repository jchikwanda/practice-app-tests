/**
 * Adds a new report client to a given page using the provided task name and notes.
 *
 * @async
 * @param {Page} page - The playwright page object to interact with.
 * @returns {Promise<void>} - Resolves when the task is added successfully.
 */
const addReportClient = async ({ page }) => {
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByLabel('Cleint Name', { exact: true }).click();
    await page.getByLabel('Cleint Name', { exact: true }).fill('Mr. Playwright');
    await page.getByRole('combobox', { name: 'Contact' }).first().click();
    await page.getByRole('option', { name: 'Donald Trump' }).click();
    await page.getByRole('button', { name: 'Save' }).click();
}

module.exports = addReportClient;