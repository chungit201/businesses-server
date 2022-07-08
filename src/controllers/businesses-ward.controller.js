const pick = require("../utils/pick");
const catchAsync = require("../utils/catchAsync");
const {businessWardService } = require("../services");

const createBusinesses= catchAsync(async (req, res) => {
  const city = await businessWardService.createBusinessesWard(req.body);
  res.json({
    message: "create city success fully",
    city
  });
});

const businessesId= catchAsync(async (req, res) => {
  const businesses = await businessWardService.getBusinessesWardId(req.params.districtID);
  res.json(businesses);
});

const queryBusinesses= catchAsync(async (req, res) => {
  const filter = pick(req.query, ["DistrictID"]);
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const result = await businessWardService.queryBusinessesWard(filter, options);
  res.json(result);
});

module.exports = {
  createBusinesses,
  queryBusinesses,
  businessesId
}
