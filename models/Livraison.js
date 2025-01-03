const mongoose = require("mongoose");

const livraisonSchema = new mongoose.Schema({
  dateLivraisonClient: Date,
  etatLivraison: String,
  confirmation: String,
});

module.exports = mongoose.model("Livraison", livraisonSchema);
