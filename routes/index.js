const router = require("express").Router();
const sequenceGenerator = require("./sequenceGenerator");

/* GET home page. */
router.get("/", (req, res) => {
  res.status(302);
  res.redirect("/cars");
});

router.use("/cars", require("./cars"));

// Return 404 for all other routes
router.use((req, res) => {
  res.status(404).send("Page not found");
});

module.exports = router;
