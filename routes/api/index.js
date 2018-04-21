const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./users");
const compsRoutes = require("./comps");

// Book routes
router.use("/books", bookRoutes);
router.use("/users", userRoutes);
router.use("/comps", compsRoutes);

module.exports = router;
