const { hotelService } = require("../services");

/** create hotel */
const createHotel = async (req, res) => {
  try {
    const reqBody = req.body;
    const hotel = await hotelService.createHotel(reqBody);
    if (!hotel) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Hotel create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get hotel list */
const getHotelList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { hotel_name: { $regex: search, $options: "i" } },
        { hotel_address : { $regex: search, $options: "i" } },
      ];
    }
    const getList = await hotelService.getHotelList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get hotel list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete hotel */
const deleteHotel = async (req, res) => {
  try {
    const hotelId = req.params.HotelId;
    const hotelExists = await hotelService.getHotelById(hotelId);
    if (!hotelExists) {
      throw new Error("Hotel not found!");
    }
    await hotelService.deleteHotel(hotelId);

    res.status(200).json({
      success: true,
      message: "Hotel delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update hotel */
const updateHotel = async (req, res) => {
  try {
    const reqBody = req.body;
    const hotelId = req.params.hotelId;
    const hotelExists = await hotelService.getHotelById(hotelId);
    if (!hotelExists) {
      throw new Error("hotel not found!");
    }
    await hotelService.updateHotel(hotelId,reqBody);

    res.status(200).json({
      success: true,
      message: "hotel update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createHotel,
  getHotelList,
  deleteHotel,
  updateHotel
};