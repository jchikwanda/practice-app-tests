const handleLogin = async ({ page, data, expect }) => {
    const { url, email, password, loginFailedMessage } = data;
    
    await page.goto(url);
    await page.type("//input[@placeholder='email@address.com']", email);
    await page.type("//input[@placeholder='password']", password);
    await page.click("//button[text()='Log In']");
    const placeholder = await page.locator("//input[contains(@class,'e-input pm-appbar-search-input')]").getAttribute("placeholder")
    await expect(placeholder).toBe("Search");
}

module.exports = handleLogin