const {selectAll, selectById, insert, update, remove} = require("../models/authors.model");
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
const getById = async (req, res) => {
	try {
		const id = req.params.id;

		const author = await selectById(id);

		if (author) {
			return res.status(200).json({success:true, data:author});
		} else {
			return res.status(404).json({success:false, message:`Author with id=${id} not found.`});
		}
	} catch (error) {
		return res.status(500).json({success:false, message:error.message});
	}
};

// @desc      Create an author
// @route     POST /authors
const save = async (req, res) => {
	try {
		if (!req.body.name || !req.file) {
			return res.status(400).json({success:false, message:"The fields 'name' and 'image' are required."});
		}

		const newFileName = req.file.filename + `.${req.file.mimetype.split("/")[1]}`;
		fs.renameSync(req.file.path, `public/${newFileName}`);

		req.body.image = newFileName;

		const newAuthor = await insert(req.body);

		res.status(200).json({success:true, data:newAuthor});
	} catch (error) {
		return res.status(500).json({success:false, message:error.message});
	}
};

// @desc      Update an author by its id
// @route     PUT /authors/:id
const updateById = async (req, res) => {
	try {
		const id = req.params.id;

		if (!req.body.name || !req.file) {
			return res.status(400).json({success:false, message:"The fields 'name' and 'image' are required."});
		}

		const oldImageName = (await selectById(id)).image;

		const newFileName = req.file.filename + `.${req.file.mimetype.split("/")[1]}`;
		fs.renameSync(req.file.path, `public/${newFileName}`);

		const updatedAuthor = await update(id, {name:req.body.name, image:newFileName});

		fs.unlinkSync(`public/${oldImageName}`);

		res.status(200).json({success:true, data:updatedAuthor});
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

		await remove(id);

		fs.unlinkSync(`public/${oldAuthor.image}`);

		res.status(200).json({success:true, data:oldAuthor});
	} catch (error) {
		return res.status(500).json({success:false, message:error.message});
	}
};

module.exports = {getAll, getById, save, updateById, deleteById};