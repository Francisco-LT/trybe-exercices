db.bios.find({_id: 8});

db.bios.find({ _id: 8 }, { name: 1 });

db.bios.find({ _id: 8 }, { name: 1, birth: 1, _id: 0 });

db.bios.find({ "name.first": "John" }).pretty();

db.bios.find().limit(3).pretty();

db.bios.find().limit(2).skip(5).pretty();