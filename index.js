const express = require('express');
const router = require('./routes/index_router');

const PORT = 3000; 

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(express.static('views'));

app.use(router)

app.listen(PORT, function(req, res) {
  console.log(`Server is running http://localhost:${PORT}`);
});