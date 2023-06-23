var validator = require("email-validator");
const code = require("./code.js");

module.exports.generateEmail = (limit,domain) => {
    return code.genUCode(limit,domain);
}