var validator = require("email-validator");
const code = require("./code.js");

const email = code.genUCode(10)+"@gmail.com";
console.log(email,validator.validate(email));
