const express = require('express');
const app = express();

/* :id vira um atributo dentro do objeto params,
   que por sua vez está dentro do objeto req */
app.get('/api/people/:id', function (req, res) {
  res.send(req.params.id);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});