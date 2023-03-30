/**
 * Searches for a task on the current page.
 * @param {Object} options - The options for searching the task.
 * @param {import('playwright').Page} options.page - The Playwright page object.
 * @param {string} options.searchTerm - The search term to use.
 */
const searchReportPayment = async ({ page, searchTerm="playwright" }) => {
    await page.getByRole('searchbox', { name: 'Search' }).click();
    await page.getByRole('searchbox', { name: 'Search' }).fill(searchTerm);
    await page.getByRole('search', { name: 'search' }).click();
};

module.exports = searchReportPayment;