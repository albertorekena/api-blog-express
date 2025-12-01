const express = require("express");
const {getAll, getById, save, updateById, deleteById} = require("../controllers/posts.controller");
const isIdNumber = require("../middlewares/isIdNumber.middleware");

const router = express.Router();

router
	.get("/", getAll)
	.post("/", save);

router
	.get("/:id", isIdNumber, getById)
	.put("/:id", isIdNumber, updateById)
	.delete("/:id", isIdNumber, deleteById);

module.exports = router;