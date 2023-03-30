/**
 * Deletes a case report on the current page.
 * @param {Object} options - The options for deleting the task.
 * @param {import('playwright').Page} options.page - The Playwright page object.
 */
const deleteReportCase = async ({ page }) => {
    const row = await page.locator('.e-row:first-child');

    if (row) {
        await page.locator('.e-row:first-child').click()
        await page.getByRole('button', { name: 'Delete' }).click();
        await page.getByRole('button', { name: 'OK' }).click();
    } else {
        console.log("No row to delete");
    }
};

module.exports = deleteReportCase;