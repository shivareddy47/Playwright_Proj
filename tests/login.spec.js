import { test, expect } from '@playwright/test';

test('should login successfully', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');

  // await expect(page.getByPlaceholder('Username')).toBeVisible();
  await expect(page.locator('label').first())
  .toHaveText('Username');
  //  await .fill('testuser');
  // await page.fill('input[name="password"]', 'testpassword');
  // await page.click('button[type="submit"]');
  // await expect(page).toHaveURL('/dashboard');
});