const express = require("express");
const router = express.Router();
const blController = require("../controllers/blController"); // Import the BL controller

// Route to create a new BL
router.post("/", blController.createBL);

// Route to get all BLs
router.get("/", blController.getAllBLs);

// Route to get a specific BL by ID
router.get("/:id", blController.getBLById);

router.get("/ref/:ref", blController.getBlByReference);

// Route to update a BL by ID
router.put("/:ref", blController.updateBL);

// Route to delete a BL by ID
router.delete("/:id", blController.deleteBL);

module.exports = router;
