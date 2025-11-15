const db = require("../../config/db");

const selectAll = async () => {
	try {
		const [authors] = await db.query("SELECT * FROM authors");

		return authors;
	} catch (error) {
		console.log("Something went wrong with the database.");
	}
};

const selectById = async id => {
	try {
		const [author] = await db.query("SELECT * FROM authors WHERE id=?", [id]);

		return author;
	} catch (error) {
		console.log("Something went wrong with the database.");
	}
};

const insert = async newAuthor => {
	try {
		const newAuthorId = (await db.query("INSERT INTO authors (name, image) VALUES (?, ?)", [newAuthor.name, newAuthor.image]))[0].insertId;

		return newAuthorId;
	} catch (error) {
		console.log("Something went wrong with the database.");
	}
};

const updateById = async () => {
	try {
		// const [authors] = await db.query("SELECT * FROM authors");

		return author;
	} catch (error) {
		console.log("Something went wrong with the database.");
	}
};

const deleteById = async () => {
	try {
		// const [authors] = await db.query("SELECT * FROM authors");

		return author;
	} catch (error) {
		console.log("Something went wrong with the database.");
	}
};

module.exports = {selectAll, selectById, insert, updateById, deleteById};