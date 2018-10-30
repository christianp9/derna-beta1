const Db = require('../config/mongoose')

const student_model = Db.Schema({
  name: {
    type: String
  },
  name_father: {
    type: String
  },
  name_mother: {
    type: String
  },
  guardia_name: {
    type: String
  },
  age:{
    type: Number
  }
})

module.exports = Db.model('model_student', student_model)