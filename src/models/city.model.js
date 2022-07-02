const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");
const citySchema = new mongoose.Schema({
  Type: {
    type: String,
    required: true
  },
  SolrID: {
    type: String
  },
  ID:{
    type:Number
  },
  Title: {
    type: String
  },
  STT:{
    type:"Number"
  },
  TotalDoanhNghiep: {
    type: String
  }

}, {  timestamps: true});
citySchema.plugin(toJSON);
citySchema.plugin(paginate);
const City = mongoose.model("City", citySchema);

module.exports = City;
