import { expect, test } from '@playwright/test'

test('should render the button', async ({ page }) => {
    await page.goto('/');                       //Go to the  homepage. (Asynchronous code)
    await page.waitForSelector('button');       //Wait for the button to be rendered.

    //Take a screenshot
    const screenshot = await page.screenshot({path: `screenshots/ss-${page.viewportSize().width}.png`});     //Asynchronous code

    await expect(page).toHaveScreenshot({maxDiffPixel: 100});
})