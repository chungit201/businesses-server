const pick = require("../utils/pick");
const catchAsync = require("../utils/catchAsync");
const { industryService } = require("../services");
const { getIndustryList } = require("../services/industry.service");


const createIndustry = catchAsync(async (req, res) => {
  const industry = await industryService.createIndustry(req.body);
  res.json({
    message: "create industry success fully",
    industry
  });
});

const getIndustryID = catchAsync(async (req,res)=>{
  const industry = await industryService.getIndustryId(req.query.SolrID)
  res.json(industry)
})

const queryIndustry  = catchAsync(async (req, res) => {
  const filter = pick(req.query, ["Title", "ID"]);
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const result = await industryService.queryIndustry(filter, options);
  res.json(result);
});

const listDataIndustry = catchAsync(async (req,res)=>{
  const industry = await industryService.getIndustryList(req.body.industries);
  console.log(req.body.industries);
  res.json({
    results:industry
  })
})

module.exports = {
  getIndustryID,
  createIndustry,
  queryIndustry,
  listDataIndustry
}
