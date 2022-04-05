# FizzBuzz

This is a demo repo for the class FizzBuzz problem.
The intent is to provide an example of using TDD with Jest and JavaScript.

This will be a primitive experience.

## FizzBuzz Problem Statement

Write a program that prints the numbers from 1 to 100 
and for multiples of '3' print "Fizz" instead of the number 
and for the multiples of '5' print "Buzz"
and for the multiples of both '3' and '5' print "FizzBuzz".

## What Tooling?

Using;

* WebStorm 2022.3.3
* npm 6.14.11
* jest 27.5.1

## Steps for starting from scratch

1) Install tooling if you must/need to
   1) [WebStorm](https://www.jetbrains.com/help/webstorm/installation-guide.html)
   2) [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
   3) [Jest](https://jestjs.io/)
2) Initialize NPM
   1) Set the settings for NPM
      1) `npm set init.author.name "<Your Name>"`
      2) `npm set init.author.email "you@example.com"`
      3) `npm set init.author.url "example.com"`
      4) `npm set init.license "MIT"`
   2) Initialize NPM for this package
      1) `npm init -y`
         1) `-y` means accept defaults
         2) After this you should have a `packages.json`
```json
{
  "name": "FizzBuzz-jest",
  "version": "1.0.0",
  "description": "This is a demo repo for the class FizzBuzz problem. The intent is to provide an example of using TDD with Jest and JavaScript.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Rich Dammkoehler (https://noradltd.com)",
  "license": "MIT"
}
```   
   3) Review Configuration
      1) `npm config list`
         1) This command will show you your current configuration
```shell
; cli configs
metrics-registry = "https://registry.npmjs.org/"
scope = ""
user-agent = "npm/6.14.11 node/v14.15.5 darwin x64"

; userconfig /Users/rpd/.npmrc
init.author.emal = "rpd@noradltd.com"
init.author.name = "Rich Dammkoehler"
init.author.url = "https://noradltd.com"
init.license = "MIT"

; node bin location = /Users/rpd/.nvm/versions/node/v14.15.5/bin/node
; cwd = /Users/rpd/projects/ConstructConnect/FizzBuzz-jest
; HOME = /Users/rpd
; "npm config ls -l" to show all defaults.
```
4) Create a directory for source code
   1) `mkdir src`
   2) `touch src/index.js`
5) Validate setup
   1) Edit the `src/index.js` file, add the following code
      1) `console.log('Hello Moto');`
   2) Run the code
      1) `node src/index.js`
```shell
aeon  - node src/index.js
Hello Moto
```
6) Update `package.json` to have "run target"
   1) Edit `package.json`
      1) Modify the `scripts` element, adding the "start" target
```json
"scripts": {
    "start": "node src/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```
   2) Test the "start" target on the command line
      1) `npm start`
```shell
aeon  - npm start

> FizzBuzz-jest@1.0.0 start /Users/rpd/projects/ConstructConnect/FizzBuzz-jest
> node src/index.js

Hello Moto
```
7) Add the Jest Framework for testing
   1) Add Jest
      1) `npm install --save-dev jest`
```shell
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN FizzBuzz-jest@1.0.0 No repository field.

+ jest@27.5.1
added 332 packages from 272 contributors and audited 332 packages in 23.395s

28 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```
8) Create a Canary Test to validate Jest configuration. A Canary Test just makes sure we have the plumbing configured, it doesn't validate anything. We just want to make sure we don't have a configuration issue before we get started on our real work. We will delete the Canary Test after we get started with something real. 
   1) Create a directory for test code
      1) `mkdir test`
   2) Create a test file in `test` named `canary.test.js`
      1) `touch test/canary.test.js`
   3) Add test code into the test file
```javascript
test('canary says', () => {
    expect(1).toBe(1);
});
```
   4) Modify the `package.json` file by adding a script for testing
      1) We are replacing the current entry in this case
         1) `"echo \"Error: no test specified\" && exit 1"` => `jest`
```json
"scripts": {
    "start": "node src/index.js",
    "test": "jest"
  }
```
   5) Run the test target
      1) `npm test`
```shell
aeon  - npm test

> FizzBuzz-jest@1.0.0 test /Users/rpd/projects/ConstructConnect/FizzBuzz-jest
> jest

 PASS  test/canary.test.js
  ✓ canary says (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.21 s, estimated 1 s
Ran all test suites.
```   
9) Initialize your `git` repo
   1) `git init .`
