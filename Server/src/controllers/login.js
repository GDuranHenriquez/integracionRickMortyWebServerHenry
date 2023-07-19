const user = require('../utils/users');

function loginUser(req, res){
  /* const email = req.query.email;
  const password  = req.query.password; */
  const { email, password } = req.query;
  user.forEach(use => {
    if(use.email === email && use.password === password){
      return res.status(200).json({access: true});
    }else{
      return res.status(200).json({access: false});
    }
  })  

}

module.exports = {loginUser};

