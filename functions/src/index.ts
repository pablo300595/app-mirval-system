/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */


// import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";

// console.log(onRequest);
// console.log(logger.info);
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";

admin.initializeApp();

const app = express();

app.get("/", (req, res) => {
  const envConfig = {
    apiKey: functions.config().todo.api_key,
    authDomain: functions.config().todo.auth_domain,
    projectId: functions.config().todo.project_id,
    storageBucket: functions.config().todo.storage_bucket,
    messagingSenderId: functions.config().todo.messaging_sender_id,
    appId: functions.config().todo.app_id,
    measurementId: functions.config().todo.measurement_id,
  };

  res.json(envConfig);
});

export const environment = functions.https.onRequest(app);


// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
