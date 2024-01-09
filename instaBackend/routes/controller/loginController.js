const bcrypt = require('bcrypt');
const userModel = require('../users');
const passport = require('passport');

const login_Controller = async (req, res) => {
  try {
    const userName = req.body.username;
    const inputPassword = req.body.password;
    const user = await userModel.findOne({
      username: userName
    });
    if (!user) {
      res.send(
        {error : "invalid username"}
       );
     }
      const passwordVerify = await bcrypt.compare(inputPassword, user.password);
      if (passwordVerify) {
        res.send({
          success: "login_success",
          user
        })
      } else {
        res.send({
          failed: "invalid_password"
        });
      }
    

  } catch {
    res.send(
     "Wrong Details "
    );
  }

};

module.exports = {
  login_Controller
};