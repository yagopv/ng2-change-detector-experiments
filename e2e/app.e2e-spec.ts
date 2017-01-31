import { Ng2OctopusPage } from './app.po';

describe('ng2-octopus App', function() {
  let page: Ng2OctopusPage;

  beforeEach(() => {
    page = new Ng2OctopusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
