var express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
    res.render(
      'index',
      {
        RouteName: 'Index Route'
      }
    )
})

router.get('*', (req, res) => {
  res.send('404 not found')
})

module.exports = router;
