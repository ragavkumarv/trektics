import { TrekticsPage } from './app.po';

describe('trektics App', () => {
  let page: TrekticsPage;

  beforeEach(() => {
    page = new TrekticsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
