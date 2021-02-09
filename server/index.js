const express=require("express");
const app=express();
const multer=require("multer");
const upload=multer({/* file type validator*/
    fileFilter:(req,file,cb)=>{
        console.log("Hello", file);
        if(file.mimetype === 'text/plain' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
            cb(null,true);
        }else{
            cb(null,false);
            return cb(new Error('***** Sent a non-supported file: supported files are .txt, .jpeg, and .png *****'));            
            
        }
}});

const {body, validationResult}=require('express-validator');


app.use(express.json());

app.post("/api/form", upload.single('upfile'),
(req,res)=>{
    /* unncessary b/c it's required by front end
    if(req.file===undefined){ //empty file validator
        res.send("empty");
        return;
    }*/

    const file=req.file;
    console.log(file.mimetype,"filehere");
    res.json({fileName:file.originalname, size:`${file.size} bytes`});
})

const PORT=4000;
app.listen(PORT, ()=>console.log(`listening to port ${PORT}`));
