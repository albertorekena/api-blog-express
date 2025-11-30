const express = require("express");
const {getAll, getById, save, updateById, deleteById} = require("../controllers/posts.controller");
const validateId = require("../middlewares/validateId.middleware");

const router = express.Router();

router
	.get("/", getAll)
	.post("/", save);

router
	.get("/:id", validateId, getById)
	.put("/:id", validateId, updateById)
	.delete("/:id", validateId, deleteById);

module.exports = router;