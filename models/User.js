const { model , Schema } = require('mongoose');

const UserSchema = new Schema({
    username: String,
    firstname: String,
    lastname: String,
    password: String,
    email: String,
    createdAt:String
});

module.exports = model('User', UserSchema)