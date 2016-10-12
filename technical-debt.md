# Technical Debt
[![Build Status](https://travis-ci.org/alexward1981/vulcan.svg?branch=master)](https://travis-ci.org/alexward1981/vulcan)
[![Dependency Status](https://gemnasium.com/alexward1981/vulcan.svg)](https://gemnasium.com/alexward1981/vulcan)
Any development tasks or optimisations which need to be made should be listed here.

**Note:** If there is a task/bug manager in place to cover this then this file will not be updated.

## Tasks:
1. Work out how the schema will be mapped out
2. Make vulcanStart look for a .vulcanrc file before it asks questions and use that file to do the rest

## Issues
1. There is a potential issue with path resolution. I need to make sure that the 'vulcan' folder is placed in the correct place for any project it's in. This will probably require config.
2. I've had to use 'let t = this' a few times where I've used promises. These need refactoring out.
