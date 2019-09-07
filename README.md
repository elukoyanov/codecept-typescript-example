# codecept-typescript-example

Example of using codecept.js with typescript.

It was created to be example for users, who has problems with codecept + TS settings.

Used packages:

- codeceptjs ^2.3.0
- typescript ^3.4.5
- ts-lint ^5.16.0
- ts-node ^8.1.0

Project runs with `yarn` - it resolves pathes to packages.
<br/>If you use `npm`, then scripts in `package.json` should be edited, to include path to codeceptjs - `./node_modules/.bin/codeceptjs` instead of `codeceptjs`. Or use `npx`.

## Restrictions

Project was tested on MacOS only. Some problems with paths may occur when run on Windows.

For correct `ts-node` run environment variable `TS_NODE_PROJECT` is used.
It could be set in CI, or with `.env` package, for example.

In this repository this evironment variable is created in package.json's scripts section (`test:e2e` and similar) by linux-shell-command-style definition:

```
TS_NODE_PROJECT='./src/specs/e2e/tsconfig.json' <some command>
```

### Run on Windows OS

Windows system does not support this style, it uses next command for environment variable setting:

```
set TS_NODE_PROJECT='./src/specs/e2e/tsconfig.json' codeceptjs run
```

So, the full script to run in Windows terminal is:

```
(set TS_NODE_PROJECT=./src/specs/e2e/tsconfig.json) && codeceptjs run
```

Such script is described in `package.json` as `test:e2e:windows`. The same for definitions generation - `test:e2e:def:windows` .

## Links

More information about e2e testing framework on
[Codecept JS site](https://codecept.io).
<br>
More information about Typescript, it's configuration and examples on [Typescript site](https://www.typescriptlang.org/)
