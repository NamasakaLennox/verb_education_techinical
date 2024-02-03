const config1 = require("./config/firebase");

// adds a new item to the database
const createItem = (req, res) => {
  (async () => {
    try {
      // Create and send the JSON object to the db to a collection called "products"
      await config1.db
        .collection("inventory")
        .doc("/" + req.body.id + "/")
        .create({
          name: req.body.name,
          quantity: req.body.quantity,
          price: req.body.price,
        });
      // Successfully created document
      return res.status(201).send();
    } catch (error) {
      // Handle error
      console.log(error);
      return res.status(500).send(error);
    }
  })();
};

module.exports = { createItem };
