var express = require('express');
var router = express.Router();
var path = require('path');
var config = require(path.resolve('./trimurti.json'));

router.get('/', (req, res) => {
    res.render(
      'index',
      {
        config: config
      }
    )
})

router.get('*', (req, res) => {
  res.send('404 not found')
})

module.exports = router;
