db.restaurants.count({ borough: { $in: ["Queens" , "Staten Island", "Bronx" ]}}); //asduas dão o mesmo resultado
db.restaurants.find({ borough: { $in: ["Queens", "Staten Island", "Bronx"] } }).count(); //asduas dão o mesmo resultado
db.restaurants.find({ cuisine: { $ne: ["American"] } }).count();
db.restaurants.find({ rating: { $gte: 8 }}).count();
db.restaurants.find({ rating: { $lt: 4 }}).count();
db.restaurants.find({ rating: { $nin: [5, 6, 7] }}).count();
db.restaurants.find({ rating: { $not: { $lte: 5 } }}).count();
db.restaurants.find({ $or: [{ rating: { $gte: 6 } }, { borough: "Brooklyn" }] }).count();
db.restaurants.find({ $and: [
  { rating: { $gte: 4 } },
  { borough: { $in: ["Queens" , "Staten Island", "Bronx" ]}}
  ]
}).count();
db.restaurants.find({ $nor: [{ rating: { $eq: 1 } }, { cuisine: "American" }] }).count();

db.inventory.find({
  $and: [
    {$or: [{ rating: { $gt: 6, $lt:10 } }]},
    {$or: [{ borough : { $eq: "Brooklyn" } }, { cuisine : { $ne: "Delicatessen" }}]},
      ],
  });