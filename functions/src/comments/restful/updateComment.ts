import db from "../../config/firestore.config";
import createRestuflFunction, { MethodEnum } from "../../utils/helpers";

const updateComment = createRestuflFunction({
  method: MethodEnum.PATCH,
  callback: async (req, res) => {
    try {
      const docId = req.params["0"];
      // const isDone = req.body["isDone"];

      const query = db.collection("comments").doc(docId);
      // await query.set({ isDone }, { merge: true });
      const snap = await query.get();

      res.status(200).json({
        message: "Comment updated",
        data: {
          id: docId,
          comment: snap.data(),
        },
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
        err,
      });
    }
  },
});

export default updateComment;
