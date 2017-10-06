import { TracPage } from './app.po';

describe('trac App', function() {
  let page: TracPage;

  beforeEach(() => {
    page = new TracPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
