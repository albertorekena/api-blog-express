const {body} = require("express-validator");

const insertAuthorsValidator = [
	body("name").notEmpty().withMessage("Name is required"),
	body("email").isEmail().withMessage("Must be a valid email address"),
	body("email").normalizeEmail()
];

const updateAuthorsValidator = [
	body().custom((_value, {req}) => {
		if (!req.body.name && !req.body.email && !req.file) {
			throw new Error("At least, one of the fields needs to be updated: 'name', 'email' or 'image'");
		}

		return true;
	}),
	body("email").optional().isEmail().withMessage("Must be a valid email address").normalizeEmail()
];

module.exports = {insertAuthorsValidator, updateAuthorsValidator};