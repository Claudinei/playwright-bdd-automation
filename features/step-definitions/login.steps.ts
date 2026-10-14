
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'playwright/test';
import { CustomWorld } from '../../src/support/world';

Given('que acesso a página de login', async function (this: CustomWorld) {
  await this.page.goto('https://www.saucedemo.com/');
});

When('informo credenciais válidas', async function (this: CustomWorld) {
  await this.page.locator('[data-test="username"]').fill(process.env.SAUCE_USERNAME!);
  await this.page.locator('[data-test="password"]').fill(process.env.SAUCE_PASSWORD!);
  await this.page.locator('[data-test="login-button"]').click();
});

Then('devo visualizar a página de produtos', async function (this: CustomWorld) {
  await expect(this.page.locator('[data-test="title"]')).toHaveText('Products');
});
