module.exports.validateRegisterInput =(
    username,
    email,
    firstname,
    lastname,
    password,
    confirmPassword
)=>{
    const errors = {};
    if (username.trim() ===''){
        errors.username = 'Username must not be empty';
    }
    if (firstname.trim() ===''){
        errors.firstname = 'Need first name to proceed.';
    }
    if (lastname.trim() ===''){
        errors.lastname = 'Need Last Name to proceed';
    }
    if (email.trim() ===''){
        errors.email = 'email must not be empty';
    }else{
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = 'Email must be a valid email address';
    }
    if (password === '') {
        errors.password = 'You Must have a password';
      } else if (password !== confirmPassword) {
        errors.confirmPassword = 'Passwords must match';
      }
    }
      return{
          errors,
          valid: Object.keys(errors).length < 1
      }
    
};

module.exports.validateLoginInput = (username, password) =>{
    const errors = {};
    if (username.trim() ===''){
        errors.username = 'Username must not be empty';
    }
    if (password === '') {
        errors.password = 'Password must not be empty';
      } 
      return{
        errors,
        valid: Object.keys(errors).length < 1
    }
}