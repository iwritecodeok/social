const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const { SECRET_KEY } = require('../../config');
const User = require('../../models/User');
const { UserInputError } = require('apollo-server');
module.exports = {
  Mutation:{
    async register(
      _,
      {
      registerInput : {username, email, password, confirmPassword, firstname, lastname}
    }, 
      context, info){
      //Todo validate user data
      // Todo Make sure User doesnt already exist
      const user = await User.findOne({ username});
      if(user){
        throw new UserInputError('Username already exists', {
          errors:{
            username: 'this username is taken'
          }
        })
      }
      // todo hash password and create token
      password = await bcrypt.hash(password, 13);

      const newUser = new User({
        email,
        username,
        password,
        firstname,
        lastname,
        createdAt: new Date().toISOString()
      });
      const res = await newUser.save();

      const token = jwt.sign({
        id: res.id,
        email: res.email,
        username: res.username
      }, SECRET_KEY,{expiresIn:'1h'} );

      return{
        ...res._doc,
        id: res._id,
        token
      }
    }
  }
}