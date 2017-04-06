This is a test project to demo unit tests and mutation testing in an angular
`1.6` project using Karma as a test runner and Jasmine as a testing framework.
[Stryker](https://github.com/stryker-mutator/stryker) is used for mutation testing.

To simply run the unit tests execute `npm test`.

To run the tests with mutation execute
```
node_modules/.bin/stryker run
```

or for debugging purposes
```
node_modules/.bin/stryker run --logLevel debug stryker.conf.js
```

or even more verbose
```
node_modules/.bin/stryker run --logLevel trace stryker.conf.js
```
