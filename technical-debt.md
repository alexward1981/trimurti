# Technical Debt
[![Build Status](https://travis-ci.org/alexward1981/trimurti.svg?branch=master)](https://travis-ci.org/alexward1981/trimurti)
[![Dependency Status](https://gemnasium.com/alexward1981/trimurti.svg)](https://gemnasium.com/alexward1981/trimurti)
Any development tasks or optimisations which need to be made should be listed here.

**Note:** If there is a task/bug manager in place to cover this then this file will not be updated.

## Tasks:
1. When development reaches the right stage, move the compilation logic to install.js instead of the gulpfile and if possible remove the gulp dependency.
2. Make TrimurtiStart look for a trimurti.json file before it asks questions and use that file to do the rest
3. Add the ability to edit the output of the CMS. So you can go through the schema and set certain items to 'editible', 'hidden' or 'visible but not editable' etc... and also to override the detected input types (useful for making textareas etc...)
4. I'm replacing jasmine with 'ava' for unit tests, these tests still need to be written.
5. It would be good to have a 'switch' that will let users choose between editing an API and some local json files.

## Issues
2. I've had to use 'let t = this' a few times where I've used promises. These need refactoring out.
