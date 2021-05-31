var express = require('express');
var router = express.Router();
const xml2js = require('xml2js');
const fs = require('fs');
// var hotelModel = require('../routes/models/hotelSchema')
// const multer = require('multer');
// var data ; 
//  var upload = multer()
// /* GET users listing. */
const data = require('../data.json');


router.get('/hotels', function(req, res, next) {


// read XML from a file
const xml = fs.readFileSync('example.xml');
var json 
// convert XML to JSON
(async () => {
    try {
        const result = await xml2js.parseStringPromise(xml, { mergeAttrs: true });

        // convert it to a JSON string
         json = JSON.stringify(result, null, 4);
       
        // save JSON in a file
        fs.writeFileSync('data.json', json);
    } catch (err) {
        console.log(err);
    }
})();
console.log(data);
res.json(data.HotelSearchRES.Hotels);

});

// router.get('/hotels', function(req, res, next) {
//   res.json(data);
// });


// var fs = require('fs');
// const xml2js = require ('xml2js')
// const util = require ('util');
// const parser = new xml2js.Parser();
// fs.readFile('example.xml',(err,data)=>{
//   parser.parseString(data,(err,result)=>{
//     console.log(util.inspect(result,false,null,true));
//   })
// })
// fs.readFile('trueHotelSchema.json', 'utf8', function(err, data) {
//     if (err) throw err;
//     console.log(data);
// });


// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploadedImages')
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now()+ '-' +  file.originalname )
//   }
// })
 
// var upload = multer({ storage: storage })



// // Post an hotel:
// router.post('/addHotel',upload.single('image'),(req, res)=> {
//   var image=req.file.path
//   console.log(req.body);
//   console.log(image);
//   console.log(req.body);
    
// });
// trueHotelSchema.save().then(createdHotel => {
//   res.status(201).json({
//       message: "hotels added successfully",

//   });
// })
// .catch(error => {
//   console.log(error)
//   res.status(500).json({
//       message: "failed to create the db!"+error

//   });
// });


// // router.get("/getAllHotels", function(req, res, next) {
// //   hotelModel.find().then(allHotels=>{
// //     res.json(allHotels)
// //   })

// // });






 module.exports = router;
