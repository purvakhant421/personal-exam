const { School } = require("../models");

// Create School
const createSchool = async (reqBody) => {
  return School.create(reqBody);
};

// Get School list
const getSchoolList = async (filter, options) => {
//   const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
  return School.find();
  // return School.find({$or:[{standard : 3}]});
};

// Get School details by id
const getSchoolById = async (SchoolId) => {
  return School.findById(SchoolId);
};

// Delete School
const deleteSchool = async (SchoolId) => {
  return School.findByIdAndDelete(SchoolId);
};

// Update School
const updateSchool = async (SchoolId,reqBody) => {
  return School.findByIdAndUpdate(SchoolId,{$set:reqBody});
};
module.exports = {
    createSchool,
    getSchoolList,
    getSchoolById,
    deleteSchool,
    updateSchool
};