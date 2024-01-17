const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello Express, 6"));

app.get('/api/pokemons/1',(req,res)=>res.send("hello, Bulbozar"))

app.listen(port, () =>
  console.log(
    `Notre application Node est démarrée sur http://localhost:${port}`
  )
);
