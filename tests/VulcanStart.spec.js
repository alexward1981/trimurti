import VulcanStart from '../src/static/scripts/VulcanStart';
describe("Initialise Vulcan", () => {
  let message = null;
  let vs = new VulcanStart;

  beforeEach(() => {
    spyOn(vs, 'welcomeMessage').and.callThrough();
    message = vs.welcomeMessage();
  });

  it("Calls the 'welcomeMessage' method", () => {
    expect(vs.welcomeMessage).toHaveBeenCalled();
  });

  it("Displays a message string to the user", () => {
    expect(message).toEqual(jasmine.any(String))
  });

});
