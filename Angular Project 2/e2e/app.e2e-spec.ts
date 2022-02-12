import { AngularApp2Page } from './app.po';

describe('angular-app2 App', function() {
  let page: AngularApp2Page;

  beforeEach(() => {
    page = new AngularApp2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
