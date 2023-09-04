const { Mobile } = require("../models");

//Create Mobile
const createMobile = async (reqBody) => {
  return Mobile.create(reqBody);
};

// Get Mobile list
const getMobileList = async (filter, options) => {
//   const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
  return Mobile.find();
};

// Get Mobile details by id
const getMobileById = async (mobileId) => {
  return Mobile.findById(mobileId);
};

//  Delete Mobile
const deleteMobile = async (mobileId) => {
  return Mobile.findByIdAndDelete(mobileId);
};

// Update Mobile
const updateMobile = async (mobileId,reqBody) => {
  return Mobile.findByIdAndUpdate(mobileId,{$set:reqBody});
};

// Update Mobile status
const updateMobileStatus = async(mobileId,mobileStatus) =>{
    if (mobileStatus){
        return Mobile.findByIdAndUpdate(mobileId,{$set:{is_active:false}});
    }
    return Mobile.findByIdAndUpdate(mobileId,{$set:{is_active:true}});
}

module.exports = {
    createMobile,
    getMobileList,
    getMobileById,
    deleteMobile,
    updateMobile,
    updateMobileStatus
};