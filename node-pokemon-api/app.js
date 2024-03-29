const express = require("express");
let pokemons = require("./mock-pokemon");
const { sucess } = require("./helper");
const morgan= require("morgan")

const app = express();
const port = 3000;

//création middleware

app.use(morgan('dev'))



app.get("/", (req, res) => res.send("Hello Express, 6"));
app.get("/api/pokemons/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const pokemon = pokemons.find((pokemon) => pokemon.id === id);
  const message = "Un pokémon a été trouvé";
  res.json(sucess(message, pokemon));
});

app.get("/api/pokemons/", (req, res) => {
  var total = pokemons;
  const message = "voici la liste complète des pokémons";
  res.json(sucess(message, total));
});

app.listen(port, () =>
  console.log(
    `Notre application Node est démarrée sur http://localhost:${port}`
  )
);
