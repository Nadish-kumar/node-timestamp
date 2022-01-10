const fs = require("fs");
const express = require("express");
const app = express();
const cors = require("cors");
let option = {
    origin: "*"
}
app.use(cors(option))

app.get("/create", (req, res) => {
    let date = new Date();
    let time =  `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
    let file = `${time}.txt`;
    let timeStamp = date.getTime();
    let data = new Date(timeStamp).toString();

    res.json(fs.writeFile(`${file}`, data, (err) => {
        if (err) throw err;
        console.log(file);
    }))
})

app.get("/read", (req, res) => {
    res.json(fs.readdir("C:\\Users\\nadish kumar\\Desktop\\B29WD\\node js file task", (err, data) => {
        if (err) 
            throw err;
        
        console.log(data);
    }))
})


app.listen(3000);

