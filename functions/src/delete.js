const config4 = require("./config/firebase");

// deletes an existing item by id
const deleteItem = (req, res) => {
  (async () => {
    try {
      const document = config4.db.collection("inventory").doc(req.params.id);
      await document.delete();
      // Successfully deleted document
      return res.status(200).send({ message: "item successfully deleted" });
    } catch (error) {
      // Handle error if it fails
      console.log(error);
      return res.status(500).send(error);
    }
  })();
};

module.exports = { deleteItem };
