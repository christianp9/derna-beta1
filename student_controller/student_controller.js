//ultima version de js
'use strict'


let arr = [];

const db_student = require('../model/model_student')


exports.render_student = (req, res) => {

  db_student.find({}, (err, data) => {
    console.log(data)
    res.render(
      'index.ejs',
      {
        arr: data
      }
    )
  })
}

exports.add_student = (req, res) => {

console.log(req.body)

  const mydata = {
    name: req.body.name,
    name_father: req.body.img,
    name_mother:req.body.img2,
    guardian_name: req.body.des,
    age:req.body.des
    
  }

  db_student.create(mydata, (err, data) => {
    console.warn(data)
    res.redirect('/')
  })

}

function get_Student(req, res) {
  res.status(200).send(arr)
}