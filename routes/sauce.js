const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const sauceController = require("../controllers/sauce");

router.post("/", auth, multer, sauceController.createSauce);
router.get("/", auth, sauceController.getAllSauce);
router.get("/:id", auth, sauceController.getOneSauce);
router.put("/:id", auth, multer, sauceController.updateOneSauce);
router.delete("/:id", auth, sauceController.deleteOneSauce);

module.exports = router;
