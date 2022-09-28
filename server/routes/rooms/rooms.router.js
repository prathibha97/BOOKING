const express = require("express");

const {
  createRoom,
  getAllRooms,
  getRoomById,
  updateRoom,
  deleteRoom,
} = require("./rooms.controller");

const { verifyAdmin } = require("../../services/utils/verifyToken");

const router = express.Router();

router.post("/:hotelId", verifyAdmin, createRoom);
router.get("/", getAllRooms);
router.get("/:id", getRoomById);
router.put("/:id", verifyAdmin, updateRoom);
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);

module.exports = router;
