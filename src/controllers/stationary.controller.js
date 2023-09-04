const { stationaryService } = require("../services");

/** create stationary */
const createStationary = async (req, res) => {
  try {
    const reqBody = req.body;
    const stationary = await stationaryService.createStationary(reqBody);
    if (!stationary) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Stationary create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get stationary list */
const getStationaryList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { stationary_name: { $regex: search, $options: "i" } },
        { stationary_item : { $regex: search, $options: "i" } },
      ];
    }
    const getList = await stationaryService.getStationaryList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get stationary list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete stationary */
const deleteStationary = async (req, res) => {
  try {
    const stationaryId = req.params.StationaryId;
    const stationaryExists = await stationaryService.getStationaryById(stationaryId);
    if (!stationaryExists) {
      throw new Error("Stationary not found!");
    }
    await stationaryService.deleteStationary(stationaryId);

    res.status(200).json({
      success: true,
      message: "Stationary delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update stationary */
const updateStationary = async (req, res) => {
  try {
    const reqBody = req.body;
    const stationaryId = req.params.stationaryId;
    const stationaryExists = await stationaryService.getStationaryById(stationaryId);
    if (!stationaryExists) {
      throw new Error("Stationary not found!");
    }
    await stationaryService.updateStationary(stationaryId,reqBody);

    res.status(200).json({
      success: true,
      message: "Stationary update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createStationary,
  getStationaryList,
  deleteStationary,
  updateStationary
};