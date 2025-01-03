const BL = require("../models/BL"); // Import the BL model

// Create a new BL
exports.createBL = async (req, res) => {
  try {
    const newBL = new BL(req.body); // Create a new BL document with the provided body data
    await newBL.save();
    res.status(201).json({ message: "BL created successfully", data: newBL });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all BLs
exports.getAllBLs = async (req, res) => {
  try {
    const bls = await BL.find(); // Fetch all BL documents
    res.status(200).json(bls);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific BL by ID
exports.getBLById = async (req, res) => {
  try {
    const bl = await BL.findById(req.params.id); // Find a BL document by its ID
    if (!bl) {
      return res.status(404).json({ message: "BL not found" });
    }
    res.status(200).json(bl);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a BL by ID
exports.updateBL = async (req, res) => {
  try {
    const updatedBL = await BL.findOneAndUpdate(
      { ref: req.params.ref }, // Find by the 'ref' field
      req.body
    );

    if (!updatedBL) {
      return res.status(404).json({ message: "BL not found" });
    }

    res
      .status(200)
      .json({ message: "BL updated successfully", data: updatedBL });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a BL by ID
exports.deleteBL = async (req, res) => {
  try {
    const deletedBL = await BL.findByIdAndDelete(req.params.id); // Delete a BL by its ID
    if (!deletedBL) {
      return res.status(404).json({ message: "BL not found" });
    }
    res.status(200).json({ message: "BL deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBlByReference = async (req, res) => {
  const { ref } = req.params;

  try {
    const bl = await BL.findOne({ ref });

    if (!bl) {
      return res.status(404).json({ message: "Bon Livraison not found" });
    }

    res.status(200).json(bl);
  } catch (error) {
    console.error("Error fetching BL by reference: ", error);
    res.status(500).json({ message: "Server error" });
  }
};
