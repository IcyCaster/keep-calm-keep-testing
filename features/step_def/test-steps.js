// features/support/steps.js
import { Given, When, Then } from "cucumber";
import { expect } from "chai";

Given("a variable set to {int}", function(number) {
  this.setTo(number);
});

When("I increment the variable by {int}", function(number) {
  this.incrementBy(number);
});

Then("the variable should contain {int}", function(number) {
  expect(this.variable).to.eql(number);
});