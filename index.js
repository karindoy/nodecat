const express = require('express')
const app = express()
const port = 8080
const bodyParser = require('body-parser');
const cors = require('cors');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());


app.get('/', (req, res) => {
  console.log("get /");
  res.send({ works: `Eu estou funcionando!!`, 
  cadastrar: `POST http://localhost:${port}/cadastro `,
  lista_cadastro: `GET http://localhost:${port}/cadastro/:id`,
  gato_mia: `GET http://localhost:${port}/gato`,
  gato_foto: `GET http://localhost:${port}/gato/:id`})

  console.log("\n");
});

app.post('/cadastro', (req, res) => {
  console.log("post /cadastro");
  const { name } = req.body;
  console.log(req.body);
  console.log(name)
  res.send({ welcome: `Eai ${name}, ja fiz seu cadastro.` })

  console.log("\n");
});

app.get('/cadastro/:id', (req, res) => {
  console.log("get /cadastro/:id");
  const { id } = req.params;
  console.log("id: "+id);

  res.send({ greetings: `Hello ${id}!!` })

  console.log("\n");
});

app.get('/gato/', (req, res) => {
  console.log("get /mia/");
  res.send({ gato: `Miauuuuu` })
});

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

app.get('/gato/', (req, res) => {
  console.log("get /gato/");
  const randomid = randomIntFromInterval(1, 11)
  res.sendFile(__dirname + '/src/img/'+randomid+'.jpg')
});




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)

})
