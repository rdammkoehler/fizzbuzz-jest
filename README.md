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
