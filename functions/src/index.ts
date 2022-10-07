// import * as functions from "firebase-functions";
// import { createComment, deleteComment, getAllComments, onCommentCreated, updateComment } from ".\comments";
import createComment from "./comments/restful/createComment";
import deleteComment from "./comments/restful/deleteComment";
import getAllComments from "./comments/restful/getAllComments";
import onCommentCreated from "./comments/reactive/onCommentCreated";
import updateComment from "./comments/restful/updateComment";
import deleteBadWord from "./comments/restful/deleteBadWord";
import getAllBadWords from "./comments/restful/getAllBadWords";



// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//     if(request.method ==="GET"){
//         response.status(200).json({message:"Hello from Firebase!"});
//     }else{
//         response.status(400).json({message:"Bad request"});
//     }
// });



exports.getAllComments = getAllComments;
exports.createComment = createComment;
exports.onCommentCreated = onCommentCreated;
exports.updateComment = updateComment;
exports.deleteComment = deleteComment;
exports.deleteBadWord = deleteBadWord;
exports.getAllBadWords = getAllBadWords;


