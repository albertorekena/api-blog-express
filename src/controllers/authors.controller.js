const {selectAll} = require("../models/authors.model");

// @desc      Get all authors
// @route     GET /authors
// @access    Public
const getAll = async (req, res) => {
	try {
		const authors = await selectAll();

		res.status(200).json({success:true, data:authors});
	} catch (error) {
		return res.status(500).json({success:false, message:error.message});
	}
};

module.exports = {getAll};