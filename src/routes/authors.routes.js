const express = require("express");
const multer = require("multer");
const {getAll, getById, save, updateById, deleteById} = require("../controllers/authors.controller");
const validateId = require("../middlewares/validateId.middleware");

const router = express.Router();
const upload = multer({dest:"./public"});

router
	.get("/", getAll)
	.post("/", upload.single("image"), save);

router
	.get("/:id", validateId, getById)
	.put("/:id", validateId, upload.single("image"), updateById)
	.delete("/:id", validateId, deleteById);

module.exports = router;