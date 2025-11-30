const db = require("../../config/db");

const selectAll = async (req, res) => {
	try {
		const [posts] = await db.query("SELECT * FROM posts");

		return posts;
	} catch (error) {
		console.log("Something went wrong with the database.");
	}
};

const selectById = async id => {
	try {
		const [[post]] = await db.query("SELECT * FROM posts WHERE id=?", [id]);

		return post;
	} catch (error) {
		console.log("Something went wrong with the database.");
	}
};

const insert = async ({title, description, category, authors_id}) => {
	try {
		const newPostId = (await db.query("INSERT INTO posts (title, description, category, authors_id) VALUES (?, ?, ?, ?)", [title, description, category, authors_id]))[0].insertId;

		const newPost = await selectById(newPostId);

		return newPost;
	} catch (error) {
		console.log("Something went wrong with the database.");
	}
};

const update = async (id, {title, description, category, authors_id}) => {
	try {
		await db.query("UPDATE posts SET title=?, description=?, category=?, authors_id=? WHERE id=?", [title, description, category, authors_id, id]);

		const updatedPost = await selectById(id);

		return updatedPost;
	} catch (error) {
		console.log("Something went wrong with the database.");
	}
};

const remove = async id => {
	try {
		await db.query("DELETE FROM posts WHERE id=?", [id]);
	} catch (error) {
		console.log("Something went wrong with the database.");
	}
};

module.exports = {selectAll, selectById, insert, update, remove};