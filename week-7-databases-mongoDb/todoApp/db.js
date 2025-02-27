const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
});
const Todo = new Schema({
  userId: { type: ObjectId },
  title: { type: String },
  done: { type: Boolean },
});

const UserModel = mongoose.model("users", User);
const TodoModel = mongoose.model("todos", Todo);

module.exports = {
  UserModel,
  TodoModel,
};
