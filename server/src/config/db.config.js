const db = require("../models");
const Role = db.role;
const Board = db.board;

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });

  Board.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Board({
        name: "Platform Launch",
        id: "1",
        ownerID: "747a7d05-592c-4dba-b4f1-bb446ec1db8f",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'Board 1' to boards collection");
      });
    }
  });
}

db.mongoose
  .connect(
    `mongodb+srv://Swiichy:DMHdHAnNmIRp5Jdz@cluster01.smgvwth.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

db.mongoose.set("strictQuery", true);
