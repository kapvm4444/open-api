const express = require("express");

const worldWiseController = require("./../controllers/worldWiseController");

const router = express.Router();

router.get("/", worldWiseController.getCities);

module.exports = router;
