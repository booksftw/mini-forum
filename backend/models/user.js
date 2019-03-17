const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  // unique there for optimization not validation
  // mongoose plugin enables unique validation
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
})

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
