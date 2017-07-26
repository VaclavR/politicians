import { PoliticsPage } from './app.po';

describe('politics App', () => {
  let page: PoliticsPage;

  beforeEach(() => {
    page = new PoliticsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
