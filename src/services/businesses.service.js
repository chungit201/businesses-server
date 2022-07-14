const httpStatus = require("http-status");
const { Businesses } = require("../models");
const ApiError = require("../utils/ApiError");

const createBusinesses = async (businessesBody) => {

  const createData = await Businesses.create(businessesBody);
  let city = await Businesses.findOne(createData);
  city = {
    ...city._doc,
    createdAt: new Date(city.createdAt).getTime()
  };
  return city;

  // const data =
  //   [
  //   ];
  //
  // data.map(async (item) => {
  //   return await Businesses.create(item);
  // });
};

const getBusinessesId = async (id) => {
  const businesses = await Businesses.findOne({ MaSoThue: id });
  if (!businesses) {
    throw new ApiError(httpStatus.NOT_FOUND, "Businesses not found");
  }
  return businesses;
};


const queryBusinesses = async (filter, options) => {
  const city = await Businesses.paginate(filter, options);
  return city;
};

module.exports = {
  createBusinesses,
  queryBusinesses,
  getBusinessesId
};
