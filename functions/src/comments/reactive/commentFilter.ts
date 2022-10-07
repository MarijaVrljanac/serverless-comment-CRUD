import * as functions from "firebase-functions";

const commentFilter = functions.firestore
  .document("comments/{commentId}")
  .onCreate((snapshot, context) => {
    const comment = snapshot.data();
    console.log("Created new comment", comment);
    comment.filter();
    return null;
  });

export default commentFilter;
