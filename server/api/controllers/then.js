module.exports.then = (req, res, next) => {
  console.log('TCL: module.exports.then -> req', req);
  next();
  // req.dbCall
  //   .then((result) => {
  //     if (result.count > 0) {
  //       res.json(result);
  //     } else {
  //       res.status(400).send(result);
  //     }
  //   })
  //   .catch((err) => {
  //     res.status(500).send(err);
  //   });
};
