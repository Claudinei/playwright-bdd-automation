import { World, setWorldConstructor } from '@cucumber/cucumber';
import { Browser, Page, BrowserContext } from 'playwright';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
}

setWorldConstructor(CustomWorld);