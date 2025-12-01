const {selectAll, selectById, insert, update, remove} = require("../models/posts.model");

// @desc      Get all posts
// @route     GET /posts
const getAll = async (req, res) => {
	try {
		const posts = await selectAll();

		res.status(200).json({success:true, data:posts});
	} catch (error) {
		return res.status(500).json({success:false, message:error.message});
	}
};

// @desc      Get an author by its id
// @route     GET /posts/:id
const getById = async (req, res) => {
	try {
		const id = req.params.id;

		const post = await selectById(id);

		if (post) {
			return res.status(200).json({success:true, data:post});
		} else {
			return res.status(404).json({success:false, message:`Post with id=${id} not found.`});
		}
	} catch (error) {
		return res.status(500).json({success:false, message:error.message});
	}
};

// @desc      Create an author
// @route     POST /posts
const save = async (req, res) => {
	try {
		if (!req.body.title || !req.body.description || !req.body.category || !req.body.authors_id) {
			return res.status(400).json({success:false, message:"The fields 'title', 'description', 'category' and 'authors_id' are required."});
		}

		const newPost = await insert(req.body);

		return res.status(200).json({success:true, data:newPost});
	} catch (error) {
		return res.status(500).json({success:false, message:error.message});
	}
};

// @desc      Update an post by its id
// @route     PUT /posts/:id
const updateById = async (req, res) => {
	try {
		const id = req.params.id;

		if (!req.body.title || !req.body.description || !req.body.category || !req.body.authors_id) {
			return res.status(400).json({success:false, message:"The fields 'title', 'description', 'category' and 'authors_id' are required."});
		}

		const updatedPost = await update(id, {title:req.body.title, description:req.body.description, category:req.body.category, authors_id:req.body.authors_id});

		return res.status(200).json({success:true, data:updatedPost});
	} catch (error) {
		return res.status(500).json({success:false, message:error.message});
	}
};

// @desc      Delete an author by its id
// @route     DELETE /authors/:id
const deleteById = async (req, res) => {
	try {
		const id = req.params.id

		const oldPost = await selectById(id);

		if (!oldPost) {
			return res.status(404).json({success:false, message:`Post with id=${id} not found.`});
		}

		await remove(id);

		return res.status(200).json({success:true, data:oldPost});
	} catch (error) {
		return res.status(500).json({success:false, message:error.message});
	}
};

module.exports = {getAll, getById, save, updateById, deleteById};