const db = require("../../config/db");

const selectAll = async (req, res) => {
	try {
		const [authors] = await db.query("SELECT * FROM authors");

		return authors;
	} catch (error) {
		console.log("Something went wrong with the database.");
	}
};

module.exports = {selectAll};