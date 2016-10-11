import VulcanStart from '../src/static/scripts/VulcanStart';
describe("Initialise Vulcan", () => {
  let message = null;
  let vs = new VulcanStart;

  beforeEach(() => {
    spyOn(vs, 'welcomeMessage').and.callThrough();
    spyOn(vs, 'displayIntro').and.callThrough();
    spyOn(vs, 'askQuestions').and.callThrough();
    message = vs.welcomeMessage();
  });

  it("Calls the 'welcomeMessage' method", () => {
    expect(vs.welcomeMessage).toHaveBeenCalled();
  });

  it("Displays a message string to the user", () => {
    expect(message).toEqual(jasmine.any(String))
  });

  // it("Displays an introduction to the user", () => {
  //   expect(vs.displayIntro).toHaveBeenCalled();
  // });
  //
  // it("Asks a series of questions to the user", () => {
  //   expect(vs.askQuestions).toHaveBeenCalled();
  // });

});
