const {selectAll, insert, update, remove, selectPosts} = require("../models/authors.model");
const {validationResult} = require("express-validator");
const fs = require("node:fs");
const errorsArrayToString = require("../utils/errorsArrayToString.js");

// @desc      Get all authors
// @route     GET /authors
const getAll = async (req, res) => {
	try {
		const authors = await selectAll();

		return res.status(200).json({success:true, data:authors});
	} catch (error) {
		return res.status(500).json({success:false, message:error.message});
	}
};

// @desc      Get an author by its id
// @route     GET /authors/:id
const getById = (req, res) => {
	return res.status(200).json({success:true, data:req.author});
};

// @desc      Create an author
// @route     POST /authors
const save = async (req, res) => {
	try {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			if (req.file) {
				fs.unlinkSync(req.file.path);
			}

			return res.status(400).json({success:false, errors:errorsArrayToString(errors.array())});
		}

		if (req.file) {
			const newFileName = req.file.filename + `.${req.file.mimetype.split("/")[1]}`;
			fs.renameSync(req.file.path, `public/${newFileName}`);

			req.body.image = newFileName;
		}

		const newAuthor = await insert(req.body);

		return res.status(200).json({success:true, data:newAuthor});
	} catch (error) {
		return res.status(500).json({success:false, message:error.message});
	}
};

// @desc      Update an author by its id
// @route     PUT /authors/:id
const updateById = async (req, res) => {
	try {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({success:false, errors:errorsArrayToString(errors.array())});
		}

		let oldImageName;
		let newFileName;

		if (req.file) {
			oldImageName = req.author.image;
			newFileName = req.file.filename + `.${req.file.mimetype.split("/")[1]}`;
		}

		const updatedAuthor = await update(req.params.id, {name:req.body.name || req.author.name, email:req.body.email || req.author.email, image:newFileName || req.author.image});

		if (req.file) {
			fs.renameSync(req.file.path, `public/${newFileName}`);

			if (oldImageName && !/^https?:\/\//.test(oldImageName)) {
				fs.unlinkSync(`public/${oldImageName}`);
			}
		}

		return res.status(200).json({success:true, data:updatedAuthor});
	} catch (error) {
		return res.status(500).json({success:false, message:error.message});
	}
};

// @desc      Delete an author by its id
// @route     DELETE /authors/:id
const deleteById = async (req, res) => {
	try {
		const oldAuthor = req.author;
		const posts = await selectPosts(req.params.id);
		oldAuthor.posts = posts;

		await remove(req.params.id);

		if (oldAuthor.image && !/^https?:\/\//.test(oldAuthor.image)) {
			fs.unlinkSync(`public/${oldAuthor.image}`);
		}

		return res.status(200).json({success:true, data:oldAuthor});
	} catch (error) {
		return res.status(500).json({success:false, message:error.message});
	}
};

// @desc      Get all author's posts
// @route     GET /authors/:id/posts
const posts = async (req, res) => {
	try {
		const posts = await selectPosts(req.params.id);

		return res.status(200).json({success:true, data:posts});
	} catch (error) {
		return res.status(500).json({success:false, message:error.message});
	}
};

module.exports = {getAll, getById, save, updateById, deleteById, posts};