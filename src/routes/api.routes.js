const express = require("express");
const router = express.Router();
const authsRoutes = require("./authors.routes");
const postsRoutes = require("./posts.routes");

router.use("/authors", authsRoutes);
router.use("/posts", postsRoutes);

module.exports = router;