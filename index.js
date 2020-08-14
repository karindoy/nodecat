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
  res.send({ works: `Eu estou funcionando!!` })
});

app.post('/cadastro', (req, res) => {
  const { name } = request.body;
  res.send({ welcome: `Eai ${name}, ja fiz seu cadastro.` })
});

app.get('/cadastro/:id', (req, res) => {
  const { id } = req.params;
  res.send({ greetings: `Hello ${id}!!` })
});

app.get('/gato/:id', (req, res) => {
  res.send({ gato: `Miauuuuu` })
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
