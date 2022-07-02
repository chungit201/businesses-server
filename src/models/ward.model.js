const mongoose = require("mongoose")
const { toJSON, paginate } = require("./plugins");
const wardSchema = new mongoose.Schema({
  Type: {
    type:Number
  },
  SolrID: {
    type:String
  },
  ID: {
    type:Number
  },
  Title: {
    type:String
  },
  STT: {
    type:Number
  },
  TinhThanhID: {
    type:Number
  },
  TinhThanhTitle: {
    type:String
  },
  TinhThanhTitleAscii: {
    type:String,
  },
  QuanHuyenID: {
    type:Number
  },
  QuanHuyenTitle: {
    type:String
  },
  QuanHuyenTitleAscii: {
    type:String
  },
  Created: {
    type:String,
    default:null
  },
  Updated: {
    type:String,
    default:null
  }
},{timestamps:true})
wardSchema.plugin(toJSON);
wardSchema.plugin(paginate);


const Ward = mongoose.model("Ward", wardSchema);
module.exports = Ward;
