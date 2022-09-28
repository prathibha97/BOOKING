const Room = require("../../models/Room");
const Hotel = require("../../models/Hotel");

// create room
async function createRoom(req, res, next) {
  const hotelId = req.params.hotelId;
  const room = new Room(req.body);

  try {
    await room.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: room.id } });
    } catch (err) {
      next(err);
    }
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
}

// update a room
async function updateRoom(req, res, next) {
  try {
    const room = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
}

// delete a room
async function deleteRoom (req, res, next){
  const hotelId = req.params.hotelId;
  try {
    await Room.findByIdAndDelete(req.params.id);
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Room has been deleted.");
  } catch (err) {
    next(err);
  }
};

// get one room
async function getRoomById(req, res, next) {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
}

// get all rooms
async function getAllRooms(req, res, next) {
  try {
    const rooms = await Room.find({});
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoomById,
  getAllRooms,
};
