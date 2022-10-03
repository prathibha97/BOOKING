const express = require("express");
const {
  createNewHotel,
  updateHotel,
  deleteHotel,
  getAllHotels,
  getHotelById,
  countByCity,
  countByType,
  getHotelRooms,
} = require("./hotel.controller");

const { verifyAdmin } = require("../../services/utils/verifyToken");

const router = express.Router();

router.post("/",  createNewHotel);
router.get("/", getAllHotels);
router.get("/find/:id", getHotelById);
router.put("/:id", verifyAdmin, updateHotel);
router.delete("/:id", deleteHotel);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);


module.exports = router;
