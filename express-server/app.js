const express = require("express");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.listen(3000, () => console.log("Server running on port 3000"));

const ciudades = ["Paris", "Barcelona", "Barranquilla", "Montevideo", "Santiago de Chile","Mexico DF", "Nueva York" ];
app.get("/city",(req,res,next)=>res.json(ciudades));

const misDestinos = [];
app.get("/my", (req, res, next) => res.json(misDestinos));
app.post("/my", (req, res, next) => {
  console.log(req.body);
  misDestinos.push(req.body.nuevo);
  res.json(misDestinos);
});

app.get("/api/translation", (req, res, next) => res.json([
  {lang: req.query.lang, key: 'HOLA', value: 'HOLA ' + req.query.lang}
]));
