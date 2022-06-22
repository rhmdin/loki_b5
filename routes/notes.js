var express = require("express");
var router = express.Router();
const Validator = require('fastest-validator')
const v = new Validator();
const{Notes} = require("../models/Notes.js");

router.get("/", function (req,res,next){
    res.send("Bismillah TBPWEB");
});

router.get("/env", function (req, res, next){
    res.send(process.env.APP_NAME);
});

router.post("/", async(req,res,next)=>{
    //validation
    const schema = {
        title: "string",
        description: "string|optional",
    };
    const validate = v.validate(req.body, schema);
    if(validate.length){
        return res.status(400).json(validate);
    }
    //proses create
    const note = await Notes.create(req.body);
    res.json({
        status: 200,
        message: "Yee Alhamdulillah bisa dh kebuat",
        data: note,
    });

});

module.exports = router;