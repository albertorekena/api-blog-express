const {selectAll, selectById, insert, update, remove, selectPosts} = require("../models/authors.model");
const {validationResult} = require("express-validator");
const fs = require("node:fs");

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

			return res.status(400).json({success:false, errors:errors.array()});
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
		const id = req.params.id;

		// if (!req.body.name || !req.body.email || !req.file) {
		// 	if (req.file) {
		// 		fs.unlinkSync(req.file.path);
		// 	}

		// 	return res.status(400).json({success:false, message:"The fields 'name', 'email' and 'image' are required."});
		// }

		let oldImageName;
		let newFileName;

		if (req.file) {
			oldImageName = req.author.image;

			newFileName = req.file.filename + `.${req.file.mimetype.split("/")[1]}`;
			fs.renameSync(req.file.path, `public/${newFileName}`);
		}

		const updatedAuthor = await update(id, {name:req.body.name, email:req.body.email, image:newFileName});

		if (req.file) {
			fs.unlinkSync(`public/${oldImageName}`);
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
		const id = req.params.id

		const oldAuthor = await selectById(id);

		if (!oldAuthor) {
			return res.status(404).json({success:false, message:`Author with id=${id} not found.`});
		}

		await remove(id);

		fs.unlinkSync(`public/${oldAuthor.image}`);

		return res.status(200).json({success:true, data:oldAuthor});
	} catch (error) {
		return res.status(500).json({success:false, message:error.message});
	}
};

// @desc      Get all author's posts
// @route     GET /authors/:id/posts
const posts = async (req, res) => {
	try {
		const id = req.params.id;

		const posts = await selectPosts(id);

		return res.status(200).json({success:true, data:posts});
	} catch (error) {
		return res.status(500).json({success:false, message:error.message});
	}
};

module.exports = {getAll, getById, save, updateById, deleteById, posts};