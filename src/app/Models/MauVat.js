const { Int32 } = require('mongodb');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const mau_vat = new Schema({
    id: ObjectId,
    So_hieu_bttnvn: String,
    Ten_kh: String,
    Ten_vn: String,
    Ten_dia_phuong: String,
    Ten_tieng_anh: String,
    //Auto complete string
    Gioi: {
        data: String ,
        // type: autocomplete,
    },
    Nganh: String,
    Lop: String,
    Bo: String,
    Ho: String,
    Giong: String,
    Loai: String,
    //
    Gioi_tinh: String, //Checklist
    Nguoi_dinh_ten: String,
    Ngay_dinh_ten: Date,
    So_luong: Number,
    Loai_mau_vat: String, //checklistbox
    Cao: String,
    Rong: String,
    Dai: String,
    Trong_luong: String,
    The_tich: String,
    Quoc_gia: String, //Combobox
    Tinh: String,
    Huyen: String,
    Image: {
        data: Buffer,
        contentType: String
    },
    AnhConvert: String,
    Video: { //kieu video
        data: Buffer,
        contentType: String
    },
    Thong_tin_khac: Buffer,
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
});

// import mongoose from 'mongoose';
// const { Schema } = mongoose;

// const mau_vat = new Schema({
//     name: String, // String is shorthand for {type: String}
//     ngay_phat_hien: Date,
//     // body:   String,
//     // comments: [{ body: String, date: Date }],
//     // date: { type: Date, default: Date.now },
//     // hidden: Boolean,
//     // meta: {
//     //   votes: Number,
//     //   favs:  Number
//     // }
// });
module.exports = mongoose.model('mau_vat', mau_vat)