var welcomeMessage = require('/src/static/scripts/init.js');

describe("vulcan init", function() {
  describe("welcomeMessage", function() {
    spyOn(welcomeMessage());
    it("Displays a message to the user", function() {
      expect(welcomeMessage()).toHaveBeenCalled();
    });
  });
});
