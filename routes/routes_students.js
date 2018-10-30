

module.exports = (app) => {
    const student_controller = require('../student_controller/student_controller')
  
    const sutudent_celebrate=require('../middleware/sutudent_celebrate')
  
   
    app.get('/', student_controller.render_student);
  
    
    app.post('/registro', sutudent_celebrate, student_controller.add_student);
  
    app.get('/init',(req,res)=>{
      res.render('init.ejs')
    })
  
    app.get('*', (req, res) => {
      res.status(500).send({ err: 'servido no encontrado' });
    })
  
  };
  