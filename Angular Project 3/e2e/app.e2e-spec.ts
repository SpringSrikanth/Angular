import { AngularApp3Page } from './app.po';

describe('angular-app3 App', function() {
  let page: AngularApp3Page;

  beforeEach(() => {
    page = new AngularApp3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
