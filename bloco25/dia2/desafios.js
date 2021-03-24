use('erp')
db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate('2020-01-01')
      }
    }
  },
  {
    $lookup: {
      from: 'clientes',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'dadosCliente'
    }
  },
  {
    $unwind: "$dadosCliente"
  },
]);
use('erp')
db.clientes.find();

use('erp')
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor:{
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            { $multiply: [86400000, 365] }
          ]
        }
      }
    }
  },
  { $match: {
      idade: { $gte: 18, $lte: 25 }
    }
    },
  {$count: "clientesjovvens"}
]);



use('erp')
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor:{
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            { $multiply: [86400000, 365] }
          ]
        }
      }
    }
  },
  { $lookup: {
    from: "vendas",
    localField: "clienteId",
    foreignField: "clienteId",
    as: "compras"
    }
  }
]);


use('erp')
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor:{
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            { $multiply: [86400000, 365] }
          ]
        }
      }
    }
  },
  { $lookup: {
    from: "vendas",
    localField: "clienteId",
    foreignField: "clienteId",
    as: "compras"
    }
  },
  { $match: {
    "compras.dataVenda": {
      $gte: ISODate('2019-06-01'),
      $lte: ISODate('2020-03-31')
    }
  }}
]).itcount();

use('erp')
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor:{
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            { $multiply: [86400000, 365] }
          ]
        }
      }
    }
  },
  { $lookup: {
    from: "vendas",
    localField: "clienteId",
    foreignField: "clienteId",
    as: "compras"
    }
  },
  { $match: {
    "compras.dataVenda": {
      $gte: ISODate('2019-06-01'),
      $lte: ISODate('2020-03-31')
    }
  }}
]);