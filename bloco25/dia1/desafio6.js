
db.clientes.aggregate([
  {
$group: {
      _id: {
        sexo: "$sexo",
        estado: "$endereco.uf",
      },
      total: { $sum: 1 },
    }
  }
]);