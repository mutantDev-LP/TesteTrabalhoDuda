const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  cep: {
    type: String,
    required: true,
  },
  endereco: {
    type: String,
    required: true,
  },
  cidade: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
