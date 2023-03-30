/**
 * Edits a task on the current page.
 *
 * @async
 * @param {Page} page - The playwright page object to interact with.
 * @returns {Promise<void>} - Resolves when the task is added successfully.
 */
const editReportContact = async ({ page }) => {
    /* Add A Task */
    const row = await page.locator('.e-row:first-child');

    if (row) {
        await page.locator('.e-row:first-child').click();
        await page.getByRole('button', { name: 'Edit' }).click();
        await page.getByLabel('Mobile Phone', { exact: true }).click();
        await page.getByLabel('Mobile Phone', { exact: true }).fill('0770315567');
        await page.getByLabel('Work Phone', { exact: true }).click();
        await page.getByLabel('Work Phone', { exact: true }).fill('0770315567');
        await page.getByLabel('Title / Position', { exact: true }).click();
        await page.getByLabel('Title / Position', { exact: true }).fill('Developer');
        await page.getByRole('button', { name: 'Save' }).click();
        // await page.locator('li:nth-child(3) > div').first().click();
        // await page.locator('li:nth-child(2) > .e-fullrow').first().click();
        // await page.locator('.e-row:first-child').click();
        // await page.getByRole('button', { name: 'Edit' }).click();
    } else {
        console.log("No row to update");
    }
}

module.exports = editReportContact