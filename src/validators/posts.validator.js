const {body} = require("express-validator");

const insertPostsValidator = [
	body("title").notEmpty().withMessage("Title is required"),
	body("description").notEmpty().withMessage("Description is required"),
	body("category").notEmpty().withMessage("Category is required"),
	body("authors_id").notEmpty().withMessage("Author id is required")
];

const updatePostsValidator = [
	body().custom((_value, {req}) => {
		if (!req.body?.title && !req.body?.description && !req.body?.category && !req.body?.authors_id) {
			throw new Error("At least, one of the fields needs to be updated: 'title', 'description', 'category' or 'authors_id'");
		}

		return true;
	})
];

module.exports = {insertPostsValidator, updatePostsValidator};