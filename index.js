const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/save", (req, res) => {
    let name = req.body.name;

    let date = new Date();
    let hr = date.getHours();
    if (hr < 12) {
        res.send("Good Morning " + name);
    }
    else if (hr >= 12 && hr < 16) {
        res.send("Good Afternoon " + name);
    }
    else {
        res.send("Good Evening " + name);
    }
});
app.listen(9003,()=>{console.log("Server Ready @ 9003")})