const Hotel = require("../../models/Hotel");

// create a new hotel
async function createNewHotel(req, res, next) {
  const hotel = new Hotel(req.body);
  try {
    await hotel.save();
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
}
// update a hotel
async function updateHotel(req, res, next) {
  try {
    const hotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
}

// delete a hotel
async function deleteHotel(req, res, next) {
  try {
    await Hotel.findByIdAndDelete(req.params.id);

    res.status(200).json({ msg: "Hotel deleted successfully" });
  } catch (err) {
    next(err);
  }
}

// get one hotel
async function getHotelById(req, res, next) {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
}

// get all hotels
async function getAllHotels(req, res, next) {
  try {
    const hotels = await Hotel.find({});
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createNewHotel,
  updateHotel,
  deleteHotel,
  getHotelById,
  getAllHotels,
};
