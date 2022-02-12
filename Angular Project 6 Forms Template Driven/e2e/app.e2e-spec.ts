import { AngularFormsTemplateDrivenPage } from './app.po';

describe('angular-forms-template-driven App', function() {
  let page: AngularFormsTemplateDrivenPage;

  beforeEach(() => {
    page = new AngularFormsTemplateDrivenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
