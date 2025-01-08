const mongoose = require("mongoose");

const reclamationSchema = new mongoose.Schema({
  type: { type: String, enum: ["Etat", "Quantite"] },
  refArticle: String,
  poid: String,
  nombre: String,
  justification: String,
  etat: String,
  depottraite: { depottraite: String, enum: ["Oui", "Non"] },
  usinetraite: { usinetraite: String, enum: ["Oui", "Non"] },
  blId: { type: mongoose.Schema.Types.ObjectId, ref: "BL" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Reclamation", reclamationSchema);
