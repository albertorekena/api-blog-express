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

const update = async (id, updatedAuthor) => {
	try {
		await db.query("UPDATE authors SET name=?, image=? WHERE id=?", [id, updatedAuthor.name, updatedAuthor.image]);

		return id;
	} catch (error) {
		console.log("Something went wrong with the database.");
	}
};

const remove = async id => {
	try {
		// const [authors] = await db.query("SELECT * FROM authors");

		return author;
	} catch (error) {
		console.log("Something went wrong with the database.");
	}
};

module.exports = {selectAll, selectById, insert, update, remove};