const {selectById} = require("../models/authors.model");

const IsIdFromAuthor = async (req, res, next) => {
	const id = req.params.id;

	try {
		const author = await selectById(id);

		if (author) {
			req.author = author;
		} else {
			return res.status(404).json({success:false, message:`Author with id=${id} not found.`});
		}
	} catch (error) {
		return res.status(500).json({success:false, message:error.message});
	}

	next();
};

module.exports = IsIdFromAuthor;