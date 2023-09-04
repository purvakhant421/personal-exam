const { travelService } = require("../services");

/** create travel */
const createTravel = async (req, res) => {
  try {
    const reqBody = req.body;
    const travel = await travelService.createTravel(reqBody);
    if (!travel) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Travel create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get travel list */
const getTravelList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { travel_destination: { $regex: search, $options: "i" } },
        { travel_by : { $regex: search, $options: "i" } },
      ];
    }
    const getList = await travelService.getTravelList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get travel list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete travel */
const deleteTravel = async (req, res) => {
  try {
    const travelId = req.params.TravelId;
    const travelExists = await travelService.getTravelById(travelId);
    if (!travelExists) {
      throw new Error("travel not found!");
    }
    await travelService.deleteTravel(travelId);

    res.status(200).json({
      success: true,
      message: "travel delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update travel */
const updateTravel = async (req, res) => {
  try {
    const reqBody = req.body;
    const travelId = req.params.travelId;
    const travelExists = await travelService.getTravelById(travelId);
    if (!travelExists) {
      throw new Error("Travel not found!");
    }
    await travelService.updateTravel(travelId,reqBody);

    res.status(200).json({
      success: true,
      message: "Travel update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createTravel,
  getTravelList,
  deleteTravel,
  updateTravel
};