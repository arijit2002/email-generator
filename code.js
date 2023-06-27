var validator = require('validator');

module.exports.genUCode = (limit,domain) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._-';
    const charactersLength = characters.length;
    while (true) {
    let counter = 0;
    while (counter < limit) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    var email = result+"@"+domain+".com";
    if(validator.isEmail(email)) break;
  }
  return email;
};