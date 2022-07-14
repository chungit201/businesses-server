const httpStatus = require('http-status');
const { Industry } = require('../models');
const ApiError = require('../utils/ApiError');

const createIndustry = async (cityBody) =>{
  const createData = await Industry.create(cityBody);
  let industry = await Industry.findOne(createData)
  industry = {
    ...industry._doc,
    createdAt: new Date(industry.createdAt).getTime(),
  };
  return industry

}

const getIndustryId = async (SolrID) => {
  const industry = await Industry.findOne({ SolrID: SolrID });
  console.log(SolrID);
  if(!industry){
    throw new ApiError(httpStatus.NOT_FOUND,"industry not found")
  }
  return industry
}

const queryIndustry = async (filter, options) =>{
  const industry = await Industry.paginate(filter, options);
  return industry;
}


const getIndustryList = async (industries) =>{
  let listData = [];
  for (const item of industries) {
    if (item) {
      listData.push(await Industry.findOne({ID:item}));
    }
  }
  console.log(listData);
  return listData;
}

module.exports = {
  getIndustryId,
  createIndustry,
  queryIndustry,
  getIndustryList
}
