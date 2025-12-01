const db = require("../../config/db");

const selectAll = async () => {
	try {
		const [authors] = await db.query("SELECT * FROM authors");

		return authors;
	} catch (error) {
		throw error;
	}
};

const selectById = async id => {
	try {
		const [[author]] = await db.query("SELECT * FROM authors WHERE id=?", [id]);

		return author;
	} catch (error) {
		throw error;
	}
};

const insert = async ({name, email, image}) => {
	try {
		const newAuthorId = (await db.query("INSERT INTO authors (name, email, image) VALUES (?, ?, ?)", [name, email, image]))[0].insertId;

		const newAuthor = await selectById(newAuthorId);

		return newAuthor;
	} catch (error) {
		throw error;
	}
};

const update = async (id, {name, email, image}) => {
	try {
		await db.query("UPDATE authors SET name=?, email=?, image=? WHERE id=?", [name, email, image, id]);

		const updatedAuthor = await selectById(id);

		return updatedAuthor;
	} catch (error) {
		throw error;
	}
};

const remove = async id => {
	try {
		await db.query("DELETE FROM authors WHERE id=?", [id]);
	} catch (error) {
		throw error;
	}
};

const selectPosts = async id => {
	try {
		const [posts] = await db.query(`
			SELECT
				posts.id,
				posts.title,
				posts.description,
				posts.category,
				posts.authors_id,
				authors.id as author_id,
				authors.name as author_name,
				authors.image as author_image
			FROM posts
				LEFT JOIN authors ON posts.authors_id=authors.id 
				WHERE authors_id=?`, [id]);

		return posts.map(post => ({
			id:post.id,
			title:post.title,
			description:post.description,
			category:post.category,
			authors_id:post.authors_id,
			author:{
				id:post.author_id,
				name:post.author_name,
				image:post.author_image
			}
		}));
	} catch (error) {
		throw error;
	}
};

module.exports = {selectAll, selectById, insert, update, remove, selectPosts};