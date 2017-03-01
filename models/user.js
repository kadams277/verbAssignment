var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  region: {
  	type: String
  },
  group: {
  	type: String
  }
});

module.exports = mongoose.model("User", UserSchema);
