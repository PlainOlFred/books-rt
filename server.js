const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(routes)


mongoose.connect(
        "mongodb://localhost/gbooks",
        { useNewUrlParser: true, useUnifiedTopology: true  }
    )
    .then(function () {
        console.log('=> Database Connected')
    })

app.listen(PORT, function serverConnection() {
    console.log(`=> App listening PORT ${PORT}`);
})