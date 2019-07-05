"use strict";

import * as assert from "assert";

Feature("Main page functionality");

Scenario("should see header with links", (I) => {
  I.amOnPage("/");
  I.seeElement({ css: "header.header nav" });
  within("header.header nav > ul", () => {
    I.see("Main page");
    I.see("About");
  });
});

xScenario("should see result of search", async (I) => {
  I.amOnPage("/");
  I.click("//input[@placeholder='Search GitHub']");

  const query = await I.generateRandomString(3);
  I.fillField("//input[@placeholder='Search GitHub']", query);
  I.pressKey("Enter");

  const url = await I.grabCurrentUrl();
  assert(url.includes(`https://github.com/search?`));
  assert(url.includes(`q=${query}`));
});
