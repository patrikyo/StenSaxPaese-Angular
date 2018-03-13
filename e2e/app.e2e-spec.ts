import { SpelPage } from './app.po';

describe('spel App', function() {
  let page: SpelPage;

  beforeEach(() => {
    page = new SpelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
