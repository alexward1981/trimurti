# Trimurti Build scripts

## What is a build script?
A Build script is a blueprint for the app. It is written in plain English and describes each step of the app's functionality. It is split into versions and can be considered to be the development acceptance criteria for the current version. Future versions can be considered as a detailed roadmap.

## v1.0.0 [T'Pau]

### Version Summary
*Note:* T'Pau is the first iteration of trimurti, this version can be considered an Alpha.

trimurti is a CMS for the data driven web, users will provide trimurti with an API and scheme and it will go through the API and set up an editor. This will allow non-coders the ability to edit a site's content without having to learn how to write in JSON.

This version will include the Editor environment and also hopes to include a javascript plugin which will allow authenticated users to live-edit pages on the site itself.

### Assumptions

The user already has node installed and has already installed trimurti as a global node package.

### Script for entry point 1 (No trimurtirc.js file)

Action: user types `trimurti`;
Expected outcome: A message is displayed saying `no trimurtirc.js file found, please run '$ trimurti init first'`;
Next: End;

Action: user types `trimurti init`;
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
Expected outcome: A file structure is generated in ./trimurti/ this will currently just be a file called trimurtirc.js
Next: End;

Action: User edits trimurtirc.js
Expected outcome: The user will be able to edit the schema of their API, adding GET and POST requests, providing friendly names and adding validation to their API schema.
Next: End;

### Script for entry point 2 (trimurtirc.js file exists and has a valid schema)

Action: User types `trimurti`:
Expected Outcome: Now a trimurtirc.js file exists the file will be parsed and a set of files will be generated under ./trimurti
Next: End.

Action: User visits '/trimurti' in their browser
Expected outcome: The user will be presented with the trimurti editor.
Next: End.
