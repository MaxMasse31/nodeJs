const express = require("express");
let pokemons = require("./mock-pokemon");

const app = express();
const port = 3000;

// app.use(cors())

app.get("/", (req, res) => res.send("Hello Express, 6"));

app.get("/api/pokemons/:id", (req, res) => {
  // retourne ici le noombre et non la chaine de caracères
  const id = parseInt(req.params.id);
  const pokemon = pokemons.find((pokemon) => pokemon.id === id);
  var total= pokemons.length
//   res.send(`Vous avez-demandé le pokémon ${pokemon.name}` );
  res.send(`il y a ${total} pokemon dans votre pokedex`);

});



app.listen(port, () =>
  console.log(
    `Notre application Node est démarrée sur http://localhost:${port}`
  )
);
