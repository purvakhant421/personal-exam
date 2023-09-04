const { mobileService } = require("../services");

/** create mobile */
const createMobile = async (req, res) => {
  try {
    const reqBody = req.body;
    const mobile = await mobileService.createMobile(reqBody);
    if (!mobile) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Mobile create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get mobile list */
const getMobileList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};
    if (search) {
      filter.$or = [
        { mobile_shop_name: { $regex: search, $options: "i" } },
        { mobile_model_name : { $regex: search, $options: "i" } },
      ];
    }
    const getList = await mobileService.getMobileList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get Mobile list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete mobile */
const deleteMobile = async (req, res) => {
  try {
    const mobileId = req.params.mobileId;
    const mobileExists = await mobileService.getMobileById(mobileId);
    if (!mobileExists) {
      throw new Error("Mobile not found!");
    }
    await mobileService.deleteMobile(mobileId);

    res.status(200).json({
      success: true,
      message: "Mobile delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update mobile */
const updateMobile = async (req, res) => {
  try {
    const reqBody = req.body;
    const mobileId = req.params.mobileId;
    const mobileExists = await mobileService.getMobileById(mobileId);
    if (!mobileExists) {
      throw new Error("Mobile not found!");
    }
    await mobileService.updateMobile(mobileId,reqBody);

    res.status(200).json({
      success: true,
      message: "Mobile update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update mobile status*/
const updateMobileStatus = async (req, res) => {
    try {
      const mobileId = req.params.mobileId;
      const mobileExists = await mobileService.getMobileById(mobileId);
      if (!mobileExists) {
        throw new Error("Mobile not found!");
      }
      const mobileDetails = await mobileService.getMobileById(mobileId);
      const statusOfMobile = mobileDetails.is_active;
      await mobileService.updateMobileStatus(mobileId,statusOfMobile);

      res.status(200).json({
        success: true,
        message: "Mobile update successfully!",
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
  createMobile,
  getMobileList,
  deleteMobile,
  updateMobile,
  updateMobileStatus
};