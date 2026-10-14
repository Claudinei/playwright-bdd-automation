
import { Page, Locator, expect } from 'playwright/test';

export class ProductsPage {
  private readonly title: Locator;

  constructor(private readonly page: Page) {
    this.title = page.locator('[data-test="title"]');
  }

  async expectPageVisible(): Promise<void> {
    await expect(this.title).toHaveText('Products');
  }
}
