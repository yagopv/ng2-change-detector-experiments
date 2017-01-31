import { browser, element, by } from 'protractor';

export class Ng2ChangeDetectorExperimentsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('parent h1')).getText();
  }
}
