const userModel = require('../users');
const  bcrypt = require('bcrypt');
userRegisterController = async function (req, res) {
    const userData = new userModel({
      username: req.body.username,
      name: req.body.name,
      email: req.body.email,
      password : req.body.password,
    });
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

    userData.password = hashedPassword;

   const userCreated = await userModel.insertMany(userData);
   res.send({message: "user created", userCreated })
    
  };

  module.exports = { userRegisterController }