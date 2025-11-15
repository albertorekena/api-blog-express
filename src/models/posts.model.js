const db = require("../../config/db");

const selectAll = async (req, res) => {
	try {
		const [posts] = await db.query("SELECT * FROM posts");

		return posts;
	} catch (error) {
		console.log("Something went wrong with the database.");
	}
};

module.exports = {selectAll};