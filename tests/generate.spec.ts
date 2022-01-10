import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.google.com/
  await page.goto('https://www.google.com/');

  // Click [aria-label="Search"]
  await page.click('[aria-label="Search"]');

  // Fill [aria-label="Search"]
  await page.fill('[aria-label="Search"]', 'playwright');

  // Press Enter
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.google.com/search?q=playwright&source=hp&ei=yfDbYaDmPMzJrgSQtJfgDQ&iflsig=ALs-wAMAAAAAYdv-2iE8HeNMbIjKRtqMzCsI4fFVlWSP&ved=0ahUKEwjg7pi35Kb1AhXMpIsKHRDaBdwQ4dUDCAc&uact=5&oq=playwright&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgsILhCABBDHARDRAzoLCC4QgAQQxwEQowI6CwguEIAEEMcBEK8BUJYTWJxDYPdLaAFwAHgAgAFbiAHZBZIBAjEwmAEAoAEBsAEA&sclient=gws-wiz' }*/),
    page.press('[aria-label="Search"]', 'Enter')
  ]);

  // Click text=Playwright: Fast and reliable end-to-end testing for modern ...
  await page.click('text=Playwright: Fast and reliable end-to-end testing for modern ...');
  await expect(page).toHaveURL('https://playwright.dev/');

});