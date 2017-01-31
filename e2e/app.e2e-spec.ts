import { Ng2ChangeDetectorExperimentsPage } from './app.po';

describe('ng2-change-detector-experiments App', function() {
  let page: Ng2ChangeDetectorExperimentsPage;

  beforeEach(() => {
    page = new Ng2ChangeDetectorExperimentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
