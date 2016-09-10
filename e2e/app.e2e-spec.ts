import { PatternflyNg2SpikePage } from './app.po';

describe('patternfly-angular2-component-demo App', function() {
  let page: PatternflyNg2SpikePage;

  beforeEach(() => {
    page = new PatternflyNg2SpikePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
