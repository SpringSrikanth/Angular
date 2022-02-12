import { AngularApp1Page } from './app.po';

describe('angular-app1 App', function() {
  let page: AngularApp1Page;

  beforeEach(() => {
    page = new AngularApp1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
