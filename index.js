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
  res.send({ works: `Eu estou funcionando!!` })

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
  console.log("get /gato/:id");
  res.send({ gato: `Miauuuuu` })
});

app.get('/gato/:id', (req, res) => {
  console.log("get /gato/:id");
  res.sendFile(__dirname + '/src/img/100.jpeg')
});




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)

})
