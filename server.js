const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Welcome!')
});

app.get('/version', (req, res) => {
  res.send('0.21.3')
});

app.listen(port, () => {
  console.log(`Server app listening on port ${port}!`)
});
