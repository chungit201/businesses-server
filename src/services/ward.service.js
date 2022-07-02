const httpStatus = require('http-status');
const { Ward } = require('../models');
const ApiError = require('../utils/ApiError');

const createWard = async (cityBody) =>{
  const createData = await Ward.create(cityBody);
  let ward = await Ward.findOne(createData)
  ward = {
    ...ward._doc,
    createdAt: new Date(ward.createdAt).getTime(),
  };
  return ward
}

const queryWard = async (filter, options) =>{
  const ward = await Ward.paginate(filter, options);
  return ward;
}

module.exports = {
  createWard,
  queryWard
}
