/**
 * Edits a report case on the current page.
 *
 * @async
 * @param {Page} page - The playwright page object to interact with.
 * @returns {Promise<void>} - Resolves when the task is added successfully.
 */
const editReportCase = async ({ page }) => {
    const row = await page.locator('.e-row:first-child');

    if (row) {
        await page.locator('.e-row:first-child').click();
        await page.getByRole('button', { name: 'Edit' }).click();

        await page.getByLabel('Case Description', { exact: true }).click();
        await page.getByLabel('Case Description', { exact: true }).fill('This is a playwright updated case');
        await page.getByLabel('Case Name', { exact: true }).click();
        await page.getByLabel('Case Name', { exact: true }).fill('Playwright Updated Case');
        await page.getByRole('tab', { name: 'Billing' }).getByText('Billing').click();
        await page.getByLabel('Hourly Retainer', { exact: true }).click();
        await page.getByLabel('Hourly Retainer', { exact: true }).fill('1');
        await page.getByRole('button', { name: 'Save' }).click();
        // await page.locator('li:nth-child(3) > div').first().click();
        // await page.locator('li:nth-child(2) > .e-fullrow').first().click();
        // await page.locator('.e-row:first-child').click();
        // await page.getByRole('button', { name: 'Edit' }).click();
    } else {
        console.log("No row to update");
    }
}

module.exports = editReportCase