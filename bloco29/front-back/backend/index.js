const express = require('express');
const ArtistController = require('./controllers/artistControler');
const app = express();
const port = 3001;
const cors = require('cors');

app.get('/', (req, res) => {
  res.send('hello world')
});

app.use(express.json());
app.use(cors());
app.use('/artists', ArtistController)

app.listen(port, () => console.log(`Escutando na porta ${port}`));
