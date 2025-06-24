const express = require("express");

const worldWiseController = require("./../controllers/worldWiseController");

const router = express.Router();

router.get("/", worldWiseController.getCities);
router.get("/:id", worldWiseController.getCity);

module.exports = router;
