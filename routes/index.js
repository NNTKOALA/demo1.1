var express = require('express');
var router = express.Router();

//set trang chủ (homepage)
router.get('/', (req, res) => {
  //render ra trang index.hbs ở trong thư mục views
  res.render('index')
})

router.get('/linknaocungduoc', (req, res) => {
  res.render('tengicungduoc')
})

module.exports = router;
