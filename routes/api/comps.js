const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/comps"
router
  .route("/")
  .get(booksController.findComponents);

router
  .route("/nodes")
  .get(booksController.findAllNodes);

  router
  .route("/links")
  .get(booksController.findAllLinks);

module.exports = router;
