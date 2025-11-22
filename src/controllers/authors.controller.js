const {selectAll, selectById, insert} = require("../models/authors.model");
const fs = require("node:fs");

// @desc      Get all authors
// @route     GET /authors
const getAll = async (req, res) => {
	try {
		const authors = await selectAll();

		res.status(200).json({success:true, data:authors});
	} catch (error) {
		return res.status(500).json({success:false, message:error.message});
	}
};

// @desc      Get an author by its id
// @route     GET /authors/:id
const getById = async (req, res) => {
	try {
		const id = req.params.id

		const author = await selectById(id);

		res.status(200).json({success:true, data:author});
	} catch (error) {
		return res.status(500).json({success:false, message:error.message});
	}
};


// @desc      Create an author
// @route     POST /authors
const save = async (req, res) => {
	try {
		const newFileName = req.file.filename + `.${req.file.mimetype.split("/")[1]}`;
		fs.renameSync(req.file.path, `public/${newFileName}`);

		req.body.image = newFileName;

		const newAuthorId = await insert(req.body);

		res.status(200).json({success:true, data:{id:newAuthorId}});
	} catch (error) {
		return res.status(500).json({success:false, message:error.message});
	}
};

// @desc      Update an author by its id
// @route     PUT /authors/:id
const update = async (req, res) => {
	try {
		const id = req.params.id
		// const authors = await selectAll();

		res.status(200).json({success:true, data:author});
	} catch (error) {
		return res.status(500).json({success:false, message:error.message});
	}
};

// @desc      Delete an author by its id
// @route     DELETE /authors/:id
const remove = async (req, res) => {
	try {
		const id = req.params.id
		// const authors = await selectAll();

		res.status(200).json({success:true, data:author});
	} catch (error) {
		return res.status(500).json({success:false, message:error.message});
	}
};

module.exports = {getAll, getById, save, update, remove};