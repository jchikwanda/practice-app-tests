/**
 * Edits a task on the current page.
 *
 * @async
 * @param {Page} page - The playwright page object to interact with.
 * @param {object} data - Data concerning the task { taskNotes, addCase }.
 * @param {string} taskNotes - Additional notes or description for the new task.
 * @returns {Promise<void>} - Resolves when the task is added successfully.
 */
const editReportClient = async ({ page, data }) => {
    /* Add A ReportClient */
    const row = await page.locator('.e-row:first-child');

    if (row) {
        await page.locator('.e-row:first-child').click();
        await page.getByRole('button', { name: 'Edit' }).click();

        await page.getByText('Donald TrumpContact').click();
        await page.getByRole('option', { name: 'Cynthia Cruz' }).click();
        await page.getByRole('button', { name: 'Save' }).click();
        // await page.locator('li:nth-child(3) > div').first().click();
        // await page.locator('li:nth-child(2) > .e-fullrow').first().click();
        // await page.locator('.e-row:first-child').click();
        // await page.getByRole('button', { name: 'Edit' }).click();
    } else {
        console.log("No row to update");
    }
}

module.exports = editReportClient