const express = require("express");
const router = express.Router();

/**
 * GET HOME PAGE.
 *
 * @return home page
 */
router.get("/", async (req, res) => {
  try {
    res.json({
      status: 200,
      message: "HOME",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
