const express = require ("express");
const mongoose = require ("mongoose");
const app = express ();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

mongoose.connect(
    process.env.MONOGODB_URI || "mongodb://localhost/ponders--3",
    {
        usedNewUrlParser:true,
        useUnifiedTopology: true,
        useFindandModify:false,
        useCreateIndex:true,
    }
);
const connection = mongoose.connection;

connection.on("connected", ()=> {
    console.log("Mongoose successfully connected!");
});

connection.on("error", (err) => {
    console.log("Mongoose connection error: ",err);
});

app.use(express.static("client/build"));

app.get("api/config",(req,res)=> {
    res.json({success: true});
})

app.get("*" , (req,res)=> {
    res.json({success:true});
})

app.listen(PORT,()=> {
    console.log('server is running on http://localhost:${PORT}');
});