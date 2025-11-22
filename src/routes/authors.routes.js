const express = require("express");
const multer = require("multer");
const {getAll, getById, save} = require("../controllers/authors.controller");

const router = express.Router();
const upload = multer({dest:"./public"});

router
	.get("/", getAll)
	.post("/", upload.single("image"), save);

router
	.get("/:id", getById)

module.exports = router;