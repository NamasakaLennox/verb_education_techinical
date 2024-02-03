const config3 = require("./config/firebase");

// gets all data in the database
const readAll = (req, res) => {
  (async () => {
    try {
      const query = config3.db.collection("inventory");
      const response = {};

      await query.get().then((querySnapshot) => {
        const docs = querySnapshot.docs; // result of the query
        // store result as an object
        for (const doc of docs) {
          response[doc.id] = {
            name: doc.data().name,
            quantity: doc.data().quantity,
            price: doc.data().price,
          };
        }
        return response; // each then should return a value
      });
      // Successfully queried data
      return res.status(200).send(response);
    } catch (error) {
      // Handle error
      console.log(error);
      return res.status(500).send(error);
    }
  })();
};

module.exports = { readAll };
