const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })
const router = express.Router();
const MauVatController = require('../app/controllers/MauVatController');
const checkLogin = require('../middleware/middleware')
router.post('/store', upload.single('Image'), MauVatController.store);
router.use('/show', MauVatController.index);
router.get('/edit/:id', MauVatController.edit);
router.get('/:id', checkLogin, MauVatController.show);





module.exports = router;