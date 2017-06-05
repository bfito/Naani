import { NaaniCliPage } from './app.po';

describe('naani-cli App', () => {
  let page: NaaniCliPage;

  beforeEach(() => {
    page = new NaaniCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
