const express = require('express')
const StudentModel = require('../models/StudentModel')
const router = express.Router()

//URL: localhost:3000/student
router.get('/', (req, res) => {
  StudentModel.find((err, data) => {
    if (!err) {
      //res.send(data)
      //render ra trang index ở thư mục views/student
      res.render('student/index', { sinhvien: data })
    }
  })
})

router.get('/detail/:id', (req, res) => {
  StudentModel.findById(req.params.id, (error, student) => {
    if (!error) {
      res.render('student/info', { student: student })
    }
  })
})

router.get('/api', (req, res) => {
  StudentModel.find((err, data) => {
    if (!err) {
      //res.send(data)
      //render ra trang index ở thư mục views/student
      res.json(data)
    }
  })
})

router.get('/delete/:id', (req, res) => {
  StudentModel.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      console.log("Delete success!");
      //var message = "Delete student success!";
      //redirect về trang /student (URL ko phải view)
      res.redirect("/student");
    }
  });
})

router.get('/add', (req, res) => {
  res.render("student/new");
})

router.post('/add', (req, res) => {
  var student = new StudentModel(req.body)
  student.save(err => {
    if (!err) {
      console.log("Add student success!")
      res.redirect("/student")
    }
  })
})

router.get('/edit/:id', (req, res) => {
  StudentModel.findById(req.params.id, (err, data) => {
    if (!err) {
      //render ra file: update hbs (trong thư mục views/student)
      //gửi kèm dữ liệu của object student để load vào form edit
      //student (tên), data (dữ liệu)
      res.render("student/update", { student: data })
    }
  })
})

router.post('/edit/:id', (req, res) => {
  var id = req.params.id;
  var student = req.body;
  StudentModel.findByIdAndUpdate(id, student, (err) => {
    if (!err) {
      console.log("Update student success!")
      res.render('/student')
    }
  })
})

router.post('/search', (req, res) => {
  StudentModel.find({ name: new RegExp(req.body.name, "i") }, (err, data) => {
    if (!err) {
      res.render('student/index', { student: data })
    }
  })
})

//sort function
router.get('/sort/asc', (req, res) => {
  StudentModel.find()
    .sort({ name: 1 })
    .exec((err, data) => {
      if (!err) {
        res.render('student/index', { student: data })
      }
    })
})

router.get('/sort/desc', (req, res) => {
  StudentModel.find()
    .sort({ name: -1 })
    .exec((err, data) => {
      if (!err) {
        res.render('student/index', { student: data })
      }
    })
})

module.exports = router
