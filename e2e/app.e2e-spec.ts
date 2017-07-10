import { AngProjPage } from './app.po';

describe('ang-proj App', () => {
  let page: AngProjPage;

  beforeEach(() => {
    page = new AngProjPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
