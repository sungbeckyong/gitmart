const express = require('express');
const app = express();
app.get('/', (req, res, err) => {
  res.send('Hello Node.js');
});
app.listen(8080, () => {
  console.log('Server Start');
});