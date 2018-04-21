const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/users"
router
  .route("/")
  .get(booksController.findAllUsers);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(booksController.findByIdUsers)
  .put(booksController.updateUsers)
  .delete(booksController.removeUsers);

module.exports = router;
