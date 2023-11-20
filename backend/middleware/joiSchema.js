const joi = require("joi");

exports.string = joi.string().allow("");
exports.stringRequire = joi.string().required();
exports.numberRequire = joi.number().required();
