import { MapviewerPage } from './app.po';

describe('mapviewer App', () => {
  let page: MapviewerPage;

  beforeEach(() => {
    page = new MapviewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
