const pick = require("../utils/pick");
const catchAsync = require("../utils/catchAsync");
const {businessVnService } = require("../services");

const createBusinesses= catchAsync(async (req, res) => {
  const city = await businessVnService.createBusinesses(req.body);
  res.json({
    message: "create city success fully",
    city
  });
});

const businessesId= catchAsync(async (req, res) => {
  const businesses = await businessVnService.getBusinessesId(req.params.businessesId);
  res.json(businesses);
});

const queryBusinesses= catchAsync(async (req, res) => {
  const filter = pick(req.query, ["Created", "DiaChiCongTy","TinhThanhTitle","DiaChiCongTy","Title"]);
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const result = await businessVnService.queryBusinesses(filter, options);
  res.json(result);
});

module.exports = {
  createBusinesses,
  queryBusinesses,
  businessesId
}
