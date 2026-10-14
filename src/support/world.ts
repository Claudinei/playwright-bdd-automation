import { World, setWorldConstructor } from '@cucumber/cucumber';
import { Browser, Page, BrowserContext } from 'playwright';
import { LoginPage } from '../pages/LoginPage';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  loginPage!: LoginPage;
}

setWorldConstructor(CustomWorld);