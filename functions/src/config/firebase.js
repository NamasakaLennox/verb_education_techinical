// configuration file to initialize database and setup app
const admin = require("firebase-admin");

const serviceAccount = require("./permissions.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "",
});

const db = admin.firestore();

module.exports = { admin, db };
