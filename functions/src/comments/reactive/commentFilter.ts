import * as functions from "firebase-functions";
import { IComment } from "../models/models";
import db from "../../config/firestore.config";


const rudeWords: string[] = ["fuck", "ing", "hell", "mate"];

const onCreateComment = functions.firestore
  .document("comments/{commentId}")
  .onCreate((snapshot, context) => {

   

    
    var comment = <IComment>snapshot.data();
    
    var commentText: string = comment.text;

    var star = "";
    rudeWords.forEach(word => {
      if(commentText.includes(word))
      {
        for(let i = 0; i< word.length; i++)
        {
          star += "*";
        }
        
        commentText = commentText.replace(new RegExp(word, "g"), star);
        return snapshot.ref.update({text:commentText});

      }
      return null;
    })

    comment.text = commentText;
    const query = db.collection("badwords");
    const querySnapshot = query.get();

    console.log(querySnapshot);
    console.log("Trigger", comment);
    return null;
});

export default onCreateComment;
