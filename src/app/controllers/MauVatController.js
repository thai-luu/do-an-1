const { mutipleMongooseToObject } = require('../../utils/mongoose');
const { mongooseToObject } = require('../../utils/mongoose');
const express = require('express')
const mau_vat = require('../Models/MauVat')
const fs = require('fs')
class MauVatController {
    index(req, res, next) {
        mau_vat.find({}).then(mau_vats => {
                res.render('listMV', {
                    mau_vats: mutipleMongooseToObject(mau_vats)
                });
            })
            .catch(next);



    }
    async store(req, res) {
        var img = fs.readFileSync(req.file.path);
        var encode_image = img.toString('base64');
        var dvcc = req.body.dvcc;
        var dvcr = req.body.dvcr;
        var dvcd = req.body.dvcr;
        var dvtt = req.body.dvtt;
        var dvtrl = req.body.dvtrl;

        var newMau_vat = new mau_vat({
            So_hieu_bttnvn: req.body.So_hieu_bttnvn,
            Ten_kh: req.body.Ten_kh,
            Ten_vn: req.body.Ten_vn,
            Ten_dia_phuong: req.body.Ten_dia_phuong,
            Ten_tieng_anh: req.body.Ten_tieng_anh,
            //Auto complete req.body.
            Gioi: req.body.Gioi ,
            Nganh: req.body.Nganh,
            Lop: req.body.Lop,
            Bo: req.body.Bo,
            Ho: req.body.Ho,
            Giong: req.body.Giong,
            Loai: req.body.Loai,
            //
            Gioi_tinh: req.body.Gioi_tinh, //Checklist
            Nguoi_dinh_ten: req.body.Nguoi_dinh_ten,
            Ngay_dinh_ten: req.body.Ngay_dinh_ten,
            So_luong: req.body.So_luong,
            Loai_mau_vat: req.body.Loai_mau_vat, //checklistbox
            Cao: req.body.Cao + dvcc,
            Rong: req.body.Rong + dvcr,
            Dai: req.body.Dai + dvcd,
            Trong_luong: req.body.Trong_luong + dvtrl,
            The_tich: req.body.The_tich + dvtt,
            Quoc_gia: req.body.Quoc_gia, //Combobox
            Tinh: req.body.Tinh,
            Huyen: req.body.Huyen,
            // Image: req.body.Image
        });
        newMau_vat.Image.contentType = req.file.mimetype,
            // newMau_vat.Image.data = Buffer.from(encode_image, 'base64');
            newMau_vat.Image.data = 'data:image/jpeg;base64,' + encode_image;
        await newMau_vat.save();
        return res.redirect('/mauvat/add');


    }
    show(req, res) {
        var newMau_vat =
            mau_vat.findOne({ _id: req.params.id })
            .then(mau_vat => {
                res.render('info', {
                    mau_vat: mongooseToObject(mau_vat)
                })

            })

    }
    edit(req, res) {

        mau_vat.findOne({ _id: req.params.id })
            .then(mau_vat => {
                res.render('edit', {
                    mau_vat: mongooseToObject(mau_vat)
                })

            })
    }
    update(req, res) {
        var newMau_vat = new mau_vat();
        mau_vat.findOne({ _id: req.params.id })
            .then(mau_vat => {
                mau_vat.So_hieu_bttnvn = req.body.So_hieu_bttnvn,
                    mau_vat.So_hieu_bttnvn = req.body.So_hieu_bttnvn,
                    mau_vat.Ten_kh = req.body.Ten_kh,
                    mau_vat.Ten_vn = req.body.Ten_vn,
                    mau_vat.Ten_dia_phuong = req.body.Ten_dia_phuong,
                    mau_vat.Ten_tieng_anh = req.body.Ten_tieng_anh,
                    //Auto complete req.body.
                    mau_vat.Gioi = req.body.Gioi ,
                    mau_vat.Nganh = req.body.Nganh,
                    mau_vat.Lop = req.body.Lop,
                    mau_vat.Bo = req.body.Bo,
                    mau_vat.Ho = req.body.Ho,
                    mau_vat.Giong = req.body.Giong,
                    mau_vat.Loai = req.body.Loai,
                    //
                    mau_vat.Gioi_tinh = req.body.Gioi_tinh, //Checklist
                    mau_vat.Nguoi_dinh_ten = req.body.Nguoi_dinh_ten,
                    mau_vat.Ngay_dinh_ten = req.body.Ngay_dinh_ten,
                    mau_vat.So_luong = req.body.So_luong,
                    mau_vat.Loai_mau_vat = req.body.Loai_mau_vat, //checklistbox
                    mau_vat.Cao = req.body.Cao + dvcc,
                    mau_vat.Rong = req.body.Rong + dvcr,
                    mau_vat.Dai = req.body.Dai + dvcd,
                    mau_vat.Trong_luong = req.body.Trong_luong + dvtrl,
                    mau_vat.The_tich = req.body.The_tich + dvtt,
                    mau_vat.Quoc_gia = req.body.Quoc_gia, //Combobox
                    mau_vat.Tinh = req.body.Tinh,
                    mau_vat.Huyen = req.body.Huyen
                res.render('edit', {
                    mau_vat: mongooseToObject(mau_vat)
                })
            })

    }

}
module.exports = new MauVatController;