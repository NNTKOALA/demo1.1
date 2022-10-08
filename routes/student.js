var express = require('express');
var router = express.Router();

//URL: localhost:3000/student
router.get('/', (req, res) => {
    res.send("this is student page");
})

//URL: localhost:3000/student/student
router.get('/student', (req, res)=>{
    var text = "<h1 style='color: red'>Student of Greenwich University</h1>"
    res.send(text)
})

module.exports = router;
