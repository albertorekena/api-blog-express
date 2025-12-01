const {body} = require("express-validator");

const validateAuthor = [
	body("name").notEmpty().withMessage("Name is required"),
	body("email").isEmail().withMessage("Must be a valid email address"),
	body("email").normalizeEmail()
];

module.exports = {validateAuthor};