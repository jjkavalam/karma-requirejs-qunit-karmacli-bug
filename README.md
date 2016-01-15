Introduction
============
The purpose of the repository is to reproduce a minor but potentially
frustrating problem that arise when using Karma test runner along with
QUnit and RequireJs frameworks. A potential fix is also discussed.

What is contained here ?
========================
The directory structure is:

    | src/
    | test/
    | karma.conf.js
    | test-main.js
    | index.html
    | package.json
    | README

* `src/` contains two requirejs modules: `calculator` and its dependency `trig`
* `test/` contains two tests for `calculator` written in `QUnit`
* `karma.conf.js` is a configuration file produced using `karma init` except for the FIXME comment
* `test-main.js`  is a file to bootstrap the tests when using the Karma runner.
* `index.html` simulates the bug that occurs when Karma tries to run the test.
* `package.json` is the npm package file

How to use this code ?
======================
* Inside the root folder run:
> `npm update`

* Now start Karma
> `node_modules/.bin/karma start`

* Now click on "Debug" button in the captured browser window to reproduce the error. See logs in the browser console.

* The situation is simulated in `index.html`. Directly open `index.html` in the browser and inspect the browser console.

* A diagnosis of the problem is described in the comments inside `index.html`. Swap the order of script tags to fix the error.

* Replicate this fix by changing the order of `frameworks` inside `karma.conf.js`. Restart Karma and ensure the problem has been fixed.

