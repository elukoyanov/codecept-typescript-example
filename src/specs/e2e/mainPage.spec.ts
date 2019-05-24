// tslint:disable-next-line:no-reference
/// <reference path="./steps.d.ts" />

"use strict";

Feature("Main page functionality");

Scenario("See header with links", (I) => {
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
