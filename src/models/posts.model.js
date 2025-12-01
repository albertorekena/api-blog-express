const db = require("../../config/db");

const selectAll = async () => {
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
		`);

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

const selectById = async id => {
	try {
		const [[post]] = await db.query(`
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
			WHERE posts.id = ?
		`, [id]);

		if (!post) return null;

		return {
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
		};
	} catch (error) {
		throw error;
	}
};

const insert = async ({title, description, category, authors_id}) => {
	try {
		const newPostId = (await db.query("INSERT INTO posts (title, description, category, authors_id) VALUES (?, ?, ?, ?)", [title, description, category, authors_id]))[0].insertId;

		const newPost = await selectById(newPostId);

		return newPost;
	} catch (error) {
		throw error;
	}
};

const update = async (id, {title, description, category, authors_id}) => {
	try {
		await db.query("UPDATE posts SET title=?, description=?, category=?, authors_id=? WHERE id=?", [title, description, category, authors_id, id]);

		const updatedPost = await selectById(id);

		return updatedPost;
	} catch (error) {
		throw error;
	}
};

const remove = async id => {
	try {
		await db.query("DELETE FROM posts WHERE id=?", [id]);
	} catch (error) {
		throw error;
	}
};

module.exports = {selectAll, selectById, insert, update, remove};