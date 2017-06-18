import { ScholarPage } from './app.po';

describe('scholar App', () => {
  let page: ScholarPage;

  beforeEach(() => {
    page = new ScholarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
