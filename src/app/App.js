import express from "express";

const app = express();


app.get("/" , (req,res)=>{
        console.log("reached here");
})

app.use('/api', function (req, res, next) {
    res.send({ "name": "Imran" });
    next();
});



export default app;
