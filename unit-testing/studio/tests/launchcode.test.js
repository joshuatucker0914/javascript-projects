// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
 
  it("should have the property 'organization' with value 'nonprofit'", () =>{
    expect(launchcode.organization).toBe("nonprofit");
  });

  it('should have the executiveDirector property with value "Jeff"', () => {
    expect(launchcode.executiveDirector).toBe('Jeff');
  });

  it('should have the percentageCoolEmployees property with value 100', () => {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  it('should have the programsOffered property', () => {
    expect(Array.isArray(launchcode.programsOffered)).toBe(true);
    expect(launchcode.programsOffered).toContain('Web Development');
    expect(launchcode.programsOffered).toContain('Data Analysis');
    expect(launchcode.programsOffered).toContain('Liftoff');
    expect(launchcode.programsOffered).toHaveLength(3);
  });

  it('should return "LaunchCode Rocks! (CRASH!!!!)" when passed a number that is divisible by 2, 3, and 5', () => {
    expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks! (CRASH!!!!)');
  });

  it('should return "LaunchCode!" when passed a number that is divisible by 2 and 3', () => {
    expect(launchcode.launchOutput(6)).toBe('LaunchCode!');
  });

  it('should return "Launch Rocks!" when passed a number that is divisible by 2 and 5', () => {
    expect(launchcode.launchOutput(10)).toBe('Launch Rocks!');
  });

  it('should return "Code Rocks!" when passed a number that is divisible by 3 and 5', () => {
    expect(launchcode.launchOutput(15)).toBe('Code Rocks!');
  });

  it('should return "Launch!" when passed a number that is divisible by 2', () => {
    expect(launchcode.launchOutput(2)).toBe('Launch!');
  });

  it('should return "Code!" when passed a number that is divisible by 3', () => {
    expect(launchcode.launchOutput(3)).toBe('Code!');
  });

  it('should return "Rocks!" when passed a number that is divisible by 5', () => {
    expect(launchcode.launchOutput(5)).toBe('Rocks!');
  });

  it('should return "Rutabagas! That doesn\'t work." when passed a number that is NOT divisible by 2, 3, or 5', () => {
    expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.");
  });
 
});
