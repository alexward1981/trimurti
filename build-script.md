# Vulcan Build scripts

## What is a build script?
A Build script is a blueprint for the app. It is written in plain English and describes each step of the app's functionality. It is split into versions and can be considered to be the development acceptance criteria for the current version. Future versions can be considered as a detailed roadmap.

## v1.0.0 [T'Pau]

### Version Summary
*Note:* T'Pau is the first iteration of Vulcan, this version can be considered an Alpha.

Vulcan is a CMS for the data driven web, users will provide Vulcan with an API and scheme and it will go through the API and set up an editor. This will allow non-coders the ability to edit a site's content without having to learn how to write in JSON.

This version will include the Editor environment and also hopes to include a javascript plugin which will allow authenticated users to live-edit pages on the site itself.

### Assumptions

The user already has node installed and has already installed vulcan as a global node package.

### Script for entry point 1 (No vulcanrc.js file)

Action: user types `vulcan`;
Expected outcome: A message is displayed saying `no vulcanrc.js file found, please run '$ vulcan init first'`;
Next: End;

Action: user types `vulcan init`;
Expected outcome: A decision tree starts;
Next: Decision tree step 1;

Action: Decision tree step 1;
Expected outcome: A message is displayed saying `Please provide a name for your app`. The user types a name and moves on to the next question.
Next: Decision tree step 2.

Action: Decision tree step 2;
Expected outcome: A message is displayed saying `Please provide a description for your app`. The user types a description and moves on to the next question.
Next: Decision tree step 3.

Action: Decision tree step 3;
Expected outcome: A message is displayed saying `Please provide the main entry point for your API (including any API keys that are required)`. The user types a url and moves on to the next question.
Next: Decision tree step 4.

Action Decision tree step 4;
Expected outcome: A file structure is generated in ./vulcan/ this will currently just be a file called vulcanrc.js
Next: End;

Action: User edits vulcanrc.js
Expected outcome: The user will be able to edit the schema of their API, adding GET and POST requests, providing friendly names and adding validation to their API schema.
Next: End;

### Script for entry point 2 (vulcanrc.js file exists and has a valid schema)

Action: User types `vulcan`:
Expected Outcome: Now a vulcanrc.js file exists the file will be parsed and a set of files will be generated under ./vulcan
Next: End.

Action: User visits '/vulcan' in their browser
Expected outcome: The user will be presented with the vulcan editor.
Next: End.
