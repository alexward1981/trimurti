var test = require('ava');
var fs = require('fs');

// Test installer

test('The installer has created the "trimurti.js" file', function(t) {
  fs.existsSync('./trimurti.js') || t.fail();
  t.pass();
});

test('The installer has created the "trimurti" folder', function(t) {
  fs.existsSync('./trimurti') || t.fail();
  t.pass();
});
test('The installer has created the "core" folder in the "trimurti" folder', function(t) {
  fs.existsSync('./trimurti/core') || t.fail();
  t.pass();
});
test('The installer has created the "scripts" folder in the "trimurti/core" folder', function(t) {
  fs.existsSync('./trimurti/core/scripts') || t.fail();
  t.pass();
});
test('The installer has created the "routes" folder in the "trimurti/core" folder', function(t) {
  fs.existsSync('./trimurti/core/routes') || t.fail();
  t.pass();
});
test('The installer has created the "themes" folder in the "trimurti" folder', function(t) {
  fs.existsSync('./trimurti/themes') || t.fail();
  t.pass();
});
test('The installer has created the "default" folder in the "trimurti/themes" folder', function(t) {
  fs.existsSync('./trimurti/themes/default') || t.fail();
  t.pass();
});
test('The installer has created the "styles" folder in the "trimurti/themes/default" folder', function(t) {
  fs.existsSync('./trimurti/themes/default/styles') || t.fail();
  t.pass();
});
test('The installer has created the "images" folder in the "trimurti/themes/default" folder', function(t) {
  fs.existsSync('./trimurti/themes/default/images') || t.fail();
  t.pass();
});
test('The installer has created the "scripts" folder in the "trimurti/themes/default" folder', function(t) {
  fs.existsSync('./trimurti/themes/default/scripts') || t.fail();
  t.pass();
});
test('The installer has created the "views" folder in the "trimurti/themes/default" folder', function(t) {
  fs.existsSync('./trimurti/themes/default/views') || t.fail();
  t.pass();
});
