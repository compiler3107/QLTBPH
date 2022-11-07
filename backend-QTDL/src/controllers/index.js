const con = require("../config/index.js")
const controller = {
    login: async(req, res) => {
        var sql = `select Login(${req.body.username}, ${req.body.pass})`;
        con.query(sql, function(err, results) {
            if (err) throw err;
            res.json(results);
        });
    },

    register: async(req, res) => {
        var sql = `select Register(${req.body.username}, ${req.body.pass},${req.body.mail})`;
        con.query(sql, function(err, results) {
            if (err) throw err;
            res.json(results);
        });
    },
    updateUser: async(req, res) => {
        var sql = `select UpdateUser(${req.body.username}, ${req.body.pass})`;
        con.query(sql, function(err, results) {
            if (err) throw err;
            res.json(results);
        });
    },
    layThietBi: async(req, res) => {
        var sql = "SELECT * FROM thietbi";
        con.query(sql, function(err, results) {
            if (err) throw err;
            res.json(results);
        });
    },
    layPhongHoc: async(req, res) => {
        var sql = "SELECT * FROM phonghoc";
        con.query(sql, function(err, results) {
            if (err) throw err;
            res.json(results);
        });
    },
    layThietBiPhongHoc: async(req, res) => {
        var sql = "SELECT * FROM tbphonghoc";
        con.query(sql, function(err, results) {
            if (err) throw err;
            res.json(results);
        });
    },

    layThietBiDanhMuc: async(req, res) => {
        var sql = `SELECT thietbi.matb, thietbi.tentb, thietbi.ngaynhaptb, thietbi.sl FROM thietbi,danhmuc
        WHERE thietbi.madanhmuc = danhmuc.madanhmuc AND danhmuc.madanhmuc  ="${req.params.madanhmuc}"`;
        con.query(sql, function(err, results) {
            if (err) throw err;
            res.json(results);
        });
        // res.json({data:"dfdfdfjgyhj"})
    },

    layDanhMuc: async(req, res) => {
        var sql = "SELECT * FROM danhmuc";
        con.query(sql, function(err, results) {
            if (err) throw err;
            res.json(results);
        });
    },
    themPhongHoc: async(req, res) => {
        var sql = `insert into phonghoc Values (${req.body.maphong},${req.body.tenphong},${req.body.loaiphong})`;
        con.query(sql,function(err,results){
            if (err) throw err;
            res.json(results);
        })
    },
    themThietBi: async(req, res) => {
        console.log(req.params)
        var sql = `insert into thietbi Values ('${req.params.matb}','${req.params.tentb}','${req.params.sl}','${req.params.ngaynhaptb}','${req.params.madanhmuc})'`;
        con.query(sql,function(err,results){
            if (err) throw err;
            res.json(results);
        })
    },
    themTbPhongHoc: async(req, res) => {
        var sql = `insert into thietbi Values (${req.body.maphong},${req.body.matb})`;
        con.query(sql,function(err,results){
            if (err) throw err;
            res.json(results);
        })
    },
    themDanhMuc: async(req, res) => {
        var sql = `insert into danhmuc Values ('${req.params.madanhmuc}','${req.params.tendanhmuc}')`;
        con.query(sql,function(err,results){
            if (err) throw err;
            res.json(results);
        })
    },
    xoaPhongHoc: async(req, res) => {
        var sql = `delete from phonghoc where maphong = ${req.body.maphong}`;
        con.query(sql,function(err,results){
            if (err) throw err;
            res.json(results);
        })
    },
    xoaThietBi: async(req, res) => {
        var sql = `delete from thietbi where matb = ${req.body.matb}`;
        con.query(sql,function(err,results){
            if (err) throw err;
            res.json(results);
        })
    },
    xoaDanhMuc: async(req, res) => {
        var sql = `delete from danhmuc where madanhmuc = ${req.body.madanhmuc}`;
        con.query(sql,function(err,results){
            if (err) throw err;
            res.json(results);
        })
    },
    xoaTbPhongHoc: async(req, res) => {
        var sql = `delete from tbphonghoc where maphong = ${req.body.maphong}`;
        con.query(sql,function(err,results){
            if (err) throw err;
            res.json(results);
        })
    },
    capnhatPhongHoc: async(req, res) => {
        var sql = `update phonghoc set tenphong = ${req.body.tenphong}, loaiphong = ${req.body.loaiphong} where maphong = ${req.body.maphong}`;
        con.query(sql,function(err,results){
            if (err) throw err;
            res.json(results);
        })
    },
    capnhatThietBi: async(req, res) => {
        var sql = `update thietbi set tentb = ${req.body.tentb}, ngaynhaptb = ${req.body.ngaynhaptb}, madanhmuc = ${req.body.madanhmuc} where matb = ${req.body.matb}`;
        con.query(sql,function(err,results){
            if (err) throw err;
            res.json(results);
        })
    },
    capnhatTbPhongHoc: async(req, res) => {
        var sql = `update tbphonghoc set matb = ${req.body.matb} where maphong = ${req.body.maphong}`;
        con.query(sql,function(err,results){
            if (err) throw err;
            res.json(results);
        })
    },
    capnhatDanhMuc: async(req, res) => {
        var sql = `update phonghoc set tenpdanhmuc = ${req.body.tendanhmuc}, sl = ${req.body.sl} where mapdanhmuc = ${req.body.madanhmuc}`;
        con.query(sql,function(err,results){
            if (err) throw err;
            res.json(results);
        })
    },
}

module.exports = controller