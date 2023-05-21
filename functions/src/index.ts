import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import * as cors from "cors";


admin.initializeApp();

const app = express();

app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

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
