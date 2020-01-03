const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");

const app = express();

mongoose.connect("mongodb://localhost:27017/omnistack9", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//req.query: Acessar query params(para filtros) get
//req.params: Acessar route params(edição e delete) put/delete
//req.body: Acessar corpo da requisição(criação e edição) post

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
