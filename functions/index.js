/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const express = require("express");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started
const app = express();
app.get("/", (req, res) => res.status(200).send("Hello World!"));

exports.app = onRequest(app);
