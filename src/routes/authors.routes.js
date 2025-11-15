const express = require("express");
const {getAll, save, getById, updateById, removeById} = require("../controllers/authors.controller");

const router = express.Router();

router
	.get("/", getAll)
	.post("/", save);

router
	.get("/:id", getById)
	.put("/:id", updateById)
	.delete("/:id", removeById)

module.exports = router;