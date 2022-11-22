const express = require('express');
require('./server/config/mongooseConfig')
const app = express();
const cors = require('cors')
app.use(cors());
app.use(express.json());

const routes = require('./server/config/routes')(app)
app.listen(8000, () => {
    console.log("Escuchando en el puerto 8000  http://localhost:8000");
  });