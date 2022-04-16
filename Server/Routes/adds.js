const express = require("express");
const router = express.Router();
const User = require("../Model/Model");
const mongoose = require("mongoose");
var CryptoJS = require("crypto-js");
var fs = require("fs");
var path = require("path");
var key = "asdfasdasdcxzcjCJKCBkjxzxbc";

router.post('/login', (req, res, next)=> {
	User.findOne({email:req.body.email}).then((data)=>{
		if(data){
            var encPassword = CryptoJS.AES.decrypt( data.password,key);
            var originalPassword = encPassword.toString(CryptoJS.enc.Utf8)
			if(req.body.password==originalPassword){
				res.send({"success":data});				
			}else{
				res.send({"msg":"wrong password"});
			}
		}else{
			res.send({"msg":"Nothing Found"});
		}
	});
});

var multer = require('multer');
  
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({ storage: storage });
    

router.post("/reg", upload.single('image'), (req, res, next) => {
  var encPassword = CryptoJS.AES.encrypt(req.body.password, key);
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    phonenumber: req.body.phonenumber,
    address: req.body.address,
    password: encPassword,
    img: {
      data: fs.readFileSync(path.join(__dirname + './uploads/' + req.file.filename)),
      contentType: 'image/png'
  }
  });
  user
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        newUser: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
