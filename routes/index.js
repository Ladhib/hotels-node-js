var express = require('express');
var router = express.Router();
var hotelModel = require('../routes/models/hotelSchema')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// // multer for file upload:
// const multer  = require('multer')

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploadedImages')
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now()+ '-' +  file.originalname )
//     }
//   })
// const upload = multer({ storage:storage })


// // Post an hotel:
// router.post('/addHotel', upload.single('image'),(req, res)=> {
//   var image=req.file.path
//   console.log(req.body);
//   console.log(image);
//   console.log(req.body);
//   const hotel = new hotelModel({
//     Name:req.body.name,
//     adress:req.body.adress,
//     marketingText: req.body.marketingText,
//     localisation:req.body.localisation,
//     description:req.body.description,
//     offreAndPrice:JSON.parse(req.body.offreAndPrice),
//     imageProduct:image,
    
// });
// hotel.save().then(createdHotel => {
//   res.status(201).json({
//       message: "hotel added successfully",

//   });
// })
// .catch(error => {
//   console.log(error)
//   res.status(500).json({
//       message: "failed to create this hotel!"+error

//   });
// });
// })


module.exports = router;
