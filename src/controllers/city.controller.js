const pick = require("../utils/pick");
const catchAsync = require("../utils/catchAsync");
const { cityService } = require("../services");


const createCity = catchAsync(async (req, res) => {
  const city = await cityService.createCity(req.body);
  res.json({
    message: "create city success fully",
    city
  });
});

const queryCity = catchAsync(async (req, res) => {
  const filter = pick(req.query, ["Title", "role"]);
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const result = await cityService.queryCity(filter, options);
  res.json(result);
});

module.exports = {
  createCity,
  queryCity
}
