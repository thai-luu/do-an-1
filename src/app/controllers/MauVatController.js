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

        const newMau_vat = new mau_vat({
            So_hieu_bttnvn: req.body.So_hieu_bttnvn,
            Gioi_tinh: req.body.Gioi_tinh,
            // Image: req.body.Image
        });
        newMau_vat.Image.contentType = req.file.mimetype,
            // newMau_vat.Image.data = Buffer.from(encode_image, 'base64');
            newMau_vat.Image.data = 'data:image/jpeg;base64,' + encode_image;
        await newMau_vat.save();
        return res.status(200).json({
            success: true,
            message: 'Dit me quang'
        })

    }
    show(req, res) {

        mau_vat.findOne({ _id: req.params.id })
            .then(mau_vat => {
                res.render('info', {
                    mau_vat: mongooseToObject(mau_vat)
                })

            })
    }
}
module.exports = new MauVatController;