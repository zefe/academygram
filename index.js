const express = require('express');
const api = require('./api');
const app = express();
const path = require("path");

app.use(express.json())

app.use("/public", express.static(path.join(__dirname, "public")));

app.all('/', (req, res) => {
  res.redirect('api/views/signup');
  res.end()
})

app.use('/api', api)

//server
const server = app.listen(8000, function() {
  console.log(`Listening http://localhost:${server.address().port}`);
});