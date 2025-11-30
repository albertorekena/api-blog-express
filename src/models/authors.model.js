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
		const [[author]] = await db.query("SELECT * FROM authors WHERE id=?", [id]);

		return author;
	} catch (error) {
		console.log("Something went wrong with the database.");
	}
};

const insert = async ({name, image}) => {
	try {
		const newAuthorId = (await db.query("INSERT INTO authors (name, image) VALUES (?, ?)", [name, image]))[0].insertId;

		const newAuthor = await selectById(newAuthorId);

		return newAuthor;
	} catch (error) {
		console.log("Something went wrong with the database.");
	}
};

const update = async (id, {name, image}) => {
	try {
		await db.query("UPDATE authors SET name=?, image=? WHERE id=?", [name, image, id]);

		const updatedAuthor = await selectById(id);

		return updatedAuthor;
	} catch (error) {
		console.log("Something went wrong with the database.");
	}
};

const remove = async id => {
	try {
		await db.query("DELETE FROM authors WHERE id=?", [id]);
	} catch (error) {
		console.log("Something went wrong with the database.");
	}
};

module.exports = {selectAll, selectById, insert, update, remove};