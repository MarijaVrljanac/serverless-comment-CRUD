import * as admin from "firebase-admin";

var serviceAccount = require("C:/Users/mvrljanac/Desktop/Projects/serverless-commentCRUD/functions/serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const db=admin.firestore();

export default db;
