const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  picture :String,
  user : {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'user'
  },
 
  date: {
      type : Date,
      default : Date.now
  },
  likes : [
      {
          type : mongoose.Schema.Types.ObjectId,
          ref : 'user'
      }
  ],
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
      comment: String,
      userProfile : String,
      postUser : String
    }
  ],
  caption : String

});


module.exports = mongoose.model("post", postSchema);