const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

const reservations = require("./reservation-data");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/home.html"
    )
});

app.get("/view",(req,res)=>{
    res.sendFile(__dirname + "/public/view.html"
    )
});

app.get("/make",(req,res)=>{
    res.sendFile(__dirname + "/public/make.html"
    )
});

app.get("/api/reservations",(req,res)=>{
    res.json(reservations);
});

app.post("/api/reservations",(req,res)=>{
    const newReservation = req.body;
    reservations.push(newReservation);
    res.json(newReservation);

})

app.listen(PORT, ()=>{
    console.log(`Server listening  on http://localhost:${PORT}`);
})
