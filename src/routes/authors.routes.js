const express = require("express");
const multer = require("multer");
const {getAll, getById, save, updateById, deleteById, posts} = require("../controllers/authors.controller");
const isIdNumber = require("../middlewares/isIdNumber.middleware");
const isIdFromAuthor = require("../middlewares/isIdFromAuthor.middleware");
const {validateAuthor} = require("../validators/author"); 

const router = express.Router();
const upload = multer({dest:"./public"});

router
	.get("/", getAll)
	.post("/", upload.single("image"), validateAuthor, save);

router
	.get("/:id", isIdNumber, isIdFromAuthor, getById)
	.put("/:id", isIdNumber, isIdFromAuthor, upload.single("image"), updateById)
	.delete("/:id", isIdNumber, isIdFromAuthor, deleteById);

router
	.get("/:id/posts", isIdNumber, posts)

module.exports = router;