const pick = require("../utils/pick");
const catchAsync = require("../utils/catchAsync");
const { districtService } = require("../services");


const createDistrict = catchAsync(async (req, res) => {
  const district = await districtService.createDistrict(req.body);
  res.json({
    message: "create district success fully",
    district
  });
});

const queryDistrict = catchAsync(async (req, res) => {
  const filter = pick(req.query, ["Title", "TinhThanhID"]);
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const result = await districtService.queryDistrict(filter, options);
  res.json(result);
});

module.exports = {
  createDistrict,
  queryDistrict
}
