const handleLogin = async ({ page, data, expect }) => {
    const { url, email, password, loginFailedMessage } = data;
    
    // Login
    await page.goto(url);
    await page.type("//input[@placeholder='email@address.com']", email);
    await page.type("//input[@placeholder='password']", password);
    await page.click("//button[text()='Log In']");
    const placeholder = await page.locator("//input[contains(@class,'e-input pm-appbar-search-input')]").getAttribute("placeholder")
    
    // Assert Login
    await expect(placeholder).toBe("Search");
    
    // Open Sidebar Always for Ease of Testing
    const sidebar = await page.locator("#pm-sidebar");
    const classList = await sidebar.getAttribute("class");
    const isSidebarClosed = classList.split(' ').includes('e-close');

    if (isSidebarClosed) {
        await sidebar.evaluate(sidebar => sidebar.classList.remove("e-close") && sidebar.classList.add("e-open"))
    }
}

module.exports = handleLogin