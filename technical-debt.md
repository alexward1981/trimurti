# Technical Debt
[![Build Status](https://travis-ci.org/alexward1981/trimurti.svg?branch=master)](https://travis-ci.org/alexward1981/trimurti)
[![Dependency Status](https://gemnasium.com/alexward1981/trimurti.svg)](https://gemnasium.com/alexward1981/trimurti)
Any development tasks or optimisations which need to be made should be listed here.

**Note:** If there is a task/bug manager in place to cover this then this file will not be updated.

## Tasks:
1. Work out how the schema will be mapped out
2. Make TrimurtiStart look for a trimurti.json file before it asks questions and use that file to do the rest
3. Add the ability to edit the output of the CMS. So you can go through the schema and set certain items to 'editible', 'hidden' or 'visible but not editable' etc... and also to override the detected input types (useful for making textareas etc...)
4. It would be good if some global variables were available to the entire app so I don't have to make users specify their theme name more that once.

## Issues
1. There is a potential issue with path resolution. I need to make sure that the 'trimurti' folder is placed in the correct place for any project it's in. This will probably require config.
2. I've had to use 'let t = this' a few times where I've used promises. These need refactoring out.
