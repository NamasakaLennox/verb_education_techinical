const config = require("./config/firebase");
// updates an existing item by id
const updateItem = (req, res) => {
  (async () => {
    try {
      const document = config.db.collection("inventory").doc(req.params.id);

      const response = {
        name: req.body.name,
        quantity: req.body.quantity,
        price: req.body.price,
      };
      await document.update(response);
      // Successfully updated document
      return res
        .status(200)
        .send({ message: "item updated successfully", response });
    } catch (error) {
      // Handle error
      console.log(error);
      return res.status(500).send(error);
    }
  })();
};

module.exports = { updateItem };
