const express = require("express");
const {getAll, getById, save, updateById, deleteById} = require("../controllers/posts.controller");
const isIdNumber = require("../middlewares/isIdNumber.middleware");
const isIdFromPost = require("../middlewares/isIdFromPost.middleware");
const {insertPostsValidator, updatePostsValidator} = require("../validators/posts.validator"); 

const router = express.Router();

router
	.get("/", getAll)
	.post("/", insertPostsValidator, save);

router
	.get("/:id", isIdNumber, isIdFromPost, getById)
	.put("/:id", isIdNumber, isIdFromPost, updatePostsValidator, updateById)
	.delete("/:id", isIdNumber, isIdFromPost, deleteById);

module.exports = router;