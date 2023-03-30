/**
 * Adds a new report entity to a given page using the provided task name and notes.
 *
 * @async
 * @param {Page} page - The playwright page object to interact with.
 * @returns {Promise<void>} - Resolves when the task is added successfully.
 */
const addReportEntity = async ({ page }) => {
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByLabel('Name', { exact: true }).fill('Playwright');
    await page.getByRole('combobox', { name: 'Entity Type' }).first().click();
    await page.getByRole('option', { name: 'Business' }).click();
    await page.getByLabel('Phone', { exact: true }).click();
    await page.getByLabel('Phone', { exact: true }).fill('0966079871');
    await page.getByLabel('Email', { exact: true }).click();
    await page.getByLabel('Email', { exact: true }).fill('playwright@gmail.com');
    await page.getByLabel('Address', { exact: true }).click();
    await page.getByLabel('Address', { exact: true }).fill('2435 Chifubu');
    await page.getByLabel('Website', { exact: true }).click();
    await page.getByLabel('Website', { exact: true }).fill('www.play.com');
    await page.getByRole('combobox', { name: 'Primary Contact' }).first().click();
    await page.getByRole('option', { name: 'Donald Trump' }).click();
    await page.getByRole('button', { name: 'Save' }).click();
}

module.exports = addReportEntity;