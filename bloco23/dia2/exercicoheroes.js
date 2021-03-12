db.superheroes.find({ "aspects.height": { $lt: 180 } }).count();
db.superheroes.find({ "aspects.height": { $lte: 180 } }).count();
db.superheroes.find({ "aspects.height": { $gte: 200 } }).count();
db.superheroes.find({ "aspects.eyeColor": { $eq: "green" } }).pretty();
db.superheroes.find({ "aspects.eyeColor": { $eq: "blue" } }).pretty().count();
db.superheroes.find({ "aspects.hairColor": { $nin: ["black", "No Hair"] } }).count();
db.superheroes.find({ "aspects.height": {$not: { $gt: 180 } }}).count();
db.superheroes.find({ nor: [{ race: "Human" },{ "aspects.height": { $gt: 180 } }]}).pretty();
db.superheroes.find(
  {
and:[
          {
or: [{ "aspects.height": 180 }, { "aspects.height": 200 }]
          },
          {
              publisher: "Marvel Comics"
          }
      ]
  }
).pretty();