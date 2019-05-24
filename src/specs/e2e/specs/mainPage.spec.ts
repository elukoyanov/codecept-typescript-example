// tslint:disable-next-line:no-reference
/// <reference path="../steps.d.ts" />

"use strict";

Feature("Main page functionality");

Scenario("should see header with links", (I) => {
  I.amOnPage("/");
  I.seeElement({ css: "header .HeaderMenu nav" });
  within("header .HeaderMenu nav > ul", () => {
    I.see("Why GitHub?");
    I.see("Enterprise");
    I.see("Explore");
    I.see("Marketplace");
    I.see("Pricing");
  });
});

Scenario("should see result of search", async (I) => {
  I.amOnPage("/");
  I.click("//input[@placeholder='Search GitHub']");
  I.fillField("//input[@placeholder='Search GitHub']", await I.generateRandomString(3));

  I.see("All GitHub");
});
