/**
 * Adds a new report contact to a given page using the provided task name and notes.
 *
 * @async
 * @param {Page} page - The playwright page object to interact with.
 * @returns {Promise<void>} - Resolves when the task is added successfully.
 */
const addReportContact = async ({ page }) => {
    await page.getByRole('button', { name: 'Add' }).click();
    await page.locator("(//input[contains(@class,'form-control e-control')])[1]").click();
    await page.locator("(//input[contains(@class,'form-control e-control')])[1]").fill('Play');
    await page.locator("(//input[contains(@class,'form-control e-control')])[2]").click();
    await page.locator("(//input[contains(@class,'form-control e-control')])[2]").fill('Wright');
    await page.locator("(//input[contains(@class,'form-control e-control')])[3]").click();
    await page.locator("(//input[contains(@class,'form-control e-control')])[3]").fill('Mr.');
    await page.getByLabel('Email', { exact: true }).click();
    await page.getByLabel('Email', { exact: true }).fill('playwright@gmail.com');
    await page.getByRole('combobox', { name: 'Contact Group' }).first().click();
    await page.getByRole('option', { name: 'Client', exact: true }).click();
    await page.getByRole('combobox', { name: 'Entity' }).first().click();
    await page.getByRole('option', { name: 'Las Vegas Justice Court' }).click();
    await page.getByLabel('Mobile Phone', { exact: true }).click();
    await page.getByLabel('Mobile Phone', { exact: true }).fill('0966079871');
    await page.getByLabel('Work Phone', { exact: true }).click();
    await page.getByLabel('Work Phone', { exact: true }).fill('0966079871');
    await page.getByLabel('Title / Position', { exact: true }).click();
    await page.getByLabel('Title / Position', { exact: true }).fill('Dev');
    await page.getByRole('button', { name: 'Save' }).click();
}

module.exports = addReportContact;