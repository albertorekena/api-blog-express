const {selectById} = require("../models/posts.model");

const isIdFromPost = async (req, res, next) => {
	const id = req.params.id;

	try {
		const post = await selectById(id);

		if (post) {
			req.post = post;
		} else {
			return res.status(404).json({success:false, message:`Post with id=${id} not found.`});
		}
	} catch (error) {
		return res.status(500).json({success:false, message:error.message});
	}

	next();
};

module.exports = isIdFromPost;