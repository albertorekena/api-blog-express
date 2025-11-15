const {selectAll} = require("../models/posts.model");

// @desc      Get all posts
// @route     GET /posts
// @access    Public
const getAll = async (req, res) => {
	try {
		const posts = await selectAll();

		res.status(200).json({success:true, data:posts});
	} catch (error) {
		return res.status(500).json({success:false, message:error.message});
	}
};

module.exports = {getAll};