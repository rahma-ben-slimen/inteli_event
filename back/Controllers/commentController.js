const Comment = require('../models/commentModel');


exports.addComment = (req, res) => {
  Comment.addComment(req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json("OK");
  });
};


exports.getComments = (req, res) => {
  Comment.getCommentsByEvent(req.params.id, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};
