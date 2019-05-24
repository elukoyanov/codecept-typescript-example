"use strict";

class RandomGeneratorHelper extends Helper {
  public async generateRandomString(len, charSet) {
    charSet = charSet || "0123456789";
    let randomString = "";
    for (let i = 0; i < len; i++) {
      const randomPoz = Math.floor(Math.random() * charSet.length);
      randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
  }
}

module.exports = RandomGeneratorHelper;
