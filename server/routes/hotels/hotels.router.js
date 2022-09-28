const express = require("express");
const {
  createNewHotel,
  updateHotel,
  deleteHotel,
  getAllHotels,
  getHotelById,
} = require("./hotel.controller");

const { verifyAdmin } = require("../../services/utils/verifyToken");

const router = express.Router();

router.post("/", verifyAdmin, createNewHotel);
router.get("/", getAllHotels);
router.get("/:id", getHotelById);
router.put("/:id", verifyAdmin, updateHotel);
router.delete("/:id", verifyAdmin, deleteHotel);

module.exports = router;
