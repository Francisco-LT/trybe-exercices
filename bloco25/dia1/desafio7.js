db.clientes.aggregate([
  {
$group: {
      _id: {
        sexo: "$sexo",
        estado: "$endereco.uf",
      },
      total: { $sum: 1 },
    }
  },
  {
    $project: {
      _id: 0,
      "estado": "$_id.estado",
      "sexo": "$_id.sexo",
      "total": 1
    }
  }
]);