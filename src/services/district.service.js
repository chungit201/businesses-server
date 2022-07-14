const httpStatus = require("http-status");
const { District, City } = require("../models");
const ApiError = require("../utils/ApiError");

const createDistrict = async (cityBody) => {
  const createData = await District.create(cityBody);
  let district = await District.findOne(createData)
  district = {
    ...district._doc,
    createdAt: new Date(district.createdAt).getTime(),
  };
  return district
};


const getDistrict = async (cityId) => {
  const district = District.findOne({ ID: cityId });
  if (!district) {
    throw new ApiError(httpStatus.NOT_FOUND, "district not found");
  }
  return district;
};


const queryDistrict = async (filter, options) => {
  const district = await District.paginate(filter, options);
  return district;
};

module.exports = {
  createDistrict,
  queryDistrict,
  getDistrict
};
