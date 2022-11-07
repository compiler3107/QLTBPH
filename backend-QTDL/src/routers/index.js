const router = require('express').Router()
const controller = require('../controllers/index')


router.post('/login',controller.login)
router.post('/register',controller.register)
router.put('/updateUser',controller.updateUser)

router.get('/lay/phonghoc',controller.layPhongHoc)
router.get('/lay/thietbi',controller.layThietBi)
router.get('/lay/tbdanhmuc/:madanhmuc',controller.layThietBiDanhMuc)
router.get('/lay/tbphonghoc',controller.layThietBiPhongHoc)
router.get('/lay/danhmuc',controller.layDanhMuc)

router.post('/them/phonghoc',controller.themPhongHoc)
// router.post('/them/thietbi/:matb&:tentb&:sl&:ngaynhaptb&:madanhmuc',controller.themThietBi)
router.post('/them/thietbi/:matb',controller.themThietBi)
router.post('/them/tbphonghoc',controller.themTbPhongHoc)
router.post('/them/danhmuc/:madanhmuc&:tendanhmuc',controller.themDanhMuc)

router.put('/capnhat/phonghoc', controller.capnhatPhongHoc)
router.put('/capnhat/thietbi',controller.capnhatThietBi)
router.put('/capnhat/tbphonghoc',controller.capnhatTbPhongHoc)
router.put('/capnhat/danhmuc',controller.capnhatDanhMuc)

router.delete('/xoa/phonghoc',controller.xoaPhongHoc)
router.delete('/xoa/thietbi',controller.xoaThietBi)
router.delete('/xoa/tbphonghoc',controller.xoaTbPhongHoc)
router.delete('/xoa/danhmuc',controller.xoaDanhMuc)

module.exports = router