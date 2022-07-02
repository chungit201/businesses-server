const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

const districtSchema = new mongoose.Schema({
  Type: {
    type: Number
  },
  SolrID: {
    type: String
  },
  ID: {
    type: Number
  },
  Title: {
    type: String
  },
  STT: {
    type: Number
  },
  TinhThanhID: {
    type: Number
  },
  TinhThanhTitle: {
    type: String
  },
  TinhThanhTitleAscii: {
    type: String
  },
  Created: {
    type: String,
    default: null
  },
  Updated: {
    type: String,
    default: null
  }
}, { timestamps: true });

districtSchema.plugin(toJSON);
districtSchema.plugin(paginate);


const District = mongoose.model("District", districtSchema);
module.exports = District;

