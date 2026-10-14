
import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../../src/support/world';
import { LoginPage } from    '../../src/pages/LoginPage';
import { ProductsPage } from '../../src/pages/ProductsPage';

Given('que acesso a página de login', async function (this: CustomWorld) {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigate();
});

When('informo credenciais válidas', async function (this: CustomWorld) {
  await this.loginPage.login(
    process.env.SAUCE_USERNAME!,
    process.env.SAUCE_PASSWORD!
  );
});

Then('devo visualizar a página de produtos', async function (this: CustomWorld) {
  const productsPage = new ProductsPage(this.page);
  await productsPage.expectPageVisible();
});
