const db = require("../models");
const Board = db.board;

exports.createBoard = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Board
  const board = new Board({
    name: req.body.name,
    id: req.body.id,
    // columns: req.body.columns,
    ownerID: req.body.ownerID,
  });

  // Save Board in the database
  board
    .save(board)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Board.",
      });
    });
};

exports.getBoard = (req, res) => {
  const id = req.params.id;

  Board.find({ ownerID: id })
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Board with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Board with id=" + id });
    });
};

exports.deleteBoard = (req, res) => {
  const id = req.params.id;

  console.log(id);

  Board.findOneAndRemove({ id: id })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Board with id=${id}. Maybe Board was not found!`,
        });
      } else {
        res.send({
          message: "Board was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Board with id=" + id,
      });
    });
};
