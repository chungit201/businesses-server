const httpStatus = require('http-status');
const { City } = require('../models');
const ApiError = require('../utils/ApiError');

const createCity = async (cityBody) =>{
  const createData = await City.create(cityBody);
  let city = await City.findOne(createData)
  city = {
    ...city._doc,
    createdAt: new Date(city.createdAt).getTime(),
  };
  return city

}

const queryCity = async (filter, options) =>{
  const city = await City.paginate(filter, options);
  return city;
}

module.exports = {
  createCity,
  queryCity
}
