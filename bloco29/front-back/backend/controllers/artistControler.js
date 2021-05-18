const { Router } = require('express');

const ArtistController = Router();

const Artist = require('../models/artist');

ArtistController.get('/', async (req, res) => {
  const aritst = await Artist.getAll();
  res.status(200).json(aritst);
})

ArtistController.post('/', (req, res) => {
  const { nome } = req.body;
  Artist.create(nome);
  res.status(201).send({ message: 'cadastrado com sucesso' })
})

module.exports = ArtistController;