```shell
aeon  - git init .
Initialized empty Git repository in /Users/rpd/projects/ConstructConnect/FizzBuzz-jest/.git/
```
   2) `touch .gitignore`
   3) `echo ".idea" >> .gitignore`
   4) `echo "node_modules/" >> .gitignore`
   5) `git add .gitignore README.md package.json package-lock.json src test`
   6) `git commit -m 'initialize repo withs some basics'`
```shell
aeon {main} - git commit -m 'initialize repo withs some basics'
[main (root-commit) 74ee65a] initialize repo withs some basics
 6 files changed, 3255 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 README.md
 create mode 100644 package-lock.json
 create mode 100644 package.json
 create mode 100644 src/index.js
 create mode 100644 test/canary.test.js
```
10) Our First Real Test
    1) TDD - If you are not familiar with TDD, here is a quick explaination
       1) The TDD Microcycle has three stages.
          1) Red - The tests don't pass. This might be because the code won't compile, or because the test's assertion fails. In any case, remember 'Don't Refactor on Red'. At this point you should be looking to do whatever is needed to make your code compile, run, and pass the test.
          2) Green - The tests pass. Once your tests are running green you can make design adjustments, clean things up, refactor as much as you like. The tests you have will ensure you don't break anything. A piece of advice, only make small changes, one at a time, and run the test between changes. If you make a mistake it's a short trip back to green, just undo the last thing you did.
          3) Refactor - Clean up the code. Refactoring is the process of improving the design of the code to ensure that it is clean and understandable. It might be simply making variable and method names more accurate, or it might be removing duplication. In any case, refactoring steps should be as small as possible and you should run the tests after each step to ensure you haven't broken a test.
    2) Looking at our problem statement, the first test might be, given an input of '1' expect to receive back '1'
         1) add a file in the `test` folder named `fizzbuzz.test.js`
         2) Create a test for given 1, return '1'
```javascript
test('given 1, return \'1\'', () => {
    expect(fizzbuzz(1)).toBe('1');
});
```
         3) Run the test, the result should be 'red'
```shell
aeon {main} - npm test

> FizzBuzz-jest@1.0.0 test /Users/rpd/projects/ConstructConnect/FizzBuzz-jest
> jest

 FAIL  test/fizzbuzz.test.js
  ● given 1, return '1'

    ReferenceError: fizzbuzz is not defined

      1 | test('given 1, return \'1\'', () => {
    > 2 |     expect(fizzbuzz(1)).toBe('1');
        |     ^
      3 | });
      4 |

      at Object.<anonymous> (test/fizzbuzz.test.js:2:5)

 PASS  test/canary.test.js
```

> Note that compiler/interpreter failures count as red.
 
         4) Add just enough code to `index.js` and `fizzbuzz.test.js` to run the tests
**index.js**
```javascript
console.log('Hello Moto');

function fizzbuzz(given) {
    return '1';
}

module.exports = fizzbuzz;
```
**fizzbuzz.test.js**
```javascript
const fizzbuzz = require('../src/index')  // this is the important new line

test('given 1, return \'1\'', () => {
    expect(fizzbuzz(1)).toBe('1');
});
```
         5) Run the test, the result should be 'green'
```shell
aeon {main} - npm test                                                                                          
                                                                                                                
> FizzBuzz-jest@1.0.0 test /Users/rpd/projects/ConstructConnect/FizzBuzz-jest
> jest                                                                                                  [10/165]

 PASS  test/fizzbuzz.test.js
  ● Console

    console.log
      Hello Moto

      at Object.<anonymous> (src/index.js:1:1)                                                           [2/165]

 PASS  test/canary.test.js

Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.415 s, estimated 1 s
Ran all test suites.
```    
         6) Now it's time to refactor. In our case, because this is our first test, there isn't anything to do really. But, we created a canary test before, so lets remove that and the `conole.log` statement as well.
            1) remove the file `test/canary.test.js`
            2) remove the first line of `index.js` that says `console.log('Hello Moto');`

> Remember to run the tests between each step

         7) Now that the code is cleaned up and our tests are passing, commit the code to source control
            1) `git add test/fizzbuzz.test.js src/index.js`
            2) `git commit -m 'added first basic fizzbuzz test'` 
