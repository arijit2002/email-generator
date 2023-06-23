var validator = require("email-validator");
const code = require("./code.js");

module.exports.generateEmail = (limit) => {
    return code.genUCode(limit)+"@gmail.com";
}