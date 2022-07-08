const mongoose = require ("mongoose");
const { toJSON, paginate } = require("./plugins");

const businessesWardSchema = new mongoose.Schema ({
  UrlFacet: {
    type:String,
  },

  Title: {
    type:String
  },
  Total: {
    type:Number
  }
},{timestamps:true})

businessesWardSchema.plugin(toJSON);
businessesWardSchema.plugin(paginate);


const BusinessesWard = mongoose.model("BusinessesWard", businessesWardSchema);
module.exports = BusinessesWard;
