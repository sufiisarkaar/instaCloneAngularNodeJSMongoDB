const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect("mongodb://localhost:27017/instaClone");

const userSchema = mongoose.Schema({
  username : String,
  name : String,
  email : String,
  password : String,
  profileImage : String,
  bio : String,
  posts : [{
    type : mongoose.Schema.Types.ObjectId, ref : "post"
  }],
  
  following : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'user'
  }],

  followers : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'user'
  }]

});

userSchema.pre('save', async function (next) {
  const user = this;

  if (user.isModified('password') || user.isNew) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
  }

  next();
});


userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema);