# nodecat

Simple Rest API in NodeJS that register a user and return a cat photo.

Clone this repository: 

`git clone https://github.com/karindoy/nodecat.git`

Enter in nodecat folder.

Install node dependencies:

`npm install`

Start the project: 

`npm start`

Access home page in  `http://localhost:8080/`.

Access register page with POST method with {name: "your name"} in the body in `http://localhost:8080/cadastro`.

Access list of register page with GET method in `http://localhost:8080/cadastro/:id` ex: `http://localhost:8080/cadastro/1`

Access cat miau page with GET method in `http://localhost:8080/gato`.

Access cat photo page in GET method in `http://localhost:8080/gato/:id` ex: `http://localhost:8080/gato/1`
