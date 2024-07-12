import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
  profilePicture: {type: String, default: 'defaultAvatar.png'},

});

const User = mongoose.model('User', userSchema);

module.exports = User;
