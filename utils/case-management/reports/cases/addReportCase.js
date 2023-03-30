/**
 * Adds a new case to a given page using the provided task name and notes.
 *
 * @async
 * @param {Page} page - The playwright page object to interact with.
 * @returns {Promise<void>} - Resolves when the task is added successfully.
 */
const addReportCase = async ({ page }) => {
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByLabel('Case Name', { exact: true }).click();
    await page.getByLabel('Case Name', { exact: true }).fill('Playwright Case');
    await page.getByLabel('Case Number', { exact: true }).click();
    await page.getByLabel('Case Number', { exact: true }).fill('89');
    await page.getByRole('combobox', { name: 'Case Stage' }).first().click();
    await page.getByRole('option', { name: 'Pre-Charge' }).click();
    await page.getByRole('combobox', { name: 'Cause(s) of Action' }).click();
    await page.getByRole('option', { name: 'Battery' }).click();
    await page.getByRole('combobox', { name: 'Practice Area' }).first().click();
    await page.getByRole('option', { name: 'Criminal Defense' }).click();
    await page.getByLabel('Incident Date', { exact: true }).click();
    await page.locator('div').filter({ hasText: /^Incident Date$/ }).locator('span').nth(2).click();
    await page.getByRole('button', { name: 'Today' }).click();
    await page.getByLabel('Incident Location', { exact: true }).click();
    await page.getByLabel('Incident Location', { exact: true }).fill('Playwright City');
    await page.getByLabel('Case Description', { exact: true }).click();
    await page.getByLabel('Case Description', { exact: true }).fill('This is a playwright case');
    await page.getByRole('combobox', { name: 'Client(s)' }).click();
    await page.getByRole('option', { name: 'Christopher Olding' }).click();
    await page.getByRole('combobox', { name: 'Court' }).first().click();
    await page.getByRole('option', { name: 'Las Vegas Justice Court' }).click();
    await page.getByRole('combobox', { name: 'Department' }).first().click();
    await page.getByRole('option', { name: 'Donald Trump' }).click();
    await page.getByRole('combobox', { name: 'Assigned Attorneys' }).click();
    await page.getByRole('option', { name: 'Adam Plumer' }).click();
    await page.getByRole('combobox', { name: 'Staff' }).click();
    await page.getByRole('option', { name: 'Adam Plumer' }).click();
    await page.getByRole('combobox', { name: 'Share case information with' }).first().click();
    await page.getByRole('option', { name: 'Donald Trump' }).click();
    await page.getByRole('combobox', { name: 'Lead' }).first().click();
    await page.getByRole('combobox', { name: 'Contacts' }).click();
    await page.getByRole('option', { name: 'Donald Trump' }).click();
    await page.getByRole('tab', { name: 'Billing' }).locator('div').first().click();
    await page.getByRole('combobox', { name: 'Fee Type' }).first().click();
    await page.getByRole('combobox', { name: 'Fee Type' }).first().click();
    await page.getByRole('option', { name: 'Hourly', exact: true }).click();
    await page.getByLabel('Flat Fee Retainer', { exact: true }).click();
    await page.getByLabel('Flat Fee Retainer', { exact: true }).fill('100');
    await page.getByLabel('Hourly Retainer', { exact: true }).click();
    await page.getByLabel('Hourly Retainer', { exact: true }).fill('0.5');
    await page.locator('label').filter({ hasText: 'Trial Included' }).locator('span').first().click();
    await page.locator('label').filter({ hasText: 'Hours Limited on Retainer' }).locator('span').first().click();
    await page.getByLabel('Retainer Hours Limit', { exact: true }).click();
    await page.getByLabel('Retainer Hours Limit', { exact: true }).fill('5');
    await page.locator('label').filter({ hasText: 'Investigator Included' }).locator('span').first().click();
    await page.getByLabel('Investigator Budget', { exact: true }).click();
    await page.getByLabel('Investigator Budget', { exact: true }).fill('300');
    await page.locator('label').filter({ hasText: 'Record Seal/Expungement Included' }).locator('span').first().click();
    await page.getByRole('button', { name: 'Save' }).click();
}

module.exports = addReportCase;