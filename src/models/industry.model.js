const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");
const industrySchema = new mongoose.Schema({
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
  TitleAscii: {
    type:String,
    default:null
  },
  Lv1: {
    type:String
  },
  Lv2: {
    type:String,
    default:""
  },
  Lv3: {
    type:String,
    default:""
  },
  Lv4: {
    type:String,
    default:""
  },
  Lv5: {
    type:String,
    default:""
  },
  Created: {
    type:String,
    default:null
  },
  Updated: {
    type:String,
    default:null
  },
  TotalDoanhNghiep: {
    type:Number
  }
},{timestamps:true})
industrySchema.plugin(toJSON);
industrySchema.plugin(paginate);

const Industry = mongoose.model("Industry", industrySchema);
module.exports = Industry;
