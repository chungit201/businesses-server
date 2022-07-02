const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

const businessesSchema = new mongoose.Schema({
  Type: {
    type: Number
  },
  SolrID: {
    type: String
  },
  ID: {
    type: Number
  },
  MaSoThue: {
    type: String
  },
  NgayCap: {
    type: String
  },
  NgayDongMST: {
    type: String,
    default: null
  },
  Title: {
    type: String
  },
  TitleEn: {
    type: String,
    default: null
  },
  TitleEnAscii: {
    type: String,
    default: null
  },
  DiaChiCongTy: {
    type: String
  },
  DiaChiNhanThongBaoThue: {
    type: String,
    default: null
  },
  NamTaiChinh: {
    type: String,
    default: null
  },
  MaSoHienThoi: {
    type: String,
    default: null
  },
  NgayNhanToKhai: {
    type: String,
    default: null
  },
  NgayBatDauHopDong: {
    type: String,
    default: null
  },
  VonDieuLe: {
    type: String,
    default: null
  },
  TongSoLaoDong: {
    type: String,
    default: null
  },
  CapChuongLoaiKhoan: {
    type: String,
    default: null
  },
  HinhThucThanhToan: {
    type: String,
    default: null
  },
  PhuongPhapTinhThueGTGT: {
    type: String,
    default: null
  },
  ChuSoHuu: {
    type: String,
    default: null
  },
  ChuSoHuu_DiaChi: {
    type: String,
    default: null
  },
  GiamDoc: {
    type: String,
    default: null
  },
  GiamDoc_DiaChi: {
    type: String,
    default: null
  },
  KeToanTruong: {
    type: String,
    default: null
  },
  KeToanTruong_DiaChi: {
    type: String,
    default: null
  },
  Created: {
    type:String,
    required:true
  },
  Updated: {
    type:String,
    default: null
  },
  IsDelete: {
    type: Boolean,
    default: false
  },
  RequestChanged: {
    type: Boolean,
    default: false
  },
  ExitsInGDT: {
    type: Boolean,
    default: false
  },
  SourceID: {
    type: Number,
    default: 0
  },
  TinhThanhID: {
    type: Number,
  },
  TinhThanhTitle: {
    type: String,
    default: null
  },
  TinhThanhTitleAscii: {
    type: String,
    default: null
  },
  QuanHuyenID: { type: Number, default: null },
  QuanHuyenTitle: {
    type: String,
    default: null
  },
  QuanHuyenTitleAscii: {
    type: String,
    default: null
  },
  PhuongXaID: {
    type: Number,
    default: null
  },
  PhuongXaTitle: {
    type: String,
    default: null
  },
  PhuongXaTitleAscii: {
    type: String,
    default: null
  },
  NoiDangKyQuanLyID: {
    type: Number,
    default: null
  },
  NoiDangKyQuanLy_CoQuanTitle: {
    type: String,
    default: null
  },
  NoiDangKyQuanLy_CoQuanTitleAscii: {
    type: String,
    default: null
  },
  NoiDangKyQuanLy_DienThoai: {
    type: String,
    default: null
  },
  NoiDangKyQuanLy_Fax: {
    type: String,
    default: null
  },
  NoiNopThueID: {
    type: Number,
    default: null
  },
  NoiNopThue_DienThoai: {
    type: String,
    default: null
  },
  NoiNopThue_Fax: {
    type: String,
    default: null
  },
  NoiNopThue_CoQuanTitle: {
    type: String,
    default: null
  },
  NoiNopThue_CoQuanTitleAscii: {
    type: String,
    default: null
  },
  QuyetDinhThanhLap: {
    type: String,
    default: null
  },
  QuyetDinhThanhLap_NgayCap: {
    type: String,
    default: null
  },
  QuyetDinhThanhLap_CoQuanCapID: {
    type: Number,
    default: null
  },
  QuyetDinhThanhLap_CoQuanCapTitle: {
    type: String,
    default: null
  },
  QuyetDinhThanhLap_CoQuanCapTitleAscii: {
    type: String,
    default: null
  },
  GiayPhepKinhDoanh_CoQuanCapID: {
    type: Number,
    default: null
  },
  GiayPhepKinhDoanh_CoQuanCapTitle: {
    type: String,
    default: null
  },
  GiayPhepKinhDoanh_CoQuanCapTitleAscii: {
    type: String,
    default: null
  },
  GiayPhepKinhDoanh: {
    type: String,
    default: null
  },
  GiayPhepKinhDoanh_NgayCap: {
    type: String,
    default: null
  },
  LoaiHinhID: {
    type: Number,
    default: null
  },
  LoaiHinhTitle: {
    type: String,
    default: null
  },
  LoaiHinhTitleAscii: {
    type: String,
    default: null
  },
  NganhNgheID: {
    type: Number,
    default: null
  },
  NganhNgheTitle: {
    type: String,
    default: null
  },
  NganhNgheTitleAscii: {
    type: String,
    default: null
  },
  DSNganhNgheKinhDoanh: {
    type: Array,
    default: []
  },
  DSNganhNgheKinhDoanhID: {
    type: Array,
    default: []
  },
  DSMaNganhNgheKinhDoanh: {
    type: Array,
    default: []
  },
  Lv1: {
    type: String,
    default: null
  },
  Lv2: {
    type: String,
    default: null
  },
  Lv3: {
    type: String,
    default: null
  },
  Lv4: {
    type: String,
    default: null
  },
  Lv5: {
    type: String,
    default: null
  },
  DSNganHang: {
    type: Array,
    default: []
  },
  DSNganHangID: {
    type: Array,
    default: []
  },
  DSThuePhaiNop: {
    type: Array,
    default: []
  },
  DSThuePhaiNopID: {
    type: Array,
    default: []
  },
  LtsDoanhNghiepTrucThuoc: {
    type: Array,
    default: []
  },
  DSTags: {
    type: Array,
    default: []
  }


}, { timestamps: true });

businessesSchema.plugin(toJSON);
businessesSchema.plugin(paginate);

const businesses = mongoose.model("Businesses", businessesSchema);

module.exports = businesses;
