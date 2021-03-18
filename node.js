var express = require('express');

var app = express();
app.use(express.static('.'));

app.listen(8080, () => {
  console.log('Assemblyscript-plate running at: http://localhost:8080');
});