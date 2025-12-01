const {selectAll, insert, update, remove} = require("../models/posts.model");
const {validationResult} = require("express-validator");
const errorsArrayToString = require("../utils/errorsArrayToString.js");

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
const getById = (req, res) => {
	return res.status(200).json({success:true, data:req.post});
};

// @desc      Create an author
// @route     POST /posts
const save = async (req, res) => {
	try {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({success:false, errors:errorsArrayToString(errors.array())});
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
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({success:false, errors:errorsArrayToString(errors.array())});
		}

		const updatedPost = await update(req.params.id, {title:req.body.title || req.post.title, description:req.body.description || req.post.description, category:req.body.category || req.post.category, authors_id:req.body.authors_id || req.post.authors_id});

		return res.status(200).json({success:true, data:updatedPost});
	} catch (error) {
		return res.status(500).json({success:false, message:error.message});
	}
};

// @desc      Delete an author by its id
// @route     DELETE /authors/:id
const deleteById = async (req, res) => {
	try {
		const oldPost = req.post;

		await remove(req.params.id);

		return res.status(200).json({success:true, data:oldPost});
	} catch (error) {
		return res.status(500).json({success:false, message:error.message});
	}
};

module.exports = {getAll, getById, save, updateById, deleteById};