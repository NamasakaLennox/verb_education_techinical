const config2 = require("./config/firebase");

// gets a specified data item by id
const readById = (req, res) => {
  (async () => {
    try {
      // query database
      const document = config2.db.collection("inventory").doc(req.params.id);
      const product = await document.get();
      const response = product.data();

      // Successfully queried data
      return res.status(200).send(response);
    } catch (error) {
      // Handle error
      console.log(error);
      return res.status(500).send(error);
    }
  })();
};

module.exports = { readById };
