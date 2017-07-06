/* jshint esversion: 6 */
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

describe("Person Class", function() {
  var Francis;

  it('should be a function', function() {
    expect(Person).to.be.a('function');
  });

  it('should have a name', function() {
    expect(person.name).to.equal('Francis');
  });

  it("person should have an age", function() {
    expect(person.age).to.equal(21);
  });

  it('should have a mehtod to say hello', function() {
    expect(person.sayHello()).to.equal('Hello!');
  });

  it('it should have a method to say its name', function() {
    expect(person.sayName()).to.equal("My name is " + person.name);
  });

  it('should have a method to say its age', function() {
    expect(person.sayAge()).to.equal("I am " + person.age + " years old");
  });
});