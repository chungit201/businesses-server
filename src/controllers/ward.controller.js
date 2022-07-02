const pick = require("../utils/pick");
const catchAsync = require("../utils/catchAsync");
const { wardService } = require("../services");

const createWard = catchAsync(async (req, res) => {
  const ward = await wardService.createWard(req.body);
  res.json({
    message: "create ward success fully",
    ward
  });
});

const queryWards = catchAsync(async (req, res) => {
  const filter = pick(req.query, ["Title", "role"]);
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const result = await wardService.queryWard(filter, options);
  res.json(result);
});

module.exports = {
  createWard,
  queryWards
}
