import * as functions from "firebase-functions";

const onCommentCreated = functions.firestore
  .document("comments/{commentId}")
  .onCreate((snapshot, context) => {
    const comment = snapshot.data();
    console.log("Created new comment", comment);
    return null;
  });

export default onCommentCreated;
