const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/b"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);
  // .delete(booksController.remove);

// Matches with "/api/books/saved"
// router
//   .route("/saved")
//   .get(booksController.findAll)
// //   .put(booksController.update)
//   .delete(booksController.remove);

router.route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
