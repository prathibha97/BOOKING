const Hotel = require("../../models/Hotel");
const Room = require("../../models/Room");

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
  const { min, max, ...others } = req.query;
  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
}

async function countByCity(req, res, next) {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
}

async function countByType(req, res, next) {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "hotels", count: hotelCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
}

async function getHotelRooms(req, res, next) {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list);
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
  countByCity,
  countByType,
  getHotelRooms
};
