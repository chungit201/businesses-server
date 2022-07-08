const httpStatus = require("http-status");
const { BusinessesWard } = require("../models");
const ApiError = require("../utils/ApiError");

const createBusinessesWard = async (businessesBody) => {
  // const createData = await BusinessesWard.create(businessesBody);
  // let businesses = await BusinessesWard.findOne(createData);
  // businesses = {
  //   ...businesses._doc,
  //   createdAt: new Date(businesses.createdAt).getTime()
  // };
  // return businesses;

  const data =


    [{
      "UrlFacet": "/binh-phuoc/huyen-bu-gia-map",
      "Title": "Huyện Bù Gia Mập",
      "Total": 365
    }, {
      "UrlFacet": "/binh-phuoc/huyen-bu-dang",
      "Title": "Huyện Bù Đăng",
      "Total": 882
    }, {
      "UrlFacet": "/binh-phuoc/huyen-bu-dop",
      "Title": "Huyện Bù Đốp",
      "Total": 362
    }, {
      "UrlFacet": "/binh-phuoc/huyen-chon-thanh",
      "Title": "Huyện Chơn Thành",
      "Total": 1463
    }, {
      "UrlFacet": "/binh-phuoc/huyen-hon-quan",
      "Title": "Huyện Hớn Quản",
      "Total": 511
    }, {
      "UrlFacet": "/binh-phuoc/huyen-loc-ninh",
      "Title": "Huyện Lộc Ninh",
      "Total": 920
    }, {
      "UrlFacet": "/binh-phuoc/huyen-phu-rieng",
      "Title": "Huyện Phú Riềng",
      "Total": 672
    }, {
      "UrlFacet": "/binh-phuoc/huyen-dong-phu",
      "Title": "Huyện Đồng Phú",
      "Total": 999
    }, {
      "UrlFacet": "/binh-phuoc/hon-quan",
      "Title": "Hớn Quản",
      "Total": 1
    }, {
      "UrlFacet": "/binh-phuoc/thanh-pho-dong-xoai",
      "Title": "Thành Phố Đồng Xoài",
      "Total": 236
    }, {
      "UrlFacet": "/binh-phuoc/thi-xa-binh-long",
      "Title": "Thị Xã  Bình Long",
      "Total": 670
    }, {
      "UrlFacet": "/binh-phuoc/thi-xa-phuoc-long",
      "Title": "Thị Xã  Phước Long",
      "Total": 1216
    }, {
      "UrlFacet": "/binh-phuoc/thi-xa-dong-xoai",
      "Title": "Thị Xã Đồng Xoài",
      "Total": 2817
    }, {
      "UrlFacet": "/binh-phuoc/tx-binh-long",
      "Title": "Tx Bình Long",
      "Total": 1
    }, {
      "UrlFacet": "/binh-phuoc/tx-phuoc-long",
      "Title": "Tx Phước Long",
      "Total": 1
    }, {
      "UrlFacet": "/binh-phuoc/tinh-binh-phuoc",
      "Title": "Tỉnh Bình Phước",
      "Total": 17
    }, { "UrlFacet": "/binh-phuoc/ap-bau-ke", "Title": "Ấp Bàu Ké", "Total": 1 }]
  data.map(async (item) => {
    return await BusinessesWard.create(item);
  });
};

const getBusinessesWardId = async (id) => {
  const businesses = await BusinessesWard.findOne({ DistrictID: id });
  if (!businesses) {
    throw new ApiError(httpStatus.NOT_FOUND, "Businesses not found");
  }
  return businesses;
};


const queryBusinessesWard = async (filter, options) => {
  const businesses = await BusinessesWard.paginate(filter, options);
  return businesses;
};

module.exports = {
  createBusinessesWard,
  getBusinessesWardId,
  queryBusinessesWard
};
