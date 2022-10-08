const express = require('express')
const StudentModel = require('../models/StudentModel')
const router = express.Router()

//URL: localhost:3000/student
router.get('/', (req, res) => {
  StudentModel.find((err, data) => {
    if (!err) {
      res.send(data)
    }
  })
})

module.exports = router
