exports.config = {
  tests: './src/specs/e2e/*.spec.ts',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://github.com',
      browser: 'chrome'
    }
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'codecept-typescript-example'
}