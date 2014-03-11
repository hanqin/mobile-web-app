describe('main screen', function(){
  beforeEach(function() {
    browser.get("/index.html");
  });

  it("should display welcome text", function() {
    element(by.css(".jumbotron")).getText().then(function(text) {
      expect(text).toContain("'Allo, 'Allo!");
    });
  });
});
