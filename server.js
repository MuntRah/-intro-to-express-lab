const express = require("express");
const app = express();

app.get("/greetings/:name", (req, res) => {
  const name = req.params.name;
  res.send(`<h1>Hello again ${name} !</h1>`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//  .................................................

app.get("/roll/:nob", (req, res) => {
  const nob = req.params.nob;

  if (!isNaN(nob)) {
    let rand = Math.floor(Math.random() * nob);
    res.send(`<h1>you rolled a ${rand} </h1>`);
  } else {
    res.send(`put a number`);
  }
});

//.........................................................

const collectibles = [
  { name: "shiny ball", price: 5.95 },
  { name: "autographed picture of a dog", price: 10 },
  { name: "john cena shirt", price: 11 },
  { name: "world cup ball", price: 20 },
  { name: "the best ball", price: 15 },
  { name: "panana figure", price: 16 },
];

app.get("/collectibles/:index", (req, res) => {
  const index = req.params.index;

  if (index >= 0 && index < collectibles.length) {
    const name = collectibles[index].name;
    const price = collectibles[index].price;
    res.send(`<h1>Did you want the ${name}? For $${price}</h1>`);
  } else {
    res.send(`This item is not available`);
  }
});

//.......................................................

const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" },
];
app.get("/shoes", (req, res) => {
  const arr1 = [];
  const type = req.query.type;
  const minPrice = req.query.minPrice;
  const maxPrice = req.query.maxPrice;

  shoes.forEach((n) => {
    if (
      (!minPrice || n.price >= minPrice) &&
      (!maxPrice || n.price <= maxPrice) &&
      (!type || n.type === type)
    ) {
      arr1.push(n);
    }
  });

  if (arr1.length === 0) {
    res.send("not found");
  }

  let items = "";
  for (let i = 0; i < arr1.length; i++) {
    items += ` <h1>  name :${arr1[i].name}  price :${arr1[i].price} type: ${arr1[i].type} </br></h1>  `;
  }

  res.send(items);
});
