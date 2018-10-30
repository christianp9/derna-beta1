const mongoose = require('mongoose');

mongoose
  .connect('mongodb://christianp99:cri123456789@ds121163.mlab.com:21163/student', { useNewUrlParser: true })
  .then(() => {
    console.log('Conectado')
  })
  .catch(() => {
    console.log('Error al Conectar')
  })

module.exports = mongoose;