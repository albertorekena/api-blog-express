const express = require("express");
const multer = require("multer");
const {getAll, getById, save, updateById, deleteById, posts} = require("../controllers/authors.controller");
const isIdNumber = require("../middlewares/isIdNumber.middleware");
const isIdFromAuthor = require("../middlewares/isIdFromAuthor.middleware");
const {insertAuthorsValidator, updateAuthorsValidator} = require("../validators/authors.validator"); 

const router = express.Router();
const upload = multer({dest:"./public"});

router
	.get("/", getAll)
	.post("/", upload.single("image"), insertAuthorsValidator, save);

router
	.get("/:id", isIdNumber, isIdFromAuthor, getById)
	.put("/:id", isIdNumber, isIdFromAuthor, upload.single("image"), updateAuthorsValidator, updateById)
	.delete("/:id", isIdNumber, isIdFromAuthor, deleteById);

router
	.get("/:id/posts", isIdNumber, isIdFromAuthor, posts)

module.exports = router;