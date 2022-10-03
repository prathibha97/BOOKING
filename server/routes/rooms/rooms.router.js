const express = require("express");

const {
  createRoom,
  getAllRooms,
  getRoomById,
  updateRoom,
  deleteRoom,
  updateRoomAvailability,
} = require("./rooms.controller");

const { verifyAdmin } = require("../../services/utils/verifyToken");

const router = express.Router();

router.post("/:hotelId", createRoom);
router.get("/", getAllRooms);
router.get("/:id", getRoomById);
router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);

module.exports = router;
