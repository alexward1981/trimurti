var TrimurtiStart = require('../src/core/scripts/TrimurtiStart');
describe('Initialise Trimurti', function() {
  var message = null;

  beforeEach(() => {
    spyOn(TrimurtiStart, 'welcomeMessage').and.callThrough();
    spyOn(TrimurtiStart, 'displayIntro').and.callThrough();
    spyOn(TrimurtiStart, 'askQuestions').and.callThrough();
    message = TrimurtiStart.welcomeMessage();
  });

  it('Calls the "welcomeMessage" method', () => {
    expect(TrimurtiStart.welcomeMessage).toHaveBeenCalled();
  });

  it('Displays a message string to the user', () => {
    expect(message).toEqual(jasmine.any(String))
  });

  // it("Displays an introduction to the user", () => {
  //   expect(TrimurtiStart.displayIntro).toHaveBeenCalled();
  // });
  //
  // it("Asks a series of questions to the user", () => {
  //   expect(TrimurtiStart.askQuestions).toHaveBeenCalled();
  // });

});
