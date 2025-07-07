const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/', (req, res) => {
  res.render('content');
});
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